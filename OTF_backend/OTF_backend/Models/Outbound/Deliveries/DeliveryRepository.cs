using Microsoft.EntityFrameworkCore;
using OTF_backend.Models.Stock;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models.Outbound.Deliveries
{
    public class DeliveryRepository : IDeliveryRepository
    {
        private readonly AppDbContext _appDbContext;
        private readonly IProductStockPositionRepository _productStockPositionRepository;

        public DeliveryRepository(AppDbContext appDbContext, IProductStockPositionRepository productStockPositionRepository)
        {
            _appDbContext = appDbContext;
            _productStockPositionRepository = productStockPositionRepository;
        }

        public async void CreateDelivery(Delivery delivery)
        {
            await _appDbContext.Deliveries.AddAsync(delivery);
            await _appDbContext.SaveChangesAsync();
        }

        public async Task<Delivery[]> GetAllOrdersAsync()
        {
            IQueryable<Delivery> query = _appDbContext.Deliveries;

            return await query.ToArrayAsync();
        }

        public async Task<Delivery> GetDeliveryByDeliveryId(int deliveryId)
        {
            IQueryable<Delivery> query = _appDbContext.Deliveries;
            query = query.Where(d => d.DeliveryId == deliveryId);

            return await query.FirstOrDefaultAsync();
        }

        public async Task<Delivery> GetDeliveryByOrderId(string orderId)
        {
            IQueryable<Delivery> query = _appDbContext.Deliveries;
            query = query.Where(d => d.OrderId == orderId);

            return await query.FirstOrDefaultAsync();
        }

        public bool AllocateDelivery(int deliveryId)
        {
            var deliveryRows = _appDbContext.DeliveryRows.Where(dr => dr.DeliveryId == deliveryId);

            var stock =  _productStockPositionRepository.GetStockPerLocation();

            foreach (var deliveryRow in deliveryRows)
            {
                if (deliveryRow.OriginalQuantity <= 0)
                {
                    continue;
                }
                var quantityLeftToAllocate = deliveryRow.OriginalQuantity;
                quantityLeftToAllocate -= _appDbContext.ProductStockPositions.Where(x => x.DeliveryRowId == deliveryRow.DeliveryRowId).Sum(y => y.Quantity * -1);
                if (quantityLeftToAllocate <= 0)
                {
                    continue;
                }
                var productStock = stock.FirstOrDefault(x => x.ProductId == deliveryRow.ProductId);
                if (productStock == null || productStock.ProductStockLevels == null || productStock.ProductStockLevels.Count() == 0)
                {
                    return false;
                }

                foreach (var stockLevel in productStock.ProductStockLevels)
                {
                    if (quantityLeftToAllocate <= 0)
                    {
                        break;
                    }
                    var quantityToAllocate = 0;
                    if (stockLevel.Quantity < deliveryRow.OriginalQuantity)
                    {
                        quantityLeftToAllocate -= stockLevel.Quantity;
                        quantityToAllocate = stockLevel.Quantity;
                    }
                    else
                    {
                        quantityToAllocate = quantityLeftToAllocate;
                        quantityLeftToAllocate = 0;
                    }

                    _appDbContext.ProductStockPositions.Add(new ProductStockPosition
                    {
                        DeliveryId = deliveryId,
                        ProductId = deliveryRow.ProductId,
                        Quantity = quantityToAllocate * -1,
                        DeliveryRowId = deliveryRow.DeliveryRowId,
                        Location = stockLevel.LocationName,
                        StockLocationId = stockLevel.StockLocationId
                    });
                }
                if (quantityLeftToAllocate > 0)
                {
                    return false;
                }
            }
            _appDbContext.SaveChanges();
            
            return true;
        }

        public void UpdateOrder(UpdateOrder updateOrder)
        {
            var existingDeliveryRow = _appDbContext.DeliveryRows.FirstOrDefault(d => d.DeliveryRowId == updateOrder.DeliveryRowId);
            var quantity = updateOrder.Quantity.ToString().Substring(1);

            existingDeliveryRow.PickedQuantity = int.Parse(quantity);
            existingDeliveryRow.Picked = updateOrder.Picked;

            _appDbContext.DeliveryRows.Update(existingDeliveryRow);
            

            var existingProductStock = _appDbContext.ProductStockPositions.FirstOrDefault(p => p.DeliveryRowId == updateOrder.DeliveryRowId);
            existingProductStock.InboundDate = new DateTime();
            existingProductStock.Picked = updateOrder.Picked;

            _appDbContext.SaveChanges();


        }
    }
}

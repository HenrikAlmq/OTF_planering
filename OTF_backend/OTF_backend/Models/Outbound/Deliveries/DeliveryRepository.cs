using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models.Outbound.Deliveries
{
    public class DeliveryRepository : IDeliveryRepository
    {
        private readonly AppDbContext _appDbContext;

        public DeliveryRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
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

        public void AllocateDelivery(int deliveryId)
        {
            var deliveryRows = _appDbContext.DeliveryRows.Where(dr => dr.DeliveryId == deliveryId);

            var test = from d in deliveryRows select d.DeliveryRowId;



        }
    }
}

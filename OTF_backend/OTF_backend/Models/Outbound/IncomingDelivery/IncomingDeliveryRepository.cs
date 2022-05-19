using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models.Outbound.IncomingDelivery
{
    public class IncomingDeliveryRepository : IIncomingDeliveryRepository
    {
        private readonly AppDbContext _appDbContext;

        public IncomingDeliveryRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async void CreateIncomingDelivery(IncomingDelivery incomingDelivery)
        {
            await _appDbContext.IncomingDeliveries.AddAsync(incomingDelivery);
            await _appDbContext.SaveChangesAsync();
        }

        public async Task<IncomingDelivery[]> GetAllIncomingDeliveriesAsync()
        {
            IQueryable<IncomingDelivery> query = _appDbContext.IncomingDeliveries;

            return await query.ToArrayAsync();
        }

        public async Task<IncomingDelivery> GetIncomingDeliveryByIdAsync(int IncomingDeliveryId)
        {
            IQueryable<IncomingDelivery> query = _appDbContext.IncomingDeliveries;

            query = query.Where(id => id.IncomingDeliveryId == IncomingDeliveryId);

            return await query.FirstOrDefaultAsync();
        }

        public async Task<IncomingDelivery> GetIncomingDeliveryByOrderIdAsync(string PurchaseOrderId)
        {
            IQueryable<IncomingDelivery> query = _appDbContext.IncomingDeliveries;

            query = query.Where(id => id.PurchaseOrderId == PurchaseOrderId);

            return await query.FirstOrDefaultAsync();
        }
    }
}

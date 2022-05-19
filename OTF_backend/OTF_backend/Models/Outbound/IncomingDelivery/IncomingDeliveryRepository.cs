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

        public async Task<IncomingDelivery[]> GetAllIncomingDeliveriesAsync()
        {
            IQueryable<IncomingDelivery> query = _appDbContext.IncomingDeliveries;

            return await query.ToArrayAsync();
        }
    }
}

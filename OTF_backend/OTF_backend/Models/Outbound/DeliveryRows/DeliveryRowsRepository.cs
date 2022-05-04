using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models.Outbound.DeliveryRows
{
    public class DeliveryRowsRepository : IDeliveryRowsRepository
    {
        private readonly AppDbContext _appDbContext;

        public DeliveryRowsRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public void CreateDeliveryRow(DeliveryRows deliveryRows)
        {
            throw new NotImplementedException();
        }

        public async Task<DeliveryRows[]> GetDeliveryRowAsync(int deliveryId)
        {
            IQueryable<DeliveryRows> query = _appDbContext.DeliveryRows;
            query = query.Where(dr => dr.DeliveryId == deliveryId);

            return await query.ToArrayAsync();
        }
    }
}

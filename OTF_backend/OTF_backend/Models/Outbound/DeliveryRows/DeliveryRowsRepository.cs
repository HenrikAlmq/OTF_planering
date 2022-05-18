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

        public async void CreateDeliveryRow(DeliveryRows deliveryRows)
        {
            await _appDbContext.DeliveryRows.AddAsync(deliveryRows);
            await _appDbContext.SaveChangesAsync();
        }

        public async Task<DeliveryRows> DeleteDeliveryRow(int deliveryRowId)
        {
            var result = await _appDbContext.DeliveryRows.FirstOrDefaultAsync(dr => dr.DeliveryRowId == deliveryRowId);
            
            if (result != null)
            {
                _appDbContext.DeliveryRows.Remove(result);
                await _appDbContext.SaveChangesAsync();
                return result;
            }

            return null;
        }

        public async Task<DeliveryRows[]> GetDeliveryRowAsync(int deliveryId)
        {
            IQueryable<DeliveryRows> query = _appDbContext.DeliveryRows;
            query = query.Where(dr => dr.DeliveryId == deliveryId);

            return await query.ToArrayAsync();
        }

        public async Task<DeliveryRows> GetDeliveryRowByDeliveryRowId(int deliveryRowId)
        {
            IQueryable<DeliveryRows> query = _appDbContext.DeliveryRows;
            query = query.Where(dr => dr.DeliveryRowId == deliveryRowId);

            return await query.FirstOrDefaultAsync();
        }
    }
}

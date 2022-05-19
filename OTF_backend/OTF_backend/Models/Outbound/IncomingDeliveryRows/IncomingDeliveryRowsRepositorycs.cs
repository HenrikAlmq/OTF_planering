using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models.Outbound.IncomingDeliveryRows
{
    public class IncomingDeliveryRowsRepositorycs : IIncomingDeliveryRowsRepository
    {
        private readonly AppDbContext _appDbContext;
        public IncomingDeliveryRowsRepositorycs(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        public async void CreateIncomingDeliveryRow(IncomingDeliveryRows incomingDeliveryRows)
        {
            await _appDbContext.IncomingDeliveryRows.AddAsync(incomingDeliveryRows);
            await _appDbContext.SaveChangesAsync();
        }

        public async Task<IncomingDeliveryRows> DeleteIncomingDeliveryRow(int incomingDeliveryRowId)
        {
            var results = await _appDbContext.IncomingDeliveryRows.FirstOrDefaultAsync(id => id.IncomingDeliveryRowId == incomingDeliveryRowId);

            if (results != null)
            {
                _appDbContext.IncomingDeliveryRows.Remove(results);
                await _appDbContext.SaveChangesAsync();
                return results;
            }

            return null;
        }

        public async Task<IncomingDeliveryRows> GetIncomingDeliveryRow(int incomingDeliveryRowId)
        {
            IQueryable<IncomingDeliveryRows> query = _appDbContext.IncomingDeliveryRows;
            query = query.Where(id => id.IncomingDeliveryRowId == incomingDeliveryRowId);

            return await query.FirstOrDefaultAsync();
        }

        public async Task<IncomingDeliveryRows[]> GetIncomingDeliveryRowsById(int incomingDeliveryId)
        {
            IQueryable<IncomingDeliveryRows> query = _appDbContext.IncomingDeliveryRows;
            query = query.Where(id => id.IncomingDeliveryId == incomingDeliveryId);

            return await query.ToArrayAsync();
        }
    }
}

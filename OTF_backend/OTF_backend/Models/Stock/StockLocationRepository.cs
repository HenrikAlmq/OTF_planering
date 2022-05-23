using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models.Stock
{
    public class StockLocationRepository : IStockLocationRepository
    {
        private readonly AppDbContext _appDbContext;
        public StockLocationRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        public async Task<StockLocation[]> GetAllStockLocations()
        {
            IQueryable<StockLocation> query = _appDbContext.StockLocations;

            return await query.ToArrayAsync();
        }
    }
}

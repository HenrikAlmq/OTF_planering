using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models.Stock
{
    public class ProductStockPositionRepository : IProductStockPositionRepository
    {
        private readonly AppDbContext _appDbContext;

        public ProductStockPositionRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        public async void CreateProductStock(ProductStockPosition productStockPosition)
        {
            await _appDbContext.ProductStockPositions.AddAsync(productStockPosition);
            await _appDbContext.SaveChangesAsync();
        }

        public async Task<ProductStockPosition[]> GetAllProductStock()
        {
            IQueryable<ProductStockPosition> query = _appDbContext.ProductStockPositions;

            return await query.ToArrayAsync();
        }
    }
}

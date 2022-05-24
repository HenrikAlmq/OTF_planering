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

        public Task<ProductStockPosition[]> GetAllProductStock()
        {
            throw new NotImplementedException();
        }

        public async Task<ProductStockPosition[]> GetAllProductStockdd()
        {
            IQueryable<ProductStockPosition> query = _appDbContext.ProductStockPositions;

            return await query.ToArrayAsync();
        }

        public IEnumerable<ProductStock> GetStockPerLocation()
        {
            var groupedProducts = _appDbContext.ProductStockPositions
                .Include(t => t.Product)
                .Include(y => y.StockLocation)
                .AsEnumerable()
                .GroupBy(x => x.ProductId).ToList();

            return groupedProducts.Select(g => new ProductStock
            {
                ProductId = g.Key,
                ArticleNumber = g.First().Product.ArticleNumber,
                ProductStockLevels = g.GroupBy(t => t.StockLocationId)
                 .Select(f => new ProductStockLevel
                 {
                     StockLocationId = f.Key,
                     Quantity = f.Sum(y => y.Quantity),
                     LocationName = f.First().StockLocation.Location
                 }).Where(u => u.Quantity > 0)
            }).ToList();
        }

        public IEnumerable<ProductStockPosition> GetStockPerLocationdd()
        {
            throw new NotImplementedException();
        }
    }
}

using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models.Outbound.Products
{
    public class ProductRepository : IProductRepository
    {
        private readonly AppDbContext _appDbContext;

        public ProductRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async void CreateProduct(Product product)
        {
            await _appDbContext.Products.AddAsync(product);
            await _appDbContext.SaveChangesAsync();
        }

        public async Task<Product> DeleteProduct(int productId)
        {
            var result = await _appDbContext.Products.FirstOrDefaultAsync(p => p.ProductId == productId);

            if (result != null)
            {
                _appDbContext.Products.Remove(result);
                await _appDbContext.SaveChangesAsync();
                return result;
            }

            return null;
        }

        public async Task<Product[]> GetAllProductsAsync()
        {
            IQueryable<Product> query = _appDbContext.Products;

            return await query.ToArrayAsync();
        }

        public async Task<Product> GetProductAsync(int productId)
        {
            IQueryable<Product> query = _appDbContext.Products;
            query = query.Where(p => p.ProductId == productId);

            return await query.FirstOrDefaultAsync();
        }

        public async Task<Product> GetProductByTitleAsync(string articleNumber)
        {
            IQueryable<Product> query = _appDbContext.Products;
            query = query.Where(p => p.ArticleNumber == articleNumber);

            return await query.FirstOrDefaultAsync();
        }
    }
}

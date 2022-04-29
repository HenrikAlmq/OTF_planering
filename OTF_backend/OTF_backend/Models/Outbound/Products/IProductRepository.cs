using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models.Outbound
{
    public interface IProductRepository
    {
        Task<Product> GetProductAsync(int productId);
        Task<Product[]> GetAllProductsAsync();
        Task<Product> GetProductByTitleAsync(string articleNumber);
        void CreateProduct(Product product);
    }
}

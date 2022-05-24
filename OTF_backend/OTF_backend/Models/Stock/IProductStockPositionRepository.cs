using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models.Stock
{
    public interface IProductStockPositionRepository
    {
        void CreateProductStock(ProductStockPosition productStockPosition);
        Task<ProductStockPosition[]> GetAllProductStock();
    }
}

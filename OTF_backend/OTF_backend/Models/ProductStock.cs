using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models
{
    public class ProductStock
    {
        public int ProductId { get; set; }
        public string ArticleNumber { get; set; }
        public IEnumerable<ProductStockLevel> ProductStockLevels { get; set; }
    }
}

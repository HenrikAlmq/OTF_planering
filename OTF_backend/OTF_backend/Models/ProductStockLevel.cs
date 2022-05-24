using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models
{
    public class ProductStockLevel
    {
        public int Quantity { get; set; }
        public int StockLocationId { get; set; }
        public string LocationName { get; set; }

    }
}

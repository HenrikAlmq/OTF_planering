using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models.Stock
{
    public class StockLocation
    {
        [Key]
        public int StockLocationId { get; set; }
        public string Location { get; set; }
        public bool Active { get; set; }
        public bool IsQuantity { get; set; }

    }
}

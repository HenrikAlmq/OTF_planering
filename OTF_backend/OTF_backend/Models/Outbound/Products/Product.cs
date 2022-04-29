using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models.Outbound
{
    public class Product
    {
        [Key]
        public int ProductId { get; set; }
        public string ArticleNumber { get; set; }
        public string ArticleDescription { get; set; }
        public string Barcode { get; set; }
        public int Volume { get; set; }
        public int Weight { get; set; }
    }
}

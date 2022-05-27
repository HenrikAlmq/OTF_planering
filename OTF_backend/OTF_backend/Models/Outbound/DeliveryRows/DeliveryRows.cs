using OTF_backend.Models.Stock;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models.Outbound.DeliveryRows
{
    public class DeliveryRows
    {
        [Key]
        public int DeliveryRowId { get; set; }
        public int DeliveryId { get; set; }
        public int ProductId { get; set; }
        public string ArticleNumber { get; set; }
        public int OriginalQuantity { get; set; }
        public int PickedQuantity { get; set; }
        public bool Picked { get; set; }
        

    }
}

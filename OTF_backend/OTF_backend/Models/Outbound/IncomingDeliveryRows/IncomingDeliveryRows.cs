using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models.Outbound.IncomingDeliveryRows
{
    public class IncomingDeliveryRows
    {
        [Key]
        public int IncomingDeliveryRowId { get; set; }
        public int IncomingDeliveryId { get; set; }
        public string ArticleNumber { get; set; }
        public int ProductId { get; set; }
        public int OrderedAmount { get; set; }
        public int RecievedAmount { get; set; }
        public bool Handled { get; set; }
    }
}

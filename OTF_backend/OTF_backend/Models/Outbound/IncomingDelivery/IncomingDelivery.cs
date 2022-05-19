using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models.Outbound.IncomingDelivery
{
    public class IncomingDelivery
    {
        [Key]
        public int IncomingDeliveryId { get; set; }
        public string PurchaseOrderId { get; set; }
        public string DeliveryAddress { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
    }
}

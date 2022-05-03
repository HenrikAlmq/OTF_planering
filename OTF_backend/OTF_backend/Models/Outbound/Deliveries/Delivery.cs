using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models.Outbound.Deliveries
{
    public class Delivery
    {
        [Key]
        public int DeliveryId { get; set; }
        public string OrderId { get; set; }
        public string DeliveryAddress { get; set; }
        public int ZipCode { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public int DeliveryStatusId { get; set; }
        public int FreightServiceId { get; set; }

    }
}

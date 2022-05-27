using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models
{
    public class UpdateOrder
    {
        public int DeliveryRowId { get; set; }
        public bool Picked { get; set; }
        public int Quantity { get; set; }
    }
}

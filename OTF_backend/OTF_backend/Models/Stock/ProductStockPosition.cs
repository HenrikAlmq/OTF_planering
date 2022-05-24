﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models.Stock
{
    public class ProductStockPosition
    {
        [Key]
        public int ProductStockPositionId { get; set; }
        public int? IncomingDeliveryRowId { get; set; }
        public int? IncomingDeliveryId { get; set; }
        public int? DeliveryId { get; set; }
        public int Quantity { get; set; }
        public DateTime? InboundDate { get; set; }
        public DateTime? PickedDate { get; set; }
        public bool? Picked { get; set; }
        public int StockLocationId { get; set; }
        public string Location { get; set; }
        public string User { get; set; }
        public int ProductId { get; set; }
    }
}

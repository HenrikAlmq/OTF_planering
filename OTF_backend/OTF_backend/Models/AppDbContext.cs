using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using OTF_backend.Models.Outbound;
using OTF_backend.Models.Outbound.Deliveries;
using OTF_backend.Models.Outbound.DeliveryRows;
using OTF_backend.Models.Outbound.IncomingDelivery;
using OTF_backend.Models.Outbound.IncomingDeliveryRows;
using OTF_backend.Models.Stock;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OTF_backend.Models
{
    public class AppDbContext : IdentityDbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Delivery> Deliveries { get; set; }
        public DbSet<DeliveryRows> DeliveryRows { get; set; }
        public DbSet<IncomingDelivery> IncomingDeliveries { get; set; }
        public DbSet<IncomingDeliveryRows> IncomingDeliveryRows { get; set; }
        public DbSet<StockLocation> StockLocations { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite(@"Data Source=Q:\Webbutvecklare.NET\Inlämning\OTF_planering\OTF_backend\OTF.db");
    }
}

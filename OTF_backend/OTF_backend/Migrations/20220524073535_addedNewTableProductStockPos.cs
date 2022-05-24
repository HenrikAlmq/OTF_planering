using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace OTF_backend.Migrations
{
    public partial class addedNewTableProductStockPos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ProductStockPositions",
                columns: table => new
                {
                    ProductStockPositionId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    IncomingDeliveryRowId = table.Column<int>(type: "INTEGER", nullable: true),
                    IncomingDeliveryId = table.Column<int>(type: "INTEGER", nullable: true),
                    DeliveryId = table.Column<int>(type: "INTEGER", nullable: true),
                    Quantity = table.Column<int>(type: "INTEGER", nullable: false),
                    InboundDate = table.Column<DateTime>(type: "TEXT", nullable: true),
                    PickedDate = table.Column<DateTime>(type: "TEXT", nullable: true),
                    Picked = table.Column<bool>(type: "INTEGER", nullable: true),
                    StockLocationId = table.Column<int>(type: "INTEGER", nullable: false),
                    Location = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductStockPositions", x => x.ProductStockPositionId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductStockPositions");
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

namespace OTF_backend.Migrations
{
    public partial class AddedColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DeliveryRowId",
                table: "ProductStockPositions",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProductStockPositions_ProductId",
                table: "ProductStockPositions",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductStockPositions_StockLocationId",
                table: "ProductStockPositions",
                column: "StockLocationId");

            
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
           

            migrationBuilder.DropIndex(
                name: "IX_ProductStockPositions_ProductId",
                table: "ProductStockPositions");

            migrationBuilder.DropIndex(
                name: "IX_ProductStockPositions_StockLocationId",
                table: "ProductStockPositions");

            migrationBuilder.DropColumn(
                name: "DeliveryRowId",
                table: "ProductStockPositions");
        }
    }
}

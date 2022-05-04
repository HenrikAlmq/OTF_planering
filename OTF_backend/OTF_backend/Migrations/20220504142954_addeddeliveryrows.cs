using Microsoft.EntityFrameworkCore.Migrations;

namespace OTF_backend.Migrations
{
    public partial class addeddeliveryrows : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DeliveryRows",
                columns: table => new
                {
                    DeliveryRowId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    DeliveryId = table.Column<int>(type: "INTEGER", nullable: false),
                    ProductId = table.Column<int>(type: "INTEGER", nullable: false),
                    OriginalQuantity = table.Column<int>(type: "INTEGER", nullable: false),
                    PickedQuantity = table.Column<int>(type: "INTEGER", nullable: false),
                    Picked = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DeliveryRows", x => x.DeliveryRowId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DeliveryRows");
        }
    }
}

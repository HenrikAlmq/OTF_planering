using Microsoft.EntityFrameworkCore.Migrations;

namespace OTF_backend.Migrations
{
    public partial class addedIncomingRowsTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "IncomingDeliveryRows",
                columns: table => new
                {
                    IncomingDeliveryRowId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    IncomingDeliveryId = table.Column<int>(type: "INTEGER", nullable: false),
                    ArticleNumber = table.Column<string>(type: "TEXT", nullable: true),
                    OrderedAmount = table.Column<int>(type: "INTEGER", nullable: false),
                    RecievedAmount = table.Column<int>(type: "INTEGER", nullable: false),
                    Handled = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IncomingDeliveryRows", x => x.IncomingDeliveryRowId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "IncomingDeliveryRows");
        }
    }
}

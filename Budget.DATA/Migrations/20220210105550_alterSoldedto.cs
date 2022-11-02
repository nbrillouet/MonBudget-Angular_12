using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterSoldedto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "SoldeDto",
                columns: table => new
                {
                    IdAccount = table.Column<int>(type: "int", nullable: false),
                    Credit = table.Column<double>(type: "float", nullable: false),
                    Debit = table.Column<double>(type: "float", nullable: false),
                    Total = table.Column<double>(type: "float", nullable: false),
                    Solde = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "SoldeDto");
        }
    }
}

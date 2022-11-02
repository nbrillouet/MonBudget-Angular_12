using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterAsLabel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OPERATION_REFERENCE_TEMP",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "OPERATION_REFERENCE_TEMP",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}

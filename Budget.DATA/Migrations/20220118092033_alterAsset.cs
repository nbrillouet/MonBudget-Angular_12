using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterAsset : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "NAME",
                schema: "ref",
                table: "ASSET",
                newName: "LABEL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "LABEL",
                schema: "ref",
                table: "ASSET",
                newName: "NAME");
        }
    }
}

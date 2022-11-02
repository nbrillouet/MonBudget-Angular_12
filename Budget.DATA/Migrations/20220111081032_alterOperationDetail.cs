using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterOperationDetail : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ID_OPERATION_PLACE",
                schema: "ref",
                table: "OPERATION_DETAIL",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "OPERATION_LABEL",
                schema: "ref",
                table: "OPERATION_DETAIL",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PLACE_LABEL",
                schema: "ref",
                table: "OPERATION_DETAIL",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ID_OPERATION_PLACE",
                schema: "ref",
                table: "OPERATION_DETAIL");

            migrationBuilder.DropColumn(
                name: "OPERATION_LABEL",
                schema: "ref",
                table: "OPERATION_DETAIL");

            migrationBuilder.DropColumn(
                name: "PLACE_LABEL",
                schema: "ref",
                table: "OPERATION_DETAIL");
        }
    }
}

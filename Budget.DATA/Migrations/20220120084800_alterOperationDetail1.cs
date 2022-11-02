using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterOperationDetail1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OPERATION_DETAIL_GMAP_ADDRESS_ID_GMAP_ADDRESS",
                schema: "ref",
                table: "OPERATION_DETAIL");

            migrationBuilder.AlterColumn<int>(
                name: "ID_GMAP_ADDRESS",
                schema: "ref",
                table: "OPERATION_DETAIL",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_OPERATION_DETAIL_GMAP_ADDRESS_ID_GMAP_ADDRESS",
                schema: "ref",
                table: "OPERATION_DETAIL",
                column: "ID_GMAP_ADDRESS",
                principalSchema: "gmap",
                principalTable: "GMAP_ADDRESS",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OPERATION_DETAIL_GMAP_ADDRESS_ID_GMAP_ADDRESS",
                schema: "ref",
                table: "OPERATION_DETAIL");

            migrationBuilder.AlterColumn<int>(
                name: "ID_GMAP_ADDRESS",
                schema: "ref",
                table: "OPERATION_DETAIL",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_OPERATION_DETAIL_GMAP_ADDRESS_ID_GMAP_ADDRESS",
                schema: "ref",
                table: "OPERATION_DETAIL",
                column: "ID_GMAP_ADDRESS",
                principalSchema: "gmap",
                principalTable: "GMAP_ADDRESS",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

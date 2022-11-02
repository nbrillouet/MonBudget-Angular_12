using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterOperationDetailFK : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_DETAIL_ID_OPERATION_PLACE",
                schema: "ref",
                table: "OPERATION_DETAIL",
                column: "ID_OPERATION_PLACE");

            migrationBuilder.AddForeignKey(
                name: "FK_OPERATION_DETAIL_OPERATION_PLACE_ID_OPERATION_PLACE",
                schema: "ref",
                table: "OPERATION_DETAIL",
                column: "ID_OPERATION_PLACE",
                principalSchema: "ref",
                principalTable: "OPERATION_PLACE",
                principalColumn: "ID",
                onDelete: ReferentialAction.NoAction);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OPERATION_DETAIL_OPERATION_PLACE_ID_OPERATION_PLACE",
                schema: "ref",
                table: "OPERATION_DETAIL");

            migrationBuilder.DropIndex(
                name: "IX_OPERATION_DETAIL_ID_OPERATION_PLACE",
                schema: "ref",
                table: "OPERATION_DETAIL");
        }
    }
}

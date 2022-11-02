using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class addOperationMethodOtf1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OPERATION_METHOD_OTF",
                schema: "ref",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID_OPERATION_METHOD = table.Column<int>(type: "int", nullable: false),
                    ID_OPERATION_TYPE_FAMILY = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OPERATION_METHOD_OTF", x => x.ID);
                    table.ForeignKey(
                        name: "FK_OPERATION_METHOD_OTF_OPERATION_METHOD_ID_OPERATION_METHOD",
                        column: x => x.ID_OPERATION_METHOD,
                        principalSchema: "ref",
                        principalTable: "OPERATION_METHOD",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_OPERATION_METHOD_OTF_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                        column: x => x.ID_OPERATION_TYPE_FAMILY,
                        principalSchema: "ref",
                        principalTable: "OPERATION_TYPE_FAMILY",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OPERATION_METHOD_OTF_ID_OPERATION_TYPE_FAMILY",
                schema: "ref",
                table: "OPERATION_METHOD_OTF",
                column: "ID_OPERATION_TYPE_FAMILY");

            migrationBuilder.CreateIndex(
                name: "IX_PK_UNICITY",
                schema: "ref",
                table: "OPERATION_METHOD_OTF",
                columns: new[] { "ID_OPERATION_METHOD", "ID_OPERATION_TYPE_FAMILY" },
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OPERATION_METHOD_OTF",
                schema: "ref");
        }
    }
}

using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class addOperationMethodOtf : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OperationMethodOtf",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdOperationMethod = table.Column<int>(type: "int", nullable: false),
                    OperationMethodId = table.Column<int>(type: "int", nullable: true),
                    IdOperationTypeFamily = table.Column<int>(type: "int", nullable: false),
                    OperationTypeFamilyId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OperationMethodOtf", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OperationMethodOtf_OPERATION_METHOD_OperationMethodId",
                        column: x => x.OperationMethodId,
                        principalSchema: "ref",
                        principalTable: "OPERATION_METHOD",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_OperationMethodOtf_OPERATION_TYPE_FAMILY_OperationTypeFamilyId",
                        column: x => x.OperationTypeFamilyId,
                        principalSchema: "ref",
                        principalTable: "OPERATION_TYPE_FAMILY",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_OperationMethodOtf_OperationMethodId",
                table: "OperationMethodOtf",
                column: "OperationMethodId");

            migrationBuilder.CreateIndex(
                name: "IX_OperationMethodOtf_OperationTypeFamilyId",
                table: "OperationMethodOtf",
                column: "OperationTypeFamilyId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OperationMethodOtf");
        }
    }
}

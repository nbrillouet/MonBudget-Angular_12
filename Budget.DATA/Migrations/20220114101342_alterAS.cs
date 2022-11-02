using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterAS : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_MOVEMENT_ID_MOVEMENT",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_DETAIL_ID_OPERATION_DETAIL",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_ID_OPERATION",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_METHOD_ID_OPERATION_METHOD",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_ID_OPERATION_TYPE",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_STATE_ASIF_ID_STATE",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.RenameColumn(
                name: "LABEL_OPERATION",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                newName: "LABEL_AS");

            migrationBuilder.RenameColumn(
                name: "LABEL_OPERATION",
                schema: "as",
                table: "ACCOUNT_STATEMENT",
                newName: "LABEL_AS");

            migrationBuilder.AlterColumn<int>(
                name: "ID_STATE",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ID_OPERATION_TYPE_FAMILY",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ID_OPERATION_TYPE",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ID_OPERATION_METHOD",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ID_OPERATION_DETAIL",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ID_OPERATION",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "ID_MOVEMENT",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<double>(
                name: "AMOUNT_OPERATION",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "float",
                nullable: true,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_MOVEMENT_ID_MOVEMENT",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_MOVEMENT",
                principalSchema: "ref",
                principalTable: "MOVEMENT",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_DETAIL_ID_OPERATION_DETAIL",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_DETAIL",
                principalSchema: "ref",
                principalTable: "OPERATION_DETAIL",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_ID_OPERATION",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION",
                principalSchema: "ref",
                principalTable: "OPERATION",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_METHOD_ID_OPERATION_METHOD",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_METHOD",
                principalSchema: "ref",
                principalTable: "OPERATION_METHOD",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_TYPE_FAMILY",
                principalSchema: "ref",
                principalTable: "OPERATION_TYPE_FAMILY",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_ID_OPERATION_TYPE",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_TYPE",
                principalSchema: "ref",
                principalTable: "OPERATION_TYPE",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_STATE_ASIF_ID_STATE",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_STATE",
                principalSchema: "ref",
                principalTable: "STATE_ASIF",
                principalColumn: "ID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_MOVEMENT_ID_MOVEMENT",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_DETAIL_ID_OPERATION_DETAIL",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_ID_OPERATION",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_METHOD_ID_OPERATION_METHOD",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_ID_OPERATION_TYPE",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_STATE_ASIF_ID_STATE",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.RenameColumn(
                name: "LABEL_AS",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                newName: "LABEL_OPERATION");

            migrationBuilder.RenameColumn(
                name: "LABEL_AS",
                schema: "as",
                table: "ACCOUNT_STATEMENT",
                newName: "LABEL_OPERATION");

            migrationBuilder.AlterColumn<int>(
                name: "ID_STATE",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ID_OPERATION_TYPE_FAMILY",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ID_OPERATION_TYPE",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ID_OPERATION_METHOD",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ID_OPERATION_DETAIL",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ID_OPERATION",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "ID_MOVEMENT",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<double>(
                name: "AMOUNT_OPERATION",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "float",
                nullable: false,
                defaultValue: 0.0,
                oldClrType: typeof(double),
                oldType: "float",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_MOVEMENT_ID_MOVEMENT",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_MOVEMENT",
                principalSchema: "ref",
                principalTable: "MOVEMENT",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_DETAIL_ID_OPERATION_DETAIL",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_DETAIL",
                principalSchema: "ref",
                principalTable: "OPERATION_DETAIL",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_ID_OPERATION",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION",
                principalSchema: "ref",
                principalTable: "OPERATION",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_METHOD_ID_OPERATION_METHOD",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_METHOD",
                principalSchema: "ref",
                principalTable: "OPERATION_METHOD",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_FAMILY_ID_OPERATION_TYPE_FAMILY",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_TYPE_FAMILY",
                principalSchema: "ref",
                principalTable: "OPERATION_TYPE_FAMILY",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_OPERATION_TYPE_ID_OPERATION_TYPE",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_OPERATION_TYPE",
                principalSchema: "ref",
                principalTable: "OPERATION_TYPE",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ACCOUNT_STATEMENT_IMPORT_FILE_STATE_ASIF_ID_STATE",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                column: "ID_STATE",
                principalSchema: "ref",
                principalTable: "STATE_ASIF",
                principalColumn: "ID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

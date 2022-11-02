using Microsoft.EntityFrameworkCore.Migrations;

namespace Budget.DATA.Migrations
{
    public partial class alterAsif : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OPERATION_KEYWORD_TEMP",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropColumn(
                name: "OPERATION_LABEL_TEMP",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropColumn(
                name: "PLACE_KEYWORD_TEMP",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropColumn(
                name: "PLACE_LABEL_TEMP",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.AddColumn<string>(
                name: "OD_OPERATION_KEYWORD",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OD_OPERATION_LABEL",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OD_PLACE_KEYWORD",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OD_PLACE_LABEL",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "nvarchar(100)",
                maxLength: 100,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OD_OPERATION_KEYWORD",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropColumn(
                name: "OD_OPERATION_LABEL",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropColumn(
                name: "OD_PLACE_KEYWORD",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.DropColumn(
                name: "OD_PLACE_LABEL",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE");

            migrationBuilder.AddColumn<string>(
                name: "OPERATION_KEYWORD_TEMP",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "OPERATION_LABEL_TEMP",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PLACE_KEYWORD_TEMP",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PLACE_LABEL_TEMP",
                schema: "as",
                table: "ACCOUNT_STATEMENT_IMPORT_FILE",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: true);
        }
    }
}

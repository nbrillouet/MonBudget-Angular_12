using Budget.MODEL.Database;
using Microsoft.EntityFrameworkCore;

namespace Budget.DATA.Builder
{
    public class VPlanGlobalBuilder
    {
        public static void CreateTable(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<VPlanGlobal>()
                .ToTable("V_PLAN_GLOBAL", "plan");

            modelBuilder.Entity<VPlanGlobal>().Property(x => x.Id)
                    .HasColumnName("ID");

            modelBuilder.Entity<VPlanGlobal>().Property(x => x.IdAccountStatement)
                    .HasColumnName("ID_ACCOUNT_STATEMENT");
            modelBuilder.Entity<VPlanGlobal>().Property(x => x.DateIntegration)
                    .HasColumnName("DATE_INTEGRATION");
            modelBuilder.Entity<VPlanGlobal>().Property(x => x.AmountOperation)
                    .HasColumnName("AMOUNT_OPERATION");
            modelBuilder.Entity<VPlanGlobal>().Property(x => x.PreviewAmount)
                    .HasColumnName("PREVIEW_AMOUNT");
            modelBuilder.Entity<VPlanGlobal>().Property(x => x.IdPlan)
                    .HasColumnName("ID_PLAN");
            modelBuilder.Entity<VPlanGlobal>().Property(x => x.IdPlanPoste)
                    .HasColumnName("ID_PLAN_POSTE");
            modelBuilder.Entity<VPlanGlobal>().Property(x => x.PlanPosteLabel)
                    .HasColumnName("PLAN_POSTE_LABEL");
            modelBuilder.Entity<VPlanGlobal>().Property(x => x.IdPoste)
                    .HasColumnName("ID_POSTE");
            modelBuilder.Entity<VPlanGlobal>().Property(x => x.IdReference)
                    .HasColumnName("ID_REFERENCE");
            modelBuilder.Entity<VPlanGlobal>().Property(x => x.LabelReference)
                    .HasColumnName("LABEL_REFERENCE");
            modelBuilder.Entity<VPlanGlobal>().Property(x => x.Month)
                    .HasColumnName("MONTH");
            modelBuilder.Entity<VPlanGlobal>().Property(x => x.Year)
                    .HasColumnName("YEAR");

        }
    }
}
//[Column("ID")]
//public int Id { get; set; }
//[Column("ID_ACCOUNT_STATEMENT")]
//public int? IdAccountStatement { get; set; }
//[Column("DATE_INTEGRATION")]
//public DateTime? DateIntegration { get; set; }
//[Column("AMOUNT_OPERATION")]
//public double? AmountOperation { get; set; }
//[Column("PREVIEW_AMOUNT")]
//public double? PreviewAmount { get; set; }
//[Column("ID_PLAN")]
//public int? IdPlan { get; set; }
//[Column("ID_PLAN_POSTE")]
//public int? IdPlanPoste { get; set; }
//[Column("PLAN_POSTE_LABEL")]
//public string PlanPosteLabel { get; set; }
//[Column("ID_POSTE")]
//public int? IdPoste { get; set; }
//[Column("ID_REFERENCE")]
//public int? IdReference { get; set; }
//[Column("LABEL_REFERENCE")]
//public string LabelReference { get; set; }
//[Column("MONTH")]
//public int? Month { get; set; }
//[Column("YEAR")]
//public int? Year { get; set; }
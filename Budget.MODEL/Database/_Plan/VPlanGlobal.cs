using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Budget.MODEL.Database
{
    //[Table("V_PLAN_GLOBAL", Schema = "plan")]
    public class VPlanGlobal
    {
        public int Id { get; set; }
        public int? IdAccountStatement { get; set; }
        public DateTime? DateIntegration { get; set; }
        public double? AmountOperation { get; set; }
        public double? PreviewAmount { get; set; }
        public int? IdPlan { get; set; }
        public int? IdPlanPoste { get; set; }
        public string PlanPosteLabel { get; set; }
        public int? IdPoste { get; set; }
        public int? IdReference { get; set; }
        public string LabelReference { get; set; }
        public int? Month { get; set; }
        public int? Year { get; set; }

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
    }
}

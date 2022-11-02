import { AccountTypeService } from './account-type.service';
import { AccountService } from './account.service';
import { BankAgencyService } from './bank-agency.service';
import { BankSubFamilyService } from './bank-sub-family.service';
import { OperationMethodService } from './operation-method.service';
import { OperationTransverseService } from './operation-tranverse.service';
import { OtfService } from './operation-type-family.service';
import { OtService } from './operation-type.service';
import { OperationService } from './operation.service';
import { ReferentialService } from './referential.service';

@NgModule({
    imports: [

    ],
    declarations: [

    ],
    providers : [
        ReferentialService,
        OperationService,
        OtService,
        OtfService,
        OperationMethodService,
        BankAgencyService,
        AccountService,
        AccountTypeService,
        OperationTransverseService,
        BankSubFamilyService
    ]

  })

  export class ReferentialServiceModule { }

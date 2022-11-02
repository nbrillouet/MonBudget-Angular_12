import { NgModule } from '@angular/core';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { FuseScrollbarModule } from '@fuse/directives/scrollbar';
import { AngularMaterialModule } from 'app/core/angular-material.module';
import { SharedModule } from 'app/shared/shared.module';
import { AccountListMainComponent } from './main/account-list-main.component';
import { AccountListContentComponent } from './main/content/account-list-content.component';
import { AccountListHeaderComponent } from './main/header/account-list-header.component';

@NgModule({
    declarations: [
        AccountListMainComponent,
        AccountListHeaderComponent,
        AccountListContentComponent
    ],
    imports     : [
        AngularMaterialModule,
        SharedModule,
        FuseScrollbarModule,
        FuseScrollResetModule

        // AccountDataModule

    ]
})

export class AccountListModule
{
}

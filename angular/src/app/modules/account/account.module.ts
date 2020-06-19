import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { FormsModule } from '@angular/forms';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { AccountComponent } from './account/account.component';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [AccountComponent, EditAccountComponent, DemoComponent],
  imports: [
    AccountRoutingModule, FormsModule, CommonModule
  ]
})
export class AccountModule { }

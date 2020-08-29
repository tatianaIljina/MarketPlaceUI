import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZorroModule } from './../shared/ng-zorro.module';
import { EmployeesComponent } from './employees/employees.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingsRoutingModule } from './settings-routing.module'; 



@NgModule({
  declarations: [EmployeesComponent, SettingsComponent],
  imports: [
    CommonModule,
    ZorroModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }

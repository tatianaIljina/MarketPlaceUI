import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ZorroModule } from './../shared/ng-zorro.module';
import { ProfileRoutingModule } from './profile-routing.module';

import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ZorroModule,
    FormsModule
    // NzCardModule
    // ZorroModule
  ]
})

export class ProfileModule { }

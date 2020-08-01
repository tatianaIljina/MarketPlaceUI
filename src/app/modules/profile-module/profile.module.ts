import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ZorroModule } from './../shared/ng-zorro.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { FormsModule } from '@angular/forms';


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

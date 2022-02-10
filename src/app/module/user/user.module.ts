import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FriendNearbyComponent } from './friend-relation/friend-nearby/friend-nearby.component';


@NgModule({
  declarations: [
    FriendNearbyComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

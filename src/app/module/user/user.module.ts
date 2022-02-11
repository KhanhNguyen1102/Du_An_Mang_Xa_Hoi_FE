import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FriendNearbyComponent } from './friend-relation/friend-nearby/friend-nearby.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import {FriendRequestComponent} from "./friend-relation/friend-request/friend-request.component";


@NgModule({
  declarations: [
    FriendNearbyComponent,
    NewsfeedComponent,
    FriendRequestComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

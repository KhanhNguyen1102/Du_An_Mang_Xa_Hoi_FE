import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FriendNearbyComponent } from './friend-relation/friend-nearby/friend-nearby.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import {FriendRequestComponent} from "./friend-relation/friend-request/friend-request.component";
import { ListFriendComponent } from './friend-relation/list-friend/list-friend.component';
import { DeleteFriendComponent } from './friend-relation/delete-friend/delete-friend.component';
import {AppRoutingModule} from "../../app-routing.module";


@NgModule({
  declarations: [
    FriendNearbyComponent,
    NewsfeedComponent,
    FriendRequestComponent,
    ListFriendComponent,
    DeleteFriendComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ]
})
export class UserModule { }

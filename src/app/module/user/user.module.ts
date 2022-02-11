import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FriendNearbyComponent } from './friend-relation/friend-nearby/friend-nearby.component';
import { AccFriendComponent } from './friend-relation/acc-friend/acc-friend.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';


@NgModule({
  declarations: [
    FriendNearbyComponent,
    AccFriendComponent,
    NewsfeedComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }

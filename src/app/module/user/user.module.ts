import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { FriendNearbyComponent } from './friend-relation/friend-nearby/friend-nearby.component';
import { AccFriendComponent } from './friend-relation/acc-friend/acc-friend.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';


@NgModule({
  declarations: [
    EditProfileComponent,
    FriendNearbyComponent,
    AccFriendComponent,
    NewsfeedComponent,
    EditPasswordComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UserModule { }

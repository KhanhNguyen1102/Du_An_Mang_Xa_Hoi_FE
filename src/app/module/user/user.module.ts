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
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';


@NgModule({
  declarations: [
    EditProfileComponent,
    FriendNearbyComponent,
    AccFriendComponent,
    NewsfeedComponent,
    EditPasswordComponent,
    UserDetailComponent,
    PeopleDetailComponent
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

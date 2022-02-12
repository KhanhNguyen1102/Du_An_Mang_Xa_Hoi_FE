import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FriendNearbyComponent} from "./friend-relation/friend-nearby/friend-nearby.component";
import {NewsfeedComponent} from "./newsfeed/newsfeed.component";
import {FriendRequestComponent} from "./friend-relation/friend-request/friend-request.component";
import {ListFriendComponent} from "./friend-relation/list-friend/list-friend.component";

const routes: Routes = [
  {
    path: 'newsfeed',
    component: NewsfeedComponent
  },
  {
    path: 'people-nearby',
    component: FriendNearbyComponent
  },
  {
    path: 'requests',
    component: FriendRequestComponent
  },
  {
    path: 'friends',
    component: ListFriendComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

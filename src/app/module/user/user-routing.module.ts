import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FriendNearbyComponent} from "./friend-relation/friend-nearby/friend-nearby.component";
import {NewsfeedComponent} from "./newsfeed/newsfeed.component";
import {AccFriendComponent} from "./friend-relation/acc-friend/acc-friend.component";

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
    path: 'friend-request',
    component: AccFriendComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

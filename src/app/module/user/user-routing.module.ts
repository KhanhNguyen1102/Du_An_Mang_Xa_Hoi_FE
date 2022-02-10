import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FriendNearbyComponent} from "./friend-relation/friend-nearby/friend-nearby.component";

const routes: Routes = [
  {
    path: 'friend',
    component: FriendNearbyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterLoginComponent} from "../login-register/register-login/register-login.component";
import {ListPostComponent} from "./list-post/list-post.component";
import {EditPostComponent} from "./edit-post/edit-post.component";

const routes: Routes = [
  {
    path :'',
    component: ListPostComponent
  },
  {
    path :'edit-post',
    component: EditPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegisterLoginComponent} from "../login-register/register-login/register-login.component";
import {ListPostComponent} from "./components/list-post/list-post.component";
import {EditPostComponent} from "./components/edit-post/edit-post.component";
import {CreatePostComponent} from "./components/create-post/create-post.component";

const routes: Routes = [
  {
    path :'',
    component: ListPostComponent
  },
  {
    path :'edit-post',
    component: EditPostComponent
  },
  {
    path: 'create',
    component: CreatePostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }

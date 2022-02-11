import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren :() => import('./module/login-register/login-register.module').then(module => module.LoginRegisterModule)
  },
  {
    path:'post',
    loadChildren :() => import('./module/post/post.module').then(module => module.PostModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

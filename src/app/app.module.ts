import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { EditPostComponent } from './module/post/components/edit-post/edit-post.component';
import { ListPostComponent } from './module/post/components/list-post/list-post.component';
import { CreatePostComponent } from './module/post/components/create-post/create-post.component';
@NgModule({
  declarations: [
    AppComponent,
    EditPostComponent,
    ListPostComponent,
    CreatePostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

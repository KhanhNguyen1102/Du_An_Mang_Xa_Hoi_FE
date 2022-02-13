import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../model/post";
import {Observable} from "rxjs";
const API_URL = 'http://localhost:8080/api/posts';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }
  getAll():Observable<Post[]>{
    return this.httpClient.get<Post[]>(API_URL);
  }
}

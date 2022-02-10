import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

const API_URL = "http://localhost:8080/api/relationships";

@Injectable({
  providedIn: 'root'
})
export class FriendRelationService {
  constructor(private httpClient: HttpClient) {
  }

  getAllNotFriend(id: string): Observable<User[]> {
    return this.httpClient.get<User[]>(API_URL + `/notFriend/${id}`);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";
import {FriendRelation} from "../model/friend-relation";

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

  addFriend(idU: string, idFriend: string): Observable<FriendRelation>{
    return this.httpClient.get<FriendRelation>(API_URL + `/addFriend/${idU}/${idFriend}`);
  }

  findRequestById(idU: string): Observable<User[]>{
    return this.httpClient.get<User[]>(API_URL + `/friendRequest/${idU}`);
  }
}

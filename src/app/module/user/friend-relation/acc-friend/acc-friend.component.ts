import {Component, OnInit} from '@angular/core';
import {User} from "../../../../model/user";
import {FriendRelationService} from "../../../../service/friend-relation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-acc-friend',
  templateUrl: './acc-friend.component.html',
  styleUrls: ['./acc-friend.component.css']
})
export class AccFriendComponent implements OnInit {
  currentUser: string = "";
  idUser: string | undefined;
  listFriendRequest!: User[];

  constructor(private friendRelationService: FriendRelationService,
              private router: Router) {
    // @ts-ignore
    this.currentUser = localStorage.getItem("currentUser")
    console.log(this.currentUser);
    this.idUser = JSON.parse(this.currentUser).id;
    console.log(this.idUser);
  }

  ngOnInit(): void {
    this.friendRelationService.findRequestById(this.idUser + "").subscribe(result => {
      this.listFriendRequest = result;
      console.log(result);
    }, error => {
      console.log(error)
    })
  }

  accFriend(idUser: string | undefined) {
  }
}

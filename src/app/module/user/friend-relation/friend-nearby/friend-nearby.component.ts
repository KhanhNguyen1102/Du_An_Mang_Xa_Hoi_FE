import {Component, OnInit} from '@angular/core';
import {User} from "../../../../model/user";
import {FriendRelationService} from "../../../../service/friend-relation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-friend-nearby',
  templateUrl: './friend-nearby.component.html',
  styleUrls: ['./friend-nearby.component.css']
})
export class FriendNearbyComponent implements OnInit {
  currentUser: string = "";
  idUser: string | undefined;
  listUserNotFriend!: User[];

  constructor(private friendRelationService: FriendRelationService,
              private router: Router) {
    // @ts-ignore
    this.currentUser = localStorage.getItem("currentUser")
    console.log(this.currentUser);
    this.idUser = JSON.parse(this.currentUser).id;
    console.log(this.idUser);
  }

  ngOnInit(): void {
    this.friendRelationService.getAllNotFriend(this.idUser + "").subscribe(result => {
      this.listUserNotFriend = result;
      console.log(result);
    }, error => {
      console.log(error)
    })
  }

  addFriend(idFriend: string | undefined) {
    console.log(idFriend);
    // @ts-ignore
    this.friendRelationService.addFriend(this.idUser, idFriend).subscribe(() => {
      alert('Chờ xác nhận');
      this.ngOnInit();
      this.router.navigate(['user/friend']);
    });
  }
}

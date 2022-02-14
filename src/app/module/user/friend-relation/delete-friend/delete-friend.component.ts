import {Component, OnInit} from '@angular/core';
import {User} from "../../../../model/user";
import {FriendRelationService} from "../../../../service/friend-relation.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-delete-friend',
  templateUrl: './delete-friend.component.html',
  styleUrls: ['./delete-friend.component.css']
})
export class DeleteFriendComponent implements OnInit {
  currentUser: string = "";
  idUser: string | undefined;

  constructor(private friendRelationService: FriendRelationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    // @ts-ignore
    this.currentUser = localStorage.getItem("currentUser")
    console.log(this.currentUser);
    this.idUser = JSON.parse(this.currentUser).id;
    console.log(this.idUser);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const idFriend = paramMap.get('id');
      // @ts-ignore
      this.friendRelationService.unFriend(this.idUser, idFriend).subscribe(() => {
        alert('Hủy kết bạn thành công');
        this.router.navigate(['user/friends']);
      });
    });
  }

}

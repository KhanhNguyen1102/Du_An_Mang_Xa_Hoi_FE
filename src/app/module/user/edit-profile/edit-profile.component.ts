import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
currentUser:any
  avatar:string ="assets/images/defaultAva.png"
  updateForm = new FormGroup({
    id: new FormControl(''),
    fullName: new FormControl(''),
    avatar: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
    cover: new FormControl(''),
    favorite: new FormControl('')
  });
  constructor(private router: Router,
              private userService: UserService) {
    if (localStorage.getItem('currentUser') == null){
      this.router.navigate([''])
    }
    // @ts-ignore
    this.currentUser= JSON.parse(localStorage.getItem('currentUser'))
    this.userService.getUserProfile(this.currentUser.id).subscribe(result => {
      console.log(result)
      this.currentUser = result;
      this.updateForm = new FormGroup({
        id: new FormControl(result.id),
        fullName: new FormControl(this.currentUser.fullName),
        avatar: new FormControl(this.currentUser.avatar),
        address: new FormControl(this.currentUser.address),
        phone: new FormControl(this.currentUser.phoneNumber),
        cover: new FormControl(this.currentUser.cover),
        favorite: new FormControl(this.currentUser.favorite)
      });
    },error => {
      console.log(error);
    })
  }

  ngOnInit(): void {

  }
  update():void{}
}

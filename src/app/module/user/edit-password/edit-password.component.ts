import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent implements OnInit {
  currentUser: any
  avatar: string = "";
  cover: string = "";
  url: string = "null";

  constructor(private router: Router,
              private userService: UserService,
  ) {
    if (localStorage.getItem('currentUser') == null) {
      this.router.navigate([''])
    }
    // @ts-ignore
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
    this.userService.getUserProfile(this.currentUser.id).subscribe(result => {
      this.currentUser = result;
      this.avatar = this.currentUser.avatar;
      this.cover = this.currentUser.cover;
    }, error => {
      console.log(error);
    })
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
  }

}

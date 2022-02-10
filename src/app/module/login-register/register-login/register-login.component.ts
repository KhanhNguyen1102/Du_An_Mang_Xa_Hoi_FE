import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs";
import {AuthenticationService} from "../../../service/authentication.service";
import {UserService} from "../../../service/user.service";
import {JWTResponse} from "../../../model/JWTResponse";

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  registerForm: FormGroup = new FormGroup({
    newUserName: new FormControl(''),
    newPassWord: new FormControl(''),
    newConfirmPassWord: new FormControl(''),
    newEmail: new FormControl(''),
    newPhoneNumber: new FormControl(''),
    newDateOfBirth: new FormControl(''),
  })
  // @ts-ignore
  returnUrl: string;
  // @ts-ignore
  adminUrl: string;
  error = '';
  loading = false;
  submitted = false;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService,
              private userService: UserService) {
    console.log(this.authenticationService.currentUserValue);
  }

  ngOnInit() {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
    this.adminUrl = '/admin'
  }

  login(): void {
    this.submitted = true;
    this.loading = true;
    this.authenticationService.login(this.loginForm.value)
      .subscribe((data: JWTResponse) => {
          localStorage.setItem('currentUser', JSON.stringify(data));
          localStorage.setItem('ACCESS_TOKEN', data.token);
          localStorage.setItem('ROLE', data.roles[0].authority);
          localStorage.setItem('USERNAME', data.username);
          localStorage.setItem('USERID', data.id + "");
          if (data.roles[0].authority == "ROLE_ADMIN") {
            this.router.navigate([this.adminUrl])
          } else {
            this.router.navigate([this.returnUrl]);
          }
        },
        () => {
          alert("Tài khoản của bạn đã bị khoá hoặc sai mật khẩu!");
          this.loading = false;
        });
  }

  register() {
    let newUser = {
      username: this.registerForm.value.newUserName,
      password: this.registerForm.value.newPassWord,
      confirmPassword: this.registerForm.value.newConfirmPassWord,
      email: this.registerForm.value.newEmail,
      phone: this.registerForm.value.newPhoneNumber,
      dateOfBirth: this.registerForm.value.newDateOfBirth,
    }
    console.log(newUser)
    this.userService.register(newUser).subscribe(
      success => {
        alert("Đăng kí thành công");
        this.registerForm.reset()
      }, error1 => {
        alert("Đăng kí thất bại")
      }
    )
  }
}

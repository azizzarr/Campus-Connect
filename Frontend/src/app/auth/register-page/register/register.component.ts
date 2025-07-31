import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { passwordResponce, register } from 'src/app/models/register.model';
import { routes } from 'src/app/shared/service/routes/routes';
import {AuthService} from "../../../services/auth.services";
import {User} from "../../../models/user.model"
import { SignUpRequest} from "src/app/models/signup-request.model";
import {Role} from "../../../models/role.model";



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user = {
    username: '',
    email: '',
    password: ''
  };
  public routes = routes;
  public registerForm:register={}
  public passwordResponce:passwordResponce={};

 public register: any = [];

  show = true;

  public registerOwlOptions: OwlOptions = {
    margin: 25,
    nav: true,
    loop: true,
    responsive: {
        0: {
          items: 1
        },
        768 : {
          items: 3
        },
        1170: {
          items: 4
        }
    },
  };
  username: string = '';
  email: string = '';
  password: string = '';
  public roles: Role[] = [];
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = false;
    } else {
      this.password = 'password';
      this.show = true;
    }
  }

  public onChangePassword(password:any){
    if(password.match(/^$|\s+/)) {
      this.passwordResponce.passwordResponceText = "whitespaces are not allowed"
      this.passwordResponce.passwordResponceImage = ""
      this.passwordResponce.passwordResponceKey = ''
      return
    }
    if(password.length == 0){
      this.passwordResponce.passwordResponceText = ""
      this.passwordResponce.passwordResponceImage = ""
      this.passwordResponce.passwordResponceKey = ''
      return
    }
    if (password.length < 8) {
      this.passwordResponce.passwordResponceText = "Weak. Must contain at least 8 characters"
      this.passwordResponce.passwordResponceImage = "assets/img/icon/angry.svg"
      this.passwordResponce.passwordResponceKey = '0'
    } else if (password.search(/[a-z]/) < 0) {
      this.passwordResponce.passwordResponceText = "Average. Must contain at least 1 upper case and number"
      this.passwordResponce.passwordResponceImage = "assets/img/icon/anguish.svg"
      this.passwordResponce.passwordResponceKey = '1'
    } else if(password.search(/[A-Z]/) < 0) {
      this.passwordResponce.passwordResponceText = "Average. Must contain at least 1 upper case and number"
      this.passwordResponce.passwordResponceImage = "assets/img/icon/anguish.svg"
      this.passwordResponce.passwordResponceKey = '1'
    } else  if (password.search(/[0-9]/) < 0) {
      this.passwordResponce.passwordResponceText= "Average. Must contain at least 1 upper case and number"
      this.passwordResponce.passwordResponceImage = "assets/img/icon/anguish.svg"
      this.passwordResponce.passwordResponceKey = '1'
    } else  if (password.search(/(?=.*?[#?!@$%^&*-])/) < 0) {
      this.passwordResponce.passwordResponceText = "Almost. Must contain special symbol"
      this.passwordResponce.passwordResponceImage = "assets/img/icon/smile.svg"
      this.passwordResponce.passwordResponceKey = '2'
    }else {
      this.passwordResponce.passwordResponceText = "Awesome! You have a secure password."
        this.passwordResponce.passwordResponceImage = "assets/img/icon/smile.svg"
         this.passwordResponce.passwordResponceKey = '3'
     }
  }

  onSubmit(): void {
    const signUpRequest: SignUpRequest = {
      username: this.user.username,
      email: this.user.email,
      password: this.user.password,
      roles: this.roles
    };


    this.authService.signup(signUpRequest).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }





}

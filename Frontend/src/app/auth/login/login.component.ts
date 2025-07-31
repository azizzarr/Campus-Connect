import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/service/data/data.service';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/service/routes/routes';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public routes = routes;
  password = 'password';
  show = true;
  formGroup: FormGroup;
  public welcomeLogin: any = [];

  public welcomeLoginOwlOptions: OwlOptions = {
    margin: 25,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      1170: {
        items: 4
      }
    },
  };

  constructor(private authService: AuthService, public router: Router) {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit() {
    this.initForm();
  }

  //hedhi ena zedtha
  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
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

  directIndex() {
    this.router.navigate(['/instructor/instructor-dashboard']);
  }

  public loginProcess(): void {
    console.log("loginProcess() called");

    if (this.formGroup.valid) {
      console.log("formGroup is valid");
      console.log("Form data:", this.formGroup.value);

      this.authService.signin(this.formGroup.value).subscribe(result => {
        console.log("Signin result:", result);

        if (result.success) {
          console.log("Login successful:", result);
          // Store the token in AuthService
          this.authService.storeToken(result.token);
          // Store the userId in LocalStorage
          this.authService.storeUserId(result.userId);
          // Redirect the user to the home page upon successful login
          console.log("Redirecting to home page...");
          this.router.navigate(['/home']);
        } else {
          console.error("Login failed:", result.message);
          alert(result.message);
        }
      }, error => {
        console.error("Error during login process:", error);
        alert("An error occurred during the login process. Please try again later.");
      });
    } else {
      console.log("formGroup is invalid");
      console.log("Form errors:", this.formGroup.errors);
    }
  }


  navigateToAdduser() {
    this.router.navigate(['/home-three']);
    this.loginProcess();
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              public authService: AuthService) { }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
  }

  signUpButtonClick(){
    this.router.navigate(['register']);
  }

  onSubmit(){
    this.loginForm.value
    this.authService.login(this.loginForm.value);
  }

}

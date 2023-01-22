import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  registerForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl(''),
    city: new FormControl(''),
    postalCode: new FormControl(''),
    street: new FormControl(''),
    number: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
  });


  ngOnInit(): void {
  }

  LogInButtonClick(){
    this.router.navigate(['login']);
  }

}

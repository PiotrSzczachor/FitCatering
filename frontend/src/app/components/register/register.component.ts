import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService) { }

  checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value
    return pass === confirmPass ? null : { notSame: true }
  }

  registerForm = this.formBuilder.group({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    city: new FormControl('', Validators.required),
    postalCode: new FormControl('', [Validators.required, Validators.pattern('^[1-9]{2}[-][1-9]{3}$')]),
    street: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    repeatPassword: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.registerForm.controls['name'] 
  }

  LogInButtonClick(){
    this.router.navigate(['login']);
  }

  SignUpButtonClick(){
    if(this.registerForm.valid){
      const Address = {
        street: this.registerForm.get('street')?.value,
        number: this.registerForm.get('number')?.value,
        city: this.registerForm.get('city')?.value,
        postalCode: this.registerForm.get('postalCode')?.value
      }

      const User = {
        name: this.registerForm.get('name')?.value,
        surname: this.registerForm.get('surname')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value,
      }

      const Request = {
        User,
        Address
      }
      this.authService.register(Request);
    }
  }

}

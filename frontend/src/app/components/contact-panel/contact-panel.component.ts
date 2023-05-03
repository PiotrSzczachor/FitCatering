import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors, FormBuilder, Form } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { environment } from 'src/environments/environment';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { AlertComponent } from '../alert/alert.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-panel',
  templateUrl: './contact-panel.component.html',
  styleUrls: ['./contact-panel.component.css']
})
export class ContactPanelComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private dialog: MatDialog) { }

  messageForm = this.formBuilder.group({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
  }

  send(){
    console.log(this.messageForm.value);
    this.http.post<any>(environment.apiUrl + 'Messages', this.messageForm.value).subscribe(res => {
      if(res){
        this.messageForm.reset();
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = true;
        let dialogRef = this.dialog.open(AlertComponent, {width: '300px', height: '200px', data: {message: "Message sent successfully"}});
      }
    });
  }

}

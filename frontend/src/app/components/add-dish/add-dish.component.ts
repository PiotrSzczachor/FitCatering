import { HttpClient } from '@angular/common/Http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {


  constructor(private formBuilder: FormBuilder,
              private dialog: MatDialog) { }

  ngOnInit(): void { 
  }

  addDishForm = this.formBuilder.group({
    name: new FormControl('', Validators.required),
    cuisine: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    isVege: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required)
  })

  closeDialog(){
    this.dialog.closeAll();
    console.log("TEST");
  }

}

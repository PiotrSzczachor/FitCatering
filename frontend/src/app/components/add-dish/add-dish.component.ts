import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {


  constructor(private formBuilder: FormBuilder,
              private dialog: MatDialog,
              private http: HttpClient) { }

  ngOnInit(): void { 
  }

  uploader!: FileUploader;
  hasBaseDropZoneOver:boolean | undefined;
  hasAnotherDropZoneOver:boolean | undefined;

  addDishForm = this.formBuilder.group({
    name: new FormControl('', Validators.required),
    cuisine: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    isVege: new FormControl(false, Validators.required),
    stock: new FormControl('', Validators.required)
  })

  closeDialog(){
    this.dialog.closeAll();
  }

  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  addDish(){
    if(this.addDishForm.valid){
      console.log(this.addDishForm.value);
    }
  }

}

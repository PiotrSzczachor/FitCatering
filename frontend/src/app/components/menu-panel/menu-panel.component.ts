import { Options } from '@angular-slider/ngx-slider';
import { HttpClient } from '@angular/common/Http';
import { Component, NgModule, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Observable } from 'rxjs';
import { ICuisineDropdownElement } from 'src/app/Interfaces/ICuisineDropdownElement';
import { IDish } from 'src/app/Interfaces/IDish';
import { environment } from 'src/environments/environment';
import { NgbModule, NgbPagination, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { switchMap, take } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddDishComponent } from '../add-dish/add-dish.component';


@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.css']
})
export class MenuPanelComponent implements OnInit {

  pageNumber: number = 1;
  pageSize: number = 4;
  numberOfDishes!: Observable<number>;
  public dishes!: Observable<IDish[]>;
  value: number = 70;
  highValue: number = 90;
  options: Options = {
    floor: 0,
    ceil: 100
  };

  dropdownList: any[] = [];
  selectedItems: Set<string> = new Set();
  dropdownSettings!: IDropdownSettings;

  constructor(private http: HttpClient,
              private dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {
    await this.http.get<any[]>(environment.apiUrl + "Dishes/GetCuisines").subscribe(res => res.forEach(item => this.dropdownList.push(item)));
    this.numberOfDishes = await this.http.get<number>(environment.apiUrl + "Dishes/GetDishesNumber");
    this.dishes = await this.http.get<IDish[]>(environment.apiUrl + "Dishes/Pagin?PageNumber=1&PageSize=" + this.pageSize);
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    this.selectedItems.add(item.name)
  }

  onSelectAll(items: any) {
    items.forEach((item: any) => this.selectedItems.add(item.name));
  }

  onItemDeSelect(item: any){
    this.selectedItems.delete(item.name);
  }

  onDeSelectAll(items: any){
    this.selectedItems.clear();
  }

  async getDishesPagin(){
    this.dishes = await this.http.get<IDish[]>(environment.apiUrl + "Dishes/Pagin?PageNumber=" + this.pageNumber + "&PageSize=" + this.pageSize);
  }

  calcPages(val: number): number{
    return Math.round(val)/4*10;
  }

  openAddDishModal(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    let dialogRef = this.dialog.open(AddDishComponent, dialogConfig);
  }
}

import { Options } from '@angular-slider/ngx-slider';
import { HttpClient } from '@angular/common/Http';
import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Observable } from 'rxjs';
import { ICuisineDropdownElement } from 'src/app/Interfaces/ICuisineDropdownElement';
import { IDish } from 'src/app/Interfaces/IDish';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.css']
})
export class MenuPanelComponent implements OnInit {

  public dishes: IDish[] = [];
  value: number = 70;
  highValue: number = 90;
  options: Options = {
    floor: 0,
    ceil: 100
  };

  dropdownList: any[] = [];
  selectedItems: Set<string> = new Set();
  dropdownSettings!: IDropdownSettings;

  constructor(private http: HttpClient) { }

  async ngOnInit(): Promise<void> {
    await this.http.get<any[]>(environment.apiUrl + "Dishes/GetCuisines").subscribe(res => res.forEach(item => this.dropdownList.push(item)));
    console.log(this.dropdownList);
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

}

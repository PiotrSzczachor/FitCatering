import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopToolbarComponent } from './components/top-toolbar/top-toolbar.component';
import { MainViewerComponent } from './components/main-viewer/main-viewer.component';
import { AdvertisementPanelComponent } from './components/advertisement-panel/advertisement-panel.component';
import { DietsPanelComponent } from './components/diets-panel/diets-panel.component';
import { DietTypeCardComponent } from './components/diet-type-card/diet-type-card.component';
import { SwiperModule } from 'swiper/angular';
import { MenuSectionComponent } from './components/menu-section/menu-section.component';
import { MenuDishCardComponent } from './components/menu-dish-card/menu-dish-card.component';
import { ShoppingCartPanelComponent } from './components/shopping-cart-panel/shopping-cart-panel.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table' ;
import {HttpClientModule} from '@angular/common/Http';
import { DietViewerComponent } from './components/diet-viewer/diet-viewer.component';
import { MenuViewerComponent } from './components/menu-viewer/menu-viewer.component';
import { MatIconModule } from '@angular/material/icon';
import { CommentsPanelComponent } from './components/comments-panel/comments-panel.component';
import { MenuPanelComponent } from './components/menu-panel/menu-panel.component' ;
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatSliderModule} from '@angular/material/slider';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MapComponent } from './components/map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ShippingPanelComponent } from './components/shipping-panel/shipping-panel.component';
import { ContactPanelComponent } from './components/contact-panel/contact-panel.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AddDishComponent } from './components/add-dish/add-dish.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    TopToolbarComponent,
    MainViewerComponent,
    AdvertisementPanelComponent,
    DietsPanelComponent,
    DietTypeCardComponent,
    MenuSectionComponent,
    MenuDishCardComponent,
    ShoppingCartPanelComponent,
    DietViewerComponent,
    MenuViewerComponent,
    CommentsPanelComponent,
    MenuPanelComponent,
    MapComponent,
    ShippingPanelComponent,
    ContactPanelComponent,
    LoginComponent,
    RegisterComponent,
    AddDishComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    MatDialogModule,
    MatTableModule,
    HttpClientModule,
    MatIconModule,
    NgMultiSelectDropDownModule.forRoot(),
    MatSliderModule,
    NgxSliderModule,
    NgbModule,
    NgbPaginationModule,
    LeafletModule,
    MatProgressSpinnerModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

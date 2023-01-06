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
import { MenuPanelComponent } from './components/menu-panel/menu-panel.component';
import { MenuDishCardComponent } from './components/menu-dish-card/menu-dish-card.component';
import { ShoppingCartPanelComponent } from './components/shopping-cart-panel/shopping-cart-panel.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table' ;
import {HttpClientModule} from '@angular/common/Http';
import { DietViewerComponent } from './components/diet-viewer/diet-viewer.component';
import { MenuViewerComponent } from './components/menu-viewer/menu-viewer.component';
import { MatIconModule } from '@angular/material/icon';
import { CommentsPanelComponent } from './components/comments-panel/comments-panel.component' ;

@NgModule({
  declarations: [
    AppComponent,
    TopToolbarComponent,
    MainViewerComponent,
    AdvertisementPanelComponent,
    DietsPanelComponent,
    DietTypeCardComponent,
    MenuPanelComponent,
    MenuDishCardComponent,
    ShoppingCartPanelComponent,
    DietViewerComponent,
    MenuViewerComponent,
    CommentsPanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SwiperModule,
    MatDialogModule,
    MatTableModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

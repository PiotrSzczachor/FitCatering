import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { ClientPanelComponent } from './components/client-panel/client-panel.component';
import { ContactPanelComponent } from './components/contact-panel/contact-panel.component';
import { DietViewerComponent } from './components/diet-viewer/diet-viewer.component';
import { LoginComponent } from './components/login/login.component';
import { MainViewerComponent } from './components/main-viewer/main-viewer.component';
import { MenuViewerComponent } from './components/menu-viewer/menu-viewer.component';
import { RegisterComponent } from './components/register/register.component';
import { ShippingPanelComponent } from './components/shipping-panel/shipping-panel.component';

const routes: Routes = [
  {path: 'home', component: MainViewerComponent},
  {path: "diets/:id", component: DietViewerComponent},
  {path: "menu", component: MenuViewerComponent},
  {path: "shipping", component: ShippingPanelComponent},
  {path: "contact", component: ContactPanelComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "client", component: ClientPanelComponent},
  {path: "admin", component: AdminPanelComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

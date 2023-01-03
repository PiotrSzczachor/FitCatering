import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietViewerComponent } from './components/diet-viewer/diet-viewer.component';
import { MainViewerComponent } from './components/main-viewer/main-viewer.component';
import { MenuViewerComponent } from './components/menu-viewer/menu-viewer.component';

const routes: Routes = [
  {path: 'home', component: MainViewerComponent},
  {path: "diet/:id", component: DietViewerComponent},
  {path: "menu", component: MenuViewerComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

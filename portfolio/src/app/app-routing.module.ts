import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path:'', redirectTo: 'main', pathMatch: ('full')},
  {path:'', component: MainComponent},
  {path:'education', component: MainComponent},
  {path:'about', component: MainComponent},
  {path:'skills', component: MainComponent},
  {path:'projects', component: MainComponent},
  {path:'contact', component: MainComponent},
  ]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

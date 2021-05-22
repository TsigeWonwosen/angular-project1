import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { TasksComponent } from './components/tasks/tasks.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [{
  path:'' , component : HomeComponent,
},
{
  path:"tasks", component: TasksComponent
},{
  path:'login', component: LoginComponent
},
{
  path:'**', component: PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./guard/auth.guard";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: '', redirectTo: 'challenge', pathMatch: 'prefix' },
  { path: 'challenge', loadChildren: './layout/layout.module#LayoutModule'},
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: 'challenge'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

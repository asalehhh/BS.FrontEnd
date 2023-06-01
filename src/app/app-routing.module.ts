import { NgModule } from '@angular/core';    
import { Routes, RouterModule } from '@angular/router';    
import { LoginComponent } from '../app/Login/login/login.component';    
import { ProfileComponent } from '../app/Profile/profile/profile.component';  

const routes: Routes = [
  { path: '',     component: LoginComponent},
  {path : 'login', component:LoginComponent },
  {path : 'profile', component:ProfileComponent }
];    
@NgModule({    
  imports: [RouterModule.forRoot(routes)],    
  exports: [RouterModule]    
})    
export class AppRoutingModule { }    
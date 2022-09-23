import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClipsComponent } from './clips/clips.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'Clips', component: ClipsComponent },
  {path: 'Register', component: RegisterComponent },
  {path: 'About', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

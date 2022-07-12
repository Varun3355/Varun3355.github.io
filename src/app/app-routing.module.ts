import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Nav/about/about.component';
import { EduComponent } from './Nav/edu/edu.component';
import { HomeComponent } from './Nav/home/home.component';
import { SkillComponent } from './Nav/skill/skill.component';

const routes: Routes = [
  {
    path:'',redirectTo:'home', pathMatch:'full'
  },
  {
    path:'', component:HomeComponent
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'edu', component:EduComponent
  },
  {
    path:'skill', component:SkillComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

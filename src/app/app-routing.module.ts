import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectsComponent } from  './components/proyects/proyects.component'
import { SkillsComponent } from './components/skills/skills.component'
import { DatabasesComponent } from './components/databases/databases.component'


const routes: Routes = [
  {path: '', component: ProyectsComponent},
  {path: 'js', component: SkillsComponent},
  {path: 'databases', component: DatabasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

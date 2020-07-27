import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SkillsComponent } from './components/skills/skills.component';
import { DatabasesComponent } from './components/databases/databases.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProyectsComponent,
    MessagesComponent,
    SkillsComponent,
    DatabasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

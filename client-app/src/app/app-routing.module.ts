import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreationComponent } from './client-creation/client-creation.component';
import { ClientMeetingsComponent } from './client-meetings/client-meetings.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'create', component: ClientCreationComponent },
  { path: 'meeting', component: ClientMeetingsComponent },
  { path: 'root', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

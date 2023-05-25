import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { DepartmentComponent } from './pages/department/department.component';
import { DocsComponent } from './pages/docs/docs.component';
import { LoginComponent } from './pages/login/login.component';
import { TeamComponent } from './pages/team/team.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GalleryComponent,
    DepartmentComponent,
    DocsComponent,
    LoginComponent,
    TeamComponent,
    CalendarComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

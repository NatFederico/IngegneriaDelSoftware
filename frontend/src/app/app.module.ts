import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { DepartmentComponent } from './pages/department/department.component';
import { DocsComponent } from './pages/docs/docs.component';
import { AuthComponent } from './pages/auth/auth.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AccountComponent } from './pages/account/account.component';
import { TeamComponent } from './pages/team/team.component';
import { BoardComponent } from './pages/board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    DashboardComponent,
    GalleryComponent,
    DepartmentComponent,
    DocsComponent,
    AuthComponent,
    AccountComponent,
    TeamComponent,
    BoardComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

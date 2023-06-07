import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { DepartmentComponent } from './pages/department/department.component';
import { DocsComponent } from './pages/docs/docs.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AccountComponent } from './pages/account/account.component';
import { TeamComponent } from './pages/team/team.component';
import { BoardComponent } from './pages/board/board.component';
import { StatsComponent } from './pages/stats/stats.component';
import { MagicLinkComponent } from './pages/magic-link/magic-link.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';
import { RequestPwdChange } from './pages/requestPwdChange/request-pwd-change';
import { UpdatePwdComponent } from './pages/update-pwd/update-pwd.component';
import { CreateMemberComponent } from './pages/create-member/create-member.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    GalleryComponent,
    DepartmentComponent,
    DocsComponent,
    AccountComponent,
    TeamComponent,
    BoardComponent,
    StatsComponent,
    MagicLinkComponent,
    SignUpComponent,
    HomeComponent,
    RequestPwdChange,
    UpdatePwdComponent,
    CreateMemberComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

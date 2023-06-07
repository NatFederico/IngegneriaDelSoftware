import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TeamComponent} from "./pages/team/team.component";
import {GalleryComponent} from "./pages/gallery/gallery.component";
import {StatsComponent} from "./pages/stats/stats.component";
import {SignInComponent} from "./pages/sign-in/sign-in.component";
import {SignUpComponent} from "./pages/sign-up/sign-up.component";
import {HomeComponent} from "./pages/home/home.component";
import {UpdatePwdComponent} from "./pages/update-pwd/update-pwd.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'updatePassword',
    component: UpdatePwdComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: '',
    component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

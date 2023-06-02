import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/sign-in/sign-in.component').then( m => m.SignInComponent)
  },
  {
    path: 'signUp',
    loadChildren: () => import('./pages/sign-up/sign-up.component').then( m => m.SignUpComponent)
  },
  {
    path: 'magicLink',
    loadChildren: () => import('./pages/magic-link/magic-link.component').then( m => m.MagicLinkComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

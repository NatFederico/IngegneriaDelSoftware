import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TeamComponent } from './pages/team/team.component';
import { DepartmentComponent } from './pages/department/department.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { DocsComponent } from './pages/docs/docs.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'team', component: TeamComponent},
  { path: 'departments', component: DepartmentComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'board', component: DocsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core'
import { SupabaseService } from './services/supabase.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  session: any;

constructor(
      private router: Router,
      private readonly supabase: SupabaseService
  ) {
    this.session = this.supabase.getSession();
  }

  public ngOnInit() {
    //this.supabase.getAuthState();
    this.supabase.authChanges((event, session) => ( this.session = session))
  }

  public isAuthenticated(): boolean {
    if(this.session){
      return true;
    }
    return false;
  }

  public signOut(): void {
    this.supabase.signOut()
        .then(() => {
          this.router.navigate(['/login']);
        });
  }

}
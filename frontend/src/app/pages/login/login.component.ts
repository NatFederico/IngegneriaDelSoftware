import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  authMethod:boolean = false;
  email: string;
  password: string;
  loading: boolean;

  constructor(private supabase: SupabaseService) { }

  async onSubmit() {
    try {
      this.loading = true
      const { error } = await this.supabase.signInWithMagicLink(this.email)
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.email = ''
      this.loading = false
    }
  }

  changeauthMethod(){
    this.authMethod = !this.authMethod;
  }
}

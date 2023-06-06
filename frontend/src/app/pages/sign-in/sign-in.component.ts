import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import { SupabaseService} from "../../services/supabase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  loading = false

  signInForm = this.formBuilder.group({
    email: '',
    password: ''
  })
  constructor(
      private router: Router,
      private readonly supabase: SupabaseService,
      private readonly formBuilder: FormBuilder
  ) {}

  async onSubmit(): Promise<void> {
    try {
      this.loading = true
      const email = this.signInForm.value.email as string
      const password = this.signInForm.value.password as string

      const { error } = await this.supabase.signInWithEmail(email, password);
      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.signInForm.reset()
      this.loading = false
    }
  }
}

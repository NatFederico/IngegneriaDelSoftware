import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import { SupabaseService} from "../../services/supabase.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  loading = false

  signUpForm = this.formBuilder.group({
    email: '',
    password: '',
    team: ''
  })
  constructor(
      private readonly supabase: SupabaseService,
      private readonly formBuilder: FormBuilder
  ) { }

  async onSubmit(): Promise<void> {
    try {
      this.loading = true
      const email = this.signUpForm.value.email as string
      const password = this.signUpForm.value.password as string
      const team = this.signUpForm.value.team as string

      const { error } = await this.supabase.signUpWithEmail(email, password);
      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.signUpForm.reset()
      this.loading = false
    }
  }

}

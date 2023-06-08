import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { SupabaseService } from "../../services/supabase.service";
import { AuthSession } from "@supabase/supabase-js";

@Component({
  selector: 'app-magic-link',
  templateUrl: './magic-link.component.html',
  styleUrls: ['./magic-link.component.scss']
})
export class MagicLinkComponent {

  loading = false

  signInForm = this.formBuilder.group({
    email: '',
  })

  constructor(
    private readonly supabase: SupabaseService,
    private readonly formBuilder: FormBuilder
  ) { }

  async onSubmit(): Promise<void> {
    try {
      this.loading = true
      const email = this.signInForm.value.email as string
      const { error } = await this.supabase.signInWithMagicLink(email)
      if (error) throw error
      alert('Check your email for the login link!')
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

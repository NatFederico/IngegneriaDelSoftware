import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import { SupabaseService} from "../../services/supabase.service";

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.scss']
})
export class CreateMemberComponent {
  loading = false

  signUpForm = this.formBuilder.group({
    email: '',
  })
  constructor(
      private readonly supabase: SupabaseService,
      private readonly formBuilder: FormBuilder
  ) { }

  async onSubmit(): Promise<void> {
    try {
      this.loading = true
      const email = this.signUpForm.value.email as string

      const { error } = await this.supabase.signUpWithEmail(email, email);
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

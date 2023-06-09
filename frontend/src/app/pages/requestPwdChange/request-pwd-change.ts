import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import { SupabaseService} from "../../services/supabase.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-requestPwdChange',
  templateUrl: './request-pwd-change.html',
  styleUrls: ['./request-pwd-change.scss']
})
export class RequestPwdChange {
  loading = false

  resetPwd = this.formBuilder.group({
    email: '',
  })
  constructor(
      private router: Router,
      private readonly supabase: SupabaseService,
      private readonly formBuilder: FormBuilder
  ) { }

  async onSubmit(): Promise<void> {
    try {
      this.loading = true
      const email = this.resetPwd.value.email as string

      const { error } = await this.supabase.requestResetPassword(email);
      if (error) throw error
      else alert('Check your email for the reset password link!')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.resetPwd.reset()
      this.loading = false
    }
  }

}

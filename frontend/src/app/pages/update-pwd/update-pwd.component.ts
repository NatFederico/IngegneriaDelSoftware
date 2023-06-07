import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import { SupabaseService} from "../../services/supabase.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-update-pwd',
  templateUrl: './update-pwd.component.html',
  styleUrls: ['./update-pwd.component.scss']
})
export class UpdatePwdComponent {
  loading = false

  updatePwd = this.formBuilder.group({
    password: ''
  })

  constructor(
      private router: Router,
      private readonly supabase: SupabaseService,
      private readonly formBuilder: FormBuilder
  ) { }

  async onSubmit(): Promise<void> {
    try {
      this.loading = true
      const password = this.updatePwd.value.password as string

      const { error } = await this.supabase.updatePassword(password);
      if (error) throw error
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.updatePwd.reset()
      this.loading = false
      console.log("Password salvata");
    }
  }

}

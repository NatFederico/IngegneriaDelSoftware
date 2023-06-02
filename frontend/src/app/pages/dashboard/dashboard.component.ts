import {Component, Input, OnInit} from '@angular/core';
import {AuthSession} from "@supabase/supabase-js";
import {SupabaseService} from '../../services/supabase.service'
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  loading = false

  @Input()
  session!: AuthSession

  constructor(private readonly supabase: SupabaseService) { }

  async signOut() {
    await this.supabase.signOut();
  }
}

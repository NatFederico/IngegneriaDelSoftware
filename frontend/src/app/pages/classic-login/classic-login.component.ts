import { Component, OnInit } from '@angular/core';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-classic-login',
  templateUrl: './classic-login.component.html',
  styleUrls: ['./classic-login.component.scss']
})
export class ClassicLoginComponent implements OnInit {

  loading: boolean;
  email: string;
  password: string;

  constructor(private supabase: SupabaseService) { }

  ngOnInit(): void {
  }

}

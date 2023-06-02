import {Component, Input, OnInit} from '@angular/core';
import {AuthSession} from "@supabase/supabase-js";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  @Input()
  session!: AuthSession

  constructor() { }

  ngOnInit(): void {
  }

}

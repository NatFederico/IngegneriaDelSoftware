import {Component, Input, OnInit} from '@angular/core';
import {AuthSession} from "@supabase/supabase-js";

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  @Input()
  session!: AuthSession

  constructor() { }

  ngOnInit(): void {
  }

}

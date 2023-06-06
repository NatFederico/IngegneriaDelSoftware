import {Component, Input, OnInit} from '@angular/core';
import {AuthSession} from "@supabase/supabase-js";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input()
  session!: AuthSession
  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {AuthSession} from "@supabase/supabase-js";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input()
  session!: AuthSession

  constructor() { }

  ngOnInit(): void {
  }

}

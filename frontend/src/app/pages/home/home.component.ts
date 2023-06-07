import { Component } from '@angular/core';
import {SupabaseService} from "../../services/supabase.service";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  changePw = false;

  constructor(private readonly supabase: SupabaseService, private readonly apiservice: ApiService) { }

  async myProfile() {
    await this.apiservice.getUser("c1ba7173-e9c3-465f-af21-febe6b404e92");
  }

  toggleChangePwd(){
    this.changePw=!this.changePw;
    return this.changePw;
  }

}

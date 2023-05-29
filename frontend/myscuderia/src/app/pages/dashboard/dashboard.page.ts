import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  user = this.authService.getCurrentUser();
  groups = [];

  constructor(
    private authService: AuthService,
    private data: DataService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private navContoller: NavController,
    private router: Router
  ) {}

  ngOnInit() {}

  signOut() {
    this.authService.signOut();
  }

  openLogin() {
    this.navContoller.navigateBack('/');
  }
}
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'popmenu',
  templateUrl: './popmenu.component.html',
  styleUrls: ['./popmenu.component.scss']
})
export class PopmenuComponent implements OnInit {
  openMenu: Boolean = false;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }

  goToHome() {
    this.navCtrl.navigateRoot('/home-results');
  }

  goToManual() {
    this.navCtrl.navigateRoot('/manual-sign-in');
  }

  goToBookings() {
    this.navCtrl.navigateRoot('/sign-in-booking');
  }

  goToVisitors() {
    this.navCtrl.navigateRoot('/visitor-sign-out');
  }

}

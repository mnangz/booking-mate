import { Component, OnInit } from '@angular/core';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController, 
  LoadingController,
  Platform} from '@ionic/angular';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';

// Modals
import { SearchFilterPage } from '../../pages/modal/search-filter/search-filter.page';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ScannedPage } from '../modal/scanned/scanned.page';
import { CompanyService } from 'src/app/services/company.service';

const TOKEN_KEY = 'access_token';

@Component({
  selector: 'app-home-results',
  templateUrl: './home-results.page.html',
  styleUrls: ['./home-results.page.scss']
})
export class HomeResultsPage implements OnInit {

  scannedCode = null;
  qrOptions: BarcodeScannerOptions;
  staff:any;
  company:any;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    private barcodeScanner: BarcodeScanner,
    private helper: JwtHelperService, 
    private storage: Storage,
    private companyService: CompanyService,
    private plt: Platform,
  ) {
    this.qrOptions = { prompt: 'Scan the QR Code to sign visitor in', resultDisplayDuration: 1500, showTorchButton : true, disableSuccessBeep: false };
  }

  async ngOnInit() {
    await this.getStaff();
    await this.getCompanyInfo();
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  async searchFilter () {
    const modal = await this.modalCtrl.create({
      component: SearchFilterPage
    });
    return await modal.present();
  }

  async getStaff() {
    await this.storage.get(TOKEN_KEY)
      .then((token) => {

        if (token) {
          let decoded = this.helper.decodeToken(token);
          this.staff = decoded;
        }

      });
  }

  async getCompanyInfo() {
    await this.companyService.getCompany(this.staff)
      .subscribe(res => {
        this.company = res;
      }, err => {
        console.log(err);
      });
  }

  async scanCode(){
    await this.barcodeScanner.scan(this.qrOptions)
      .then(barcodeData => {
        this.scannedCode = JSON.parse(barcodeData.text);
       })
       .catch(err => {
        console.log('Error', err);
       });
    
      this.presentVisitor(this.scannedCode);
  }

  // async openDetailsWithService() {
  //   await this.dataService.setData(7, this.scannedCode);
  //   this.router.navigateByUrl('/manual-sign-in/7');
  // }

  async presentVisitor(visitor: any) {
    var myVisitor = JSON.stringify(visitor);

    const modal = await this.modalCtrl.create({
      component: ScannedPage,
      componentProps: { value: myVisitor }
    });

    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();

    loader.onWillDismiss().then(async l => {
      return await modal.present();
    });
  }

}

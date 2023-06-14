import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VisitorsService } from 'src/app/services/visitors.service';
import {
  NavController,
  AlertController,
  MenuController,
  ToastController,
  PopoverController,
  ModalController, 
  LoadingController,
  Platform} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage';
import { finalize } from 'rxjs/operators';
import { EmployeesService } from 'src/app/services/employees.service';
import { NgxSpinnerService } from "ngx-spinner";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const TOKEN_KEY = 'access_token';

@Component({
  selector: 'app-scanned',
  templateUrl: './scanned.page.html',
  styleUrls: ['./scanned.page.scss'],
})
export class ScannedPage implements OnInit {

  @Input() value: any;
  public info: any;
  personInfo: any;
  staff:any;
  employee:any;
  visitorInfo = null;
  isDataAvailable:boolean = false;
  personVisitedForm: FormGroup;

  constructor(
    private sanitizer: DomSanitizer,
    public service: VisitorsService,
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public popoverCtrl: PopoverController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private helper: JwtHelperService, 
    private storage: Storage,
    private spinner: NgxSpinnerService,
    public employeeService: EmployeesService,
    private formBuilder: FormBuilder,
    private plt: Platform
  ) { 
    // this.plt.ready().then(() => {
    //   this.ngOnInit();
    // });
  }

  async ngOnInit() {
    await this.getStaff();
    await this.getEmployee();
    // await this.fetchInfo();

    this.info = this.sanitizer.bypassSecurityTrustStyle(this.value);
    this.personInfo = JSON.parse(this.info.changingThisBreaksApplicationSecurity);
    console.log(this.personInfo);

    this.personVisitedForm = this.formBuilder.group({
      person_visited: ['', [Validators.required ]],
    });
  }

  async getStaff() {
    await this.storage.get(TOKEN_KEY)
      .then((token) => {

        if (token) {
          let decoded = this.helper.decodeToken(token);
          this.staff = decoded;
          console.log(this.staff)
        }

      });
  }

  getEmployee(){
    this.employeeService.allEmployees(this.staff)
    .subscribe(res => {
      this.employee = res;
      console.log(this.employee)
    }, err => {
      console.log(err);
    });
  }

  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 2000);
  }

  async fetchInfo() {
    this.info = this.sanitizer.bypassSecurityTrustStyle(this.value);

    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();

    loader.onWillDismiss().then(async l => {
      this.personInfo = JSON.parse(this.info.changingThisBreaksApplicationSecurity);
    });
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  async signIn() {
    const alert = await this.alertCtrl.create({
      header: 'Confirmation',
      message: 'Sign in the visitor?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Confirm',
          handler: async () => {

            this.executeSignIn();
            this.closeModal();

            const loader = await this.loadingCtrl.create({
              duration: 2000
            });

            loader.present();
            loader.onWillDismiss().then(async l => {
              const toast = await this.toastCtrl.create({
                showCloseButton: true,
                message: 'Visitor signed in successfully',
                duration: 2000,
                position: 'bottom'
              });

              toast.present();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  executeSignIn(){
    if(this.personInfo){
        this.visitorInfo = {company_name: '', vehicle_reg: '', purpose_of_visit: '', person_visited: '', mobile: '', 
        email: '', address: '', id_number: '', last_name: '', first_name: ''}
        
        this.visitorInfo.id_number = this.personInfo.id_number;
        this.visitorInfo.company_name = this.personInfo.company_name;
        this.visitorInfo.vehicle_reg = this.personInfo.vehicle_reg;
        this.visitorInfo.purpose_of_visit = this.personInfo.purpose_of_visit;
        this.visitorInfo.person_visited = this.personVisitedForm.value.person_visited;
        this.visitorInfo.mobile = this.personInfo.mobile;
        this.visitorInfo.email = this.personInfo.email;
        this.visitorInfo.address = this.personInfo.address;
        this.visitorInfo.last_name = this.personInfo.last_name;
        this.visitorInfo.first_name = this.personInfo.first_name;

        console.log(this.visitorInfo);


      this.service.visitorSignin(this.visitorInfo, this.staff).subscribe();
    }
  }


}

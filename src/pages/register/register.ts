import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App,AlertController } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';
import { TabsPage } from '../tabs/tabs';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  fullname: any;
  email: any;
  tel: any;
  username: any;
  password: any;

  //ใช้เป็นตัวแปรอาเรย์แทนการเขียนหลายตัวแบบข้างบน

  userData = {
    "fullname": "",
    "email": "",
    "tel": "",
    "username": "",
    "password": ""
  }
  //ตัวแปรรับค่าจาก JSON เวลาเช็คว่ากรอก user/pass ถูกมั้ย
  responseData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public webapi: WebapiServiceProvider,
    public app: App,
    public alertCtrl:AlertController ) {
  }

  ionViewDidLoad() {

  }

  register() {
    this.webapi.postData(this.userData, 'register.php').then((result) => {
      this.responseData = result;
      if(this.responseData.userData){
    
        const alert = this.alertCtrl.create({
          title: 'ลงทะเบียนสำเร็จ!',
          buttons: ['OK']
        });
        alert.present();

        this.navCtrl.setRoot(TabsPage);
      }
    });
  }
}

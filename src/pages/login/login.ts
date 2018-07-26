import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userData = {
    "Username": "",
    "Password": ""
  };
  //get data from api
  responseData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public webapi: WebapiServiceProvider) {
  }

  ionViewDidLoad() {

  }

  login() {
    //function check login
    this.webapi.postData(this.userData, 'login.php').then((result) => {
      this.responseData = result;

      //console.log(this.responseData);
      if (this.responseData.userData) { //ถ้ามีข้อมูลใน userData ใน responseData
        //alert 
        const alert = this.alertCtrl.create({
          title: 'เข้าสู่ระบบสำเร็จ',
          buttons: ['OK']
        });
        alert.present();
        //บันทึกข้อมูลของ local storage
        localStorage.setItem("userData", this.userData.Username);
        //ปิดหน้า login และกลับไปหน้าหลัง
        this.navCtrl.setRoot(TabsPage);
      } else {
        const alert = this.alertCtrl.create({
          title: 'เข้าสู่ระบบไม่สำเร็จ!',
          subTitle: 'กรุณากรอกข้อมูลอีกครั้ง',
          buttons: ['OK']
        });
        alert.present();
      }
    });


  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

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
  username:any;
  password:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
     
  }

  login(){
    if(this.username == "admin" && this.password =="1234"){
      alert("เข้าสู่ระบบสำเร็จ");
      //บันทึกข้อมูลของ local storage
      localStorage.setItem("userData",this.username);
      //ปิดหน้า login และกลับไปหน้าหลัง
     this.navCtrl.setRoot(TabsPage);
    } else{
      alert("เข้าสู่ระบบไม่สำเร็จ");
    }

  }

}

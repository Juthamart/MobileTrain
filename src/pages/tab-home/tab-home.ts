import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, AlertController, Platform } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { Device } from '@ionic-native/device';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',

})
export class TabHomePage {
  userDatail: any;
  loginStatus: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public app: App,
    public alertCtrl: AlertController,
    public platform: Platform,
    private camera: Camera,
    private barcodeScanner: BarcodeScanner,
    public device: Device) {
    //ตรวจว่ามีตัวแปร userData อยู่ใน LocalStorage อยู่มั้ย
    let data = localStorage.getItem("userData");
    if (data == null) {
      this.userDatail = "Corner";
      this.loginStatus = false;
    } else {
      this.userDatail = data;
      this.loginStatus = true;
    }
  }

  ionViewDidLoad() {
    //คำสั่งตรวจสอบว่าเป็น devices จริงเท่านั้น 
      if(!this.platform.is('core')){
        const alert = this.alertCtrl.create({
          title: 'Device platform is ' + this.device.platform,
          buttons: ['OK']
        });
        alert.present();
      }
    
  }

  showLogin() {
    this.app.getRootNav().push(LoginPage);
  }
  logout() {
    localStorage.removeItem('userData');
    this.navCtrl.setRoot(TabsPage);
  }
  showRegister() {
    this.app.getRootNav().push(RegisterPage);
  }

  OpenCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  ScanBarcode(){
    this.barcodeScanner.scan().then(barcodeData => {
     
      const alert = this.alertCtrl.create({
        title: 'Barcode data :  ' + barcodeData,
        buttons: ['OK']
      });
      alert.present();
     }).catch(err => {
         console.log('Error', err);
     });
  }
}

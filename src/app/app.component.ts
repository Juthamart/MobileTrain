import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';

import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SideSettingPage } from '../pages/side-setting/side-setting';

import { FCM } from '@ionic-native/fcm';
import { PushDetailPage } from '../pages/push-detail/push-detail';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public alertCtrl: AlertController,
    private fcm: FCM) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'ตารางอบรม', component: SideSchedulePage },
      { title: 'ผลงานของเรา', component: SidePortfolioPage },
      { title: 'ช่องทางชำระเงิน', component: SidePaymentPage },
      { title: 'ตั้งค่า', component: SideSettingPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      //push notification
      if (!this.platform.is('core')) { //check device is real android/ios not window
        this.fcm.subscribeToTopic('all');
        this.fcm.getToken().then(token => {
          const alert = this.alertCtrl.create({
            title: 'Token :',
            message: token,
            inputs:[
              {
                name: 'token',
                value: token
              }
            ],
            buttons: ['OK']
          });
          alert.present();
        });

        //recieve push notification
        

        this.fcm.onNotification().subscribe(data => {
          if (data.wasTapped) {
            this.nav.push(PushDetailPage,{sid:data.pid});
          } else {
            alert("Received in foreground");
          };
        });

      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}

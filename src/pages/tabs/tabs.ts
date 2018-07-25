import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabHomePage } from '../tab-home/tab-home';
import { TabCoursePage } from '../tab-course/tab-course';
import { TabServicePage } from '../tab-service/tab-service';
import { TabArticlePage } from '../tab-article/tab-article';
import { TabContactPage } from '../tab-contact/tab-contact';
import { TabChatPage } from '../tab-chat/tab-chat';
import { SidePaymentPage } from '../side-payment/side-payment';
import { SideSchedulePage } from '../side-schedule/side-schedule';
import { SidePortfolioPage } from '../side-portfolio/side-portfolio';
import { SideSettingPage } from '../side-setting/side-setting';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root: any = TabHomePage;
  tab2Root: any = TabCoursePage;
  tab3Root: any = TabServicePage;
  tab4Root: any = TabArticlePage;
  tab5Root: any = TabContactPage;
  tab6Root: any = TabChatPage;
  
  side1Root: any = SideSchedulePage;
  side2Root: any = SidePortfolioPage;
  side3Root: any = SidePaymentPage;
  side4Root: any = SideSettingPage;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Device } from '@ionic-native/device';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { SideSettingPage } from '../pages/side-setting/side-setting';
import { TabArticlePage } from '../pages/tab-article/tab-article';
import { TabChatPage } from '../pages/tab-chat/tab-chat';
import { TabContactPage } from '../pages/tab-contact/tab-contact';
import { TabHomePage } from '../pages/tab-home/tab-home';
import { TabServicePage } from '../pages/tab-service/tab-service';
import { TabsPage } from '../pages/tabs/tabs';
import { TabCoursePage } from '../pages/tab-course/tab-course';

//api mobule
import { WebapiServiceProvider } from '../providers/webapi-service/webapi-service';
import { HttpModule } from '@angular/http';

import { CourseDetailPage } from '../pages/course-detail/course-detail';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

//push notification with firbase
import { FCM } from '@ionic-native/fcm';
import { PushDetailPage } from '../pages/push-detail/push-detail';
import { ChartPage } from '../pages/chart/chart';

@NgModule({
  declarations: [
    MyApp,
    SidePaymentPage,
    SidePortfolioPage,
    SideSchedulePage,
    SideSettingPage,
    TabArticlePage,
    TabChatPage,
    TabCoursePage,
    TabContactPage,
    TabHomePage,
    TabServicePage,
    TabsPage,
    CourseDetailPage,
    LoginPage,
    RegisterPage,
    PushDetailPage,
    ChartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SidePaymentPage,
    SidePortfolioPage,
    SideSchedulePage,
    SideSettingPage,
    TabArticlePage,
    TabCoursePage,
    TabChatPage,
    TabContactPage,
    TabHomePage,
    TabServicePage,
    TabsPage,
    CourseDetailPage,
    LoginPage,
    RegisterPage,
    PushDetailPage,
    ChartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebapiServiceProvider,
    Device,
    Camera,
    BarcodeScanner,
    FCM
    
    
    
  ]
})
export class AppModule {
  
}

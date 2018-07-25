import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebapiServiceProvider } from '../../providers/webapi-service/webapi-service';

@IonicPage()
@Component({
  selector: 'page-course-detail',
  templateUrl: 'course-detail.html',
})
export class CourseDetailPage {

  responseData: any;

  //ตัวแปรรับไอดีมา
  getid:number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public webapi: WebapiServiceProvider) {
      
      this.getid = navParams.get('id');
      console.log(this.getid);
  }

  ionViewDidLoad() {
    this.webapi.getData('feed_course_detail.php?cid='+this.getid).then((result) => {
      this.responseData = result;
  });
}

}

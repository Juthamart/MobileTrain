import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
declare let google;

/**
 * Generated class for the TabContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-contact',
  templateUrl: 'tab-contact.html',
})
export class TabContactPage {
  @ViewChild('map') mapElement: ElementRef;
  map:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    let lat = 13.7620638;
    let lng = 100.5577409;
    let latLng = new google.maps.LatLng(lat,lng);
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    //new google map marker
    new google.maps.Marker({
      position: latLng,
      map: this.map,
      icon: "https://image.flaticon.com/icons/png/128/149/149060.png"

    })
  }

}

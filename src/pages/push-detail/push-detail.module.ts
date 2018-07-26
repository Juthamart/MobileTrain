import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PushDetailPage } from './push-detail';

@NgModule({
  declarations: [
    PushDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PushDetailPage),
  ],
})
export class PushDetailPageModule {}

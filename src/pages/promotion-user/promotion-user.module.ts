import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromotionUserPage } from './promotion-user';

@NgModule({
  declarations: [
    PromotionUserPage,
  ],
  imports: [
    IonicPageModule.forChild(PromotionUserPage),
  ],
})
export class PromotionUserPageModule {}

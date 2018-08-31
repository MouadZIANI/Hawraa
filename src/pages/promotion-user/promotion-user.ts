import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-promotion-user',
  templateUrl: 'promotion-user.html',
})
export class PromotionUserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  BankForm() {
    this.navCtrl.push('ApplyBankFormPage');
  }

}

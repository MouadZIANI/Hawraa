import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-myaccount',
  templateUrl: 'myaccount.html',
})
export class MyaccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  OpenChangePassword() {
    this.navCtrl.push('ChangepasswordPage');
  }

  EditProfile() {
    this.navCtrl.push('EditPoriflePage');
  }

  EditDescription() {
    this.navCtrl.push('EditDescriptionPage');
  }

  Album() {
    this.navCtrl.push('AlbumPage');
  }

  OpenPromotionUser() {
    this.navCtrl.push('PromotionUserPage');
  }

}

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = "LoginPage";

  pages: Array<{title: string, component: any,icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'الرئيسية', component: 'HomePage', icon: "home"},
      { title: 'البحث عن الشريك', component: 'SearchPage', icon: 'search' },
      { title: 'لائحة الزيارات', component: 'VisitorsPage', icon: 'people' },
      { title: 'معلوماتي الشخصية', component: 'ProfilePage', icon: 'contact' },
      { title: 'قائمة الاعجابات', component: 'FansPage', icon: 'heart' },
      { title: 'صندوق البريد', component: 'MessagesPage', icon: 'mail' },
      { title: 'الخطابات', component: 'KhtabatPage', icon: 'rose' },
      { title: 'حسابي', component: 'MyaccountPage', icon: 'person' },
      { title: 'من نحن ؟ ', component: 'AboutPage', icon: 'information-circle' },
      { title: 'اتصل بنا', component: 'ContactsPage', icon: 'mail-open' },
      { title: 'تسجيل الخروج', component: 'ListPage', icon: 'log-out' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

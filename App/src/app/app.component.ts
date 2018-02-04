import { Component, ViewChild } from '@angular/core';
import { Config, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FirstRunPage } from '../pages/page';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = FirstRunPage;

  @ViewChild(Nav) nav: Nav;
  pages: any[] = [
    { title: 'Login', component: 'LoginPage' },
    { title: 'Tabs', component: 'TabsPage' },
    { title: 'Home', component: 'HomePage' },
    { title: 'Event', component: 'EventPage' },
  ]
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => { statusBar.styleDefault(); splashScreen.hide(); });
  }

  openPage(page) { this.nav.setRoot(page.component); }
}

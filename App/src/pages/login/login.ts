import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { MainPage } from '../page';

import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpCtrl: HttpClient, public eventCtrl: Events) { }
  ionViewDidLoad() { console.log('ionViewDidLoad LoginPage'); }
  /**/
  postQuery: Observable<any>;
  user = {
    login: "Kevin",
    password: "root"
  }
  url = "";

  onSubmit() {
    postQuery = this.httpCtrl.post(this.url, this.user);
    postQuery.subscribe(data => {
      if(this.user.login == data.user[0].login && this.user.password == data.user[0].password) {
        this.events.publish("login:account", this.user, this.url);
        this.navCtrl.push(MainPage)
      }
    });
  }

}

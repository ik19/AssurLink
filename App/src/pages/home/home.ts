import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public eventCtrl: Events) { }
  ionViewDidLoad() { console.log('ionViewDidLoad EventPage'); }

  json: string;

  eventCtrl.subscribe('login:account', (user, url) => {
    this.httpCtrl.post(url, user).subscribe(data => {
      this.json = JSON.stringify(data);
    });
  });

}

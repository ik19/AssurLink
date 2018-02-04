/*import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {

  user: string;
  password: string;
  url: string;

    constructor() {
      this.user = "Kevin";
      this.password = "root";
      this.url = "test";
    }

    setUserName(User, Password, Url) {
      this.login = User;
      this.password = Password;
      this.url = Url;
    }
    getUser() { return(this.user); }
    getPassword() { return(this.password); }
    getUrl() { return(this.url); }
}
*/
import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {

    firstName: string;
    lastName: string;

    constructor() {
        this.firstName = 'Blank';
        this.lastName = 'Name';
    }

    setUserName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getUserName() {
        return this.firstName + ' ' + this.lastName;
    }
}

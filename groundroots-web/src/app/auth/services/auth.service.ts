import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { User } from 'src/app/shared/models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signUp(user: User) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(credentials => {
      console.log(credentials.user);
    }).catch(error => { console.error(error) });
  }

}

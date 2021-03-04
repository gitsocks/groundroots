import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private authentication: AngularFireAuth) { }

  async signUpWithEmailAndPassword(email: string, password: string) {
    const credentials = await this.authentication.auth.createUserWithEmailAndPassword(email, password);
    const user = {
      id: credentials.user.uid,
      firstName: credentials.user.displayName.split(' ')[0],
      lastName: credentials.user.displayName.split(' ')[1],
      email: credentials.user.email
    }
    return user;
  }

  getAuthState() {
    return this.authentication.authState;
  }

  signOut() {
    this.authentication.auth.signOut();
  }

}

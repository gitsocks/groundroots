import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private auth: AngularFireAuth
  ) { }

  loginWithEmail(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  loginWithGoogle(): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  register(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  resetPassword(email: string) {
    return this.auth.sendPasswordResetEmail(email);
  }

  logout() {
    this.auth.signOut();
  }

  getAuth(): AngularFireAuth {
    return this.auth;
  }
  
}

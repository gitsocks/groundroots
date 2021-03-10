import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private firestore: AngularFirestore) { }

  fetch(uid: string) {
    return this.firestore.collection('accounts').doc(uid);
  }

  async create(user: User) {
    return await this.firestore.collection('accounts').doc(user.id).set({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      cellphone: user.cellphone
    });
  }
}

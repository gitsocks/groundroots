import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private firestore: AngularFirestore) { }

  fetchById(uid: string) {
    try {
      return this.firestore.collection<User>('accounts').doc(uid);
    } catch (error) {
      console.log(error)
    }
  }

  async create(user: User) {
    return await this.firestore.collection('accounts').doc(user.id).set({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      cellphone: user.cellphone
    });
  }

  update(user: User) {
    return this.firestore.collection('accounts').doc(user.id).update(user);
  }
}

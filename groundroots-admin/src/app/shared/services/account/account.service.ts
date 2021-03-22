import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private firestore: AngularFirestore) { }

  fetchAll() {
    return this.firestore.collection('accounts').valueChanges();
  }

  fetchById(id: string) {
    return this.firestore.collection('accounts').doc(id).get();
  }

  create(account: User) {
    return this.firestore.collection('accounts').add(account);
  }

  update(account: User) {
    return this.firestore.collection('accounts').doc(account.id).update({
      firstName: account.firstName,
      lastName: account.lastName,
      cellphone: account.cellphone
    });
  }

  updateAddress(account: User) {
    return this.firestore.collection('accounts').doc(account.id).update({
      address: {
        street: account.address.street,
        city: account.address.city,
        province: account.address.province,
        postalCode: account.address.postalCode,
        country: account.address.country
      }
    });
  }
  
}

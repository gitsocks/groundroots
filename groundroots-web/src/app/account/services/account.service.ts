import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private firestore: AngularFirestore) { }

  async create(user: User) {
    return await this.firestore.collection('accounts').add(user);
  }
}

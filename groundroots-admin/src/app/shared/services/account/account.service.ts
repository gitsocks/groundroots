import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private firestore: AngularFirestore) { }

  fetchById(id: string) {
    return this.firestore.collection('accounts').doc(id).get();
  }

  
}

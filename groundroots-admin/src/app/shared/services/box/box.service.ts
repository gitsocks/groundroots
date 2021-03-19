import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Box } from '../../models/box.model';

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  fetchByCustomer(id) {
    return this.firestore.collection<Box>('boxes', ref => ref.where('customerId', '==', id)).valueChanges({ idField: 'id' });
  }
}

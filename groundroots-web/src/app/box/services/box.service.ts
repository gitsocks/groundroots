import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Box } from 'src/app/shared/models/box.model';

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  constructor(private firestore: AngularFirestore) { }

  create(box: Box) {
    return this.firestore.collection('boxes').add(box);
  }

  fetchByUser(id) {
    return this.firestore.collection<Box>('boxes', ref => ref.where('customerId', '==', id)).valueChanges({ idField: 'id' });
  }

  fetchById(id) {
    return this.firestore.collection<Box>('boxes').doc(id);
  }

  cancel(id) {
    
  }

}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Box } from 'src/app/shared/models/box.model';
import { environment } from 'src/environments/environment';
import * as md5 from 'md5';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  constructor(private firestore: AngularFirestore, private http: HttpClient) { }

  create(box: Box) {
    return this.firestore.collection('boxes').add(box);
  }

  update(box: Box) {
    return this.firestore.collection('boxes').doc(box.id).update(box);
  }

  fetchByUser(id) {
    return this.firestore.collection<Box>('boxes', ref => ref.where('customerId', '==', id).where('status', '!=', 'Cancelled')).valueChanges({ idField: 'id' });
  }

  fetchById(id) {
    return this.firestore.collection<Box>('boxes').doc(id);
  }

  cancel(box: Box) {
    const url = "https://us-central1-ground-roots.cloudfunctions.net/app/payment/"+box.id;
    return this.http.delete(url);
  }

}

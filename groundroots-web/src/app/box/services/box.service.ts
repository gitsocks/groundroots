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

}

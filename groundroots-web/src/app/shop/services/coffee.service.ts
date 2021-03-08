import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentChange } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Coffee } from 'src/app/shared/models/coffee.model';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private firestore: AngularFirestore) { }

  fetchCoffees() {
    return this.firestore.collection('products').get();
  }


}

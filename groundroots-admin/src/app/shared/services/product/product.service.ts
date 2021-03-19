import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Coffee } from '../../models/coffee.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage
  ) { }

  async create(product: Coffee) {
    const doc = await this.firestore.collection('products').add(product);
    const reference = this.storage.ref(`/products/${doc.id}`);
    return reference.put(product.imageFile);
  }
}

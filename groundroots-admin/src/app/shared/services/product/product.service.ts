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

  fetchAll() {
    return this.firestore.collection<Coffee>('products').valueChanges({ idField: 'id' });
  }

  fetchById(id: string) {
    return this.firestore.collection<Coffee>('products').doc(id).get();
  }

  create(product: Coffee) {
    return this.firestore.collection('products').add(product);
  }

  fetchProductImage(product: Coffee) {
    return this.storage.ref(`/products/${product.id}`).getDownloadURL();
  }

  update(product: Coffee) {
    return this.firestore.collection('products').doc(product.id).update(product);
  }

  updateImage(product: Coffee, image: File) {
    const reference = this.storage.ref(`/products/${product.id}`);
    if (reference) reference.delete();
    return reference.put(image);
  }
}

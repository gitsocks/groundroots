import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp();
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const addProduct = functions.https.onRequest((request, response) => {
  const product = request.body;
  const db = admin.firestore();
  db.collection("products").add(product).then(() => { response.send(product); });
});

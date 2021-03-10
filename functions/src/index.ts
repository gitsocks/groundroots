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

export const processPayment = functions.https.onRequest((request, response) => {
  const payment = request.body;
  const db = admin.firestore();
  const boxId = payment.custom_str1;
  db.collection("payments").add(payment);
  db.collection("boxes").doc(boxId).update({
    status: "Paid",
    token: payment.token
  });
});

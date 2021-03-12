export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyChKRgT1plNvvSt7zvLunv0TPEZ8eeoADo",
    authDomain: "ground-roots.firebaseapp.com",
    databaseURL: "https://ground-roots.firebaseio.com",
    projectId: "ground-roots",
    storageBucket: "ground-roots.appspot.com",
    messagingSenderId: "367674410585",
    appId: "1:367674410585:web:915231904742265248d348",
    measurementId: "G-8PE0PHFQZN"
  },
  payfast: {
    // url: "https://www.payfast.co.za/eng/process",
    // merchant_id: "10000100",
    // merchant_key: "46f0cd694581a",
    url: "https://sandbox.payfast.co.za/eng/process",
    merchant_id: "10021945",
    merchant_key: "1mqknuo6fdkmz",
    return_url: "https://ground-roots.web.app/box/success",
    cancel_url: "https://ground-roots.web.app/box/cancel",
    notify_url: "https://us-central1-ground-roots.cloudfunctions.net/app/payment",
    subscription_api: "https://api.payfast.co.za/subscriptions",
  }
};

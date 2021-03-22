// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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
    url: "https://sandbox.payfast.co.za/eng/process",
    merchant_id: "10021945",
    merchant_key: "1mqknuo6fdkmz",
    return_url: "https://ground-roots.web.app/box/payment/success",
    cancel_url: "https://ground-roots.web.app/box/payment/cancel",
    notify_url: "https://us-central1-ground-roots.cloudfunctions.net/app/payment"
  }
};


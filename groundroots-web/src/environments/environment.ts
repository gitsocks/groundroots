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
    merchant_id: "10000100",
    merchant_key: "46f0cd694581a",
    return_url: "http://localhost:4200/box/success",
    cancel_url: "http://localhost:4200/box/cancel",
    notify_url: "http://localhost:4200/box/notify"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

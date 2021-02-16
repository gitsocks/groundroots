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
  woocommerce: {
    url: 'https://dev.thinwood.co/groundroots',
    key: "ck_dc736a590e2c4599a097f5590909fe2cf735f69e",
    secret: "cs_027bea2ab728ba2225d2d256b5125347b45303fc",
    version: 'wc/v3'
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

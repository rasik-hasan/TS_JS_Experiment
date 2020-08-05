"use strict";
// //Asynchronous calls
// const first = () => {
//   setTimeout(() => {
//     console.log("first");
//   }, 5000);
// };
// const second = () => {
//   setTimeout(() => {
//     console.log("second");
//   }, 2000);
// };
// const third = () => {
//   setTimeout(() => {
//     console.log("third");
//   }, 4000);
// };
// //calling
// first();
// console.log("first is called");
// second();
// console.log("second is called");
// third();
// console.log("third is called");
// //asynchronous -----------------------------------------------
//callback hell
//Asynchronous calls with callback
//Use Callback functions to do something after an aynchronous job
// const first = (callback: any) => {
//   console.log("first");
//   setTimeout(() => {
//     callback();
//   }, 5000);
// };
// const second = (callback: any) => {
//   console.log("second");
//   setTimeout(() => {
//     callback();
//   }, 2000);
// };
// const third = (callback: any) => {
//   console.log("third");
//   setTimeout(() => {
//     callback();
//   }, 4000);
// };
// //calling
// first(() => {
//   console.log("first's callback");
//   second(() => {
//     console.log("second's callback");
//     third(() => {
//       console.log("final and finish");
//     });
//   });
// });
// //callback finish ----------------------------------
// const anotherPromise = new Promise((resolve) => {
//   console.log("inside promises");
//   setTimeout(() => {
//     console.log("first one");
//   }, 4000);
//   resolve();
// });
// anotherPromise
//   .then(() => {
//     console.log("first then");
//   })
//   .then(() => {
//     console.log("second then");
//   });
// // no special effect. -----------------------------------
// //difference between callbacks and promises - no difference
// const effectivePromise = new Promise((resolve) => {
//   console.log("first");
//   setTimeout(() => {
//     resolve("thirds");
//   }, 2000);
//   console.log("finish");
// });
// effectivePromise.then((result) => {
//   console.log(`then: ${result}`);
//   console.log(`after calling`);
// });
// const callbackA = (callback) => {
//   console.log("first");
//   setTimeout(() => {
//     callback("third");
//   }, 2000);
//   console.log("finish");
// };
// callbackA((sentString: string) => {
//   console.log(`then: ${sentString}`);
//   console.log(`after calling`);
// });
// //difference between callbacks and promises - no difference ----------------
// //still no effect---------------------
// //testing another thing
// const first = () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("first");
//     }, 5000);
//     resolve();
//   });
// const second = () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("second");
//     }, 2000);
//     resolve();
//   });
// const third = () =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("third");
//     }, 4000);
//     resolve();
//   });
// //calling
// first().then(() => {
//   second();
// });
// //no special effect. -------------------------

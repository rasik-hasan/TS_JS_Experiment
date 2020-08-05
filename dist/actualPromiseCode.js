"use strict";
// now promise functionality found.
// settimeout itself cause another thread I think.
//need to resolve within settimeout or else it won't block code exec.
const delay = (t) => {
    return new Promise((resolve) => {
        console.log("firsts");
        setTimeout(() => {
            console.log("waiting 2sec");
            resolve();
        }, t);
    });
};
const logHi = () => {
    setTimeout(() => {
        console.log("loghi");
    }, 1000);
    console.log("hi");
};
//delay(2000).then(logHi);
const prom = new Promise((resolve) => {
    setTimeout(() => {
        console.log("prom wait 5s");
        resolve(5); // without resolve its going to wait here forever
    }, 5000);
});
// prom.then(() => {
//   delay(2000).then(logHi);
// });
prom
    .then((result) => {
    console.log(result);
    return result + 1;
})
    .then((result) => {
    console.log(result);
});
//guessing output:
//prom wait 5 sec
//firsts
//waiting 2 secs
//hi
//loghi

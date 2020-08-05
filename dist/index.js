"use strict";
// now promise found.
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
delay(2000).then(logHi);

"use strict";
//testing another thing
const first = () => new Promise((resolve) => {
    setTimeout(() => {
        console.log("first");
    }, 5000);
    resolve();
});
const second = () => new Promise((resolve) => {
    setTimeout(() => {
        console.log("second");
    }, 2000);
    resolve();
});
const third = () => new Promise((resolve) => {
    setTimeout(() => {
        console.log("third");
    }, 4000);
    resolve();
});
//calling
first().then(() => {
    second();
});
//no special effect.

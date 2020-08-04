"use strict";
//Asynchronous calls with callback
//Use Callback functions to do something after an aynchronous job
const first = (callback) => {
    console.log("first");
    setTimeout(() => {
        callback();
    }, 5000);
};
const second = (callback) => {
    console.log("second");
    setTimeout(() => {
        callback();
    }, 2000);
};
const third = (callback) => {
    console.log("third");
    setTimeout(() => {
        callback();
    }, 4000);
};
//calling
first(() => {
    console.log("first's callback");
    second(() => {
        console.log("second's callback");
        third(() => {
            console.log("final and finish");
        });
    });
});

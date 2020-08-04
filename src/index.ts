//Asynchronous calls with callback
//Use Callback functions to do something after an aynchronous job

const first = (callback: any) => {
  setTimeout(() => {
    callback();
  }, 5000);
};

const second = (callback: any) => {
  setTimeout(() => {
    callback();
  }, 2000);
};

const third = (callback: any) => {
  setTimeout(() => {
    callback("Fuck you");
  }, 4000);
};

//calling
first(() => console.log("first Callback"));
console.log("first is called");

second(() => console.log("second callback"));
console.log("second is called");

third((sentence: string) => console.log(sentence));
console.log("third is called");

const doubleAfter2Seconds = (x: number) => {
  return new Promise((resolve) => {
    console.log("waiting 2s");
    setTimeout(() => {
      resolve(x * 2);
    }, 2000);
  });
};

// doubleAfter2Seconds(20).then((result) => {
//   console.log(result);
// });

const addPromise = (x) => {
  return new Promise((resolve) => {
    doubleAfter2Seconds(10).then((a) => {
      doubleAfter2Seconds(20).then((b) => {
        doubleAfter2Seconds(30).then((c) => {
          resolve(x + a + b + c);
        });
      });
    });
  });
};

addPromise(10).then((sum) => {
  console.log(sum);
});

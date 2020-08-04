const effectivePromise = new Promise((resolve) => {
  console.log("first");

  setTimeout(() => {
    resolve("thirds");
  }, 2000);

  console.log("finish");
});

effectivePromise.then((result) => {
  console.log(`then: ${result}`);
  console.log(`after calling`);
});

const callbackA = (callback) => {
  console.log("first");

  setTimeout(() => {
    callback("third");
  }, 2000);

  console.log("finish");
};

callbackA((sentString: string) => {
  console.log(`then: ${sentString}`);
  console.log(`after calling`);
});

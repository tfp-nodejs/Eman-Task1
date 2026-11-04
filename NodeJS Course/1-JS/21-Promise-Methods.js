// Promise Methods

// - Promise.all()
//  - Waits for all promises to resolve
//  - If any promise rejects, the whole thing rejects
//  - Useful when you need everything to succeed

// - Promise.allSettled()
//  - Waits for all promises to settle (either resolve or reject)
//  - Returns an array of result objects { status: "fulfilled" or "rejected", value or reason }
//  - Useful when you want to know the outcome of every promise

// - Promise.race()
//  - Resolves or rejects as soon as the first promise settles
//  - Useful when you want to use the fastest result

// - Promise.any()
//  - Resolves as soon as any one promise resolves
//  - Ignores rejected promises unless all of them reject
//  - If all reject → returns an AggregateError

const myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I am the first Promise");
  }, 1000);
});

const mySecondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I am the Second Promise");
  }, 2000);
});

const myThirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I am the Third Promise");
  }, 2000);
});

;

Promise.any([myFirstPromise, mySecondPromise, myThirdPromise])
  .then((result) => {
    console.log("result");
    console.log(result);
  })
  .catch((err) => {
    console.log("err");
    console.log(err);
  });

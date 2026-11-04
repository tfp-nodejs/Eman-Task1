const { readFile, writeFile } = require("fs");

// readFile("./content/first.txt", "utf8", (err, firstContent) => {
//   if (err) {
//     console.log("err : " + err);
//     return;
//   }

//   readFile("./content/second.txt", "utf8", (err, secondContent) => {
//     if (err) {
//       console.log("err : " + err);
//       return;
//     }

//     writeFile(
//       "./content/result.txt",
//       `reuslt is: ${firstContent}, ${secondContent}`,
//       (err, value) => {
//         if (err) {
//           return;
//         }
//         console.log("value : " + value);
//       }
//     );
//   });
// });

const readFilePromise = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, value) => {
      if (err) {
        reject(err);
      } else {
        resolve(value);
      }
    });
  });
};

const writeFilePromise = (path, content) => {
  return new Promise((resolve, reject) => {
    writeFile(path, content, (err) => {
      if (err) {
        reject(err);
      }
    });
  });
};

async function start() {
  try {
    const firstC = await readFilePromise("./content/first.txt");
    const secondC = await readFilePromise("./content/second.txt");

    await writeFilePromise(
      "./content/result.txt",
      `async/await: ${firstC}, ${secondC}`
    );
  } catch (err) {}
}

start();

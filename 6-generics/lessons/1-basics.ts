const names: Array<string | number> = [0, "name"];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is done");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});

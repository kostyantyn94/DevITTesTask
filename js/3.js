function bulkRun(tasks) {
  const results = [];
  let promises = [];

  tasks.forEach(([func, args]) => {
    let promise = new Promise((resolve) => {
      func(...args, (result) => {
        results.push(result);
        resolve();
      });
    });
    promises.push(promise);
  });

  return Promise.all(promises).then(() => results);
}

const f1 = (cb) => {
  cb(1);
};
const f2 = (a, cb) => {
  cb(a);
};
const f3 = (a, b, cb) => {
  setTimeout(() => cb([a, b]), 1000);
};

bulkRun([
  [f1, []],
  [f2, [2]],
  [f3, [3, 4]],
]).then(console.log);
// Ожидаемый вывод: [1, 2, [3, 4]]

//next.js hero.ui prisma ORM AuthJS zod bcryptjs
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.myForEach = function (callback, thisArg) {
  if (this == null) {
    throw new Error('Array is null/undefined');
  }
  if (typeof callback !== 'function') {
    throw new Error('Callback is not a function');
  }
  let realObject = Object(this);
  for (let i = 0; i < realObject.length; i++) {
    if (i in realObject) {
      callback.call(thisArg, realObject[i], i, realObject);
    }
  }
};

Array.prototype.myFilter = function (callback, thisArg) {
  if (this == null) {
    throw new Error('Array is null/undefined');
  }
  if (typeof callback !== 'function') {
    throw new Error('Callback is not a function');
  }
  const realObject = Object(this);
  const result = [];
  for (let i = 0; i < realObject.length; i++) {
    if (i in realObject) {
      if (callback.call(thisArg, realObject[i], i, realObject)) {
        result.push(realObject[i]);
      }
    }
  }
  return result;
};

Array.prototype.newFilter = function (callback, thisArg) {
  const result = [];
  for (let i; i < this.length; i++) {
    if (callback(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.myMap = function (callback, thisArg) {
  if (this == null) {
    throw new Error('Array is null/undefined');
  }
  if (typeof callback !== 'function') {
    throw new Error('Callback is not a function');
  }
  const realObject = Object(this);
  const result = [];
  for (let i = 0; i < realObject.length; i++) {
    if (i in realObject) {
      result[i] = callback.call(thisArg, realObject[i], i, realObject);
    }
  }
  return result;
};

Array.prototype.newMap = function (callback, thisArg) {
  if (this == null) {
    throw new Error('Array is null or undefined');
  }
  if (typeof callback !== 'function') {
    throw new Error('Callback is not a function');
  }
  const realObject = Object(this);
  let result = [];
  for (let i = 0; i < realObject.length; i++) {
    if (i in realObject) {
      result[i] = callback.call(thisArg, realObject[i], i, realObject);
    }
  }
  return result;
};

// console.log(
//   [2, 3, 1].newMap(function (item) {
//     return 2 * item;
//   })
// );

Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== 'function') {
    throw new Error('Callback is not a function');
  }
  if (this == null) {
    throw new Error('Array is null or undefined');
  }
  const realObject = Object(this);
  let i = 0;
  if (arguments.length < 2) {
    if (realObject.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    i = 1;
    initialValue = realObject[0];
  }
  for (i; i < realObject.length; i++) {
    if (i in realObject) {
      initialValue = callback(initialValue, realObject[i], i, realObject);
    }
  }
  return initialValue;
};

Array.prototype.newReduce = function (callback, initialValue) {
  let = 0;
  if (arguments.length < 2) {
    if (this.length === 0) {
      throw new Error();
    }
    i = 1;
    initialValue = this[0];
  }

  for (i; i < this.length; i++) {
    initialValue = callback(initialValue, this[i], i, this);
  }
  return initialValue;
};

const products = [
  { id: 1, name: 'apple', category: 'fruit', price: 10 },
  { id: 2, name: 'banana', category: 'fruit', price: 15 },
  { id: 3, name: 'orange', category: 'fruit', price: 12 },
  { id: 4, name: 'carrot', category: 'vegetable', price: 5 },
  { id: 5, name: 'lettuce', category: 'vegetable', price: 8 },
  { id: 6, name: 'milk', category: 'dairy', price: 12 },
  { id: 7, name: 'cheese', category: 'dairy', price: 20 },
];

const testFunc = (arr) => {
  return arr.myReduce((acc, value) => {
    if (value.category in acc) {
      acc[value.category].products.push(value);
      if (value.price > 10) {
        acc[value.category].expensiveTotal += value.price;
      }
    } else {
      acc[value.category] = {
        products: [value],
        expensiveTotal: value.price > 10 ? value.price : 0,
      };
    }
    return acc;
  }, {});
};

//console.log(JSON.stringify(testFunc(products), null, 2));

Promise.myAll = function (promiseArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArray)) {
      return reject(new Error('Error'));
    }
    if (promiseArray.length === 0) {
      return resolve([]);
    }
    const result = [];
    let resolveCount = 0;
    promiseArray.forEach((promise, i) => {
      Promise.resolve(promise)
        .then((value) => {
          result[i] = value;
          resolveCount++;
          if (resolveCount === promiseArray.length) {
            resolve(result);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

Promise.newAll = function (promiseArray) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promiseArray)) {
      return reject(new Error('You need to use Array'));
    }
    if (promiseArray.length === 0) {
      return resolve([]);
    }
    const result = [];
    let resolveCount = 0;
    promiseArray.forEach((p, i) => {
      Promise.resolve(p)
        .then((value) => {
          result[i] = value;
          resolveCount++;
          if (resolveCount === promiseArray.length) {
            resolve(result);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new Error('we need an array'));
    }
    if (promises.length === 0) {
      return reject(new AggregateError([]));
    }
    const resultErrors = [];
    let errorsCount = 0;
    promises.forEach((p, i) => {
      Promise.resolve(p)
        .then(resolve)
        .catch((err) => {
          resultErrors[i] = err;
          errorsCount++;
          if (errorsCount === promises.length) {
            reject(new AggregateError(resultErrors));
          }
        });
    });
  });
};

Promise.myAllSettled = function (promiseArray) {
  return new Promise((resolve, reject) => {
    const result = [];
    let count = 0;
    promiseArray.forEach((p, i) => {
      Promise.resolve(p)
        .then((resolveValue) => {
          result[i] = resolveValue;
        })
        .catch((rejectValuy) => {
          result[i] = rejectValuy;
        })
        .finally(() => {
          count++;
          if (count === promiseArray.length) {
            resolve(result);
          }
        });
    });
  });
};

Promise.myRace = function (promiseArray) {
  return new Promise((resolve, reject) => {
    promiseArray.forEach((p) => {
      Promise.resolve(p).then(resolve, reject);
    });
  });
};

const reverceWords = (str) => {
  return str
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
};

//console.log(reverceWords('Привет меня зовут Дима'));

const stringJoin = (delimiter, ...args) => {
  return args.join(delimiter);
};

//console.log(stringJoin('.', 'a', 'b', 'c'));

async function waitAll(promises) {
  const results = [];

  for (let i = 0; i < promises.length; i++) {
    const res = await promises[i];
    results.push(res);
  }

  return results;
}

async function retry(fn, attempts) {
  let lastError;

  for (let i = 0; i < attempts; i++) {
    try {
      return await fn(); // если успешно — возвращаем результат
    } catch (err) {
      lastError = err; // сохраняем ошибку
      // если это последняя попытка — выбрасываем
      if (i === attempts - 1) {
        throw lastError;
      }
      // иначе продолжаем цикл и пробуем снова
    }
  }
}

function createEventLoop() {
  const microTasksQueue = [];
  const macroTasksQueue = [];
  return {
    microtask(fn) {
      microTasksQueue.push(fn);
    },
    macrotask(fn) {
      macroTasksQueue.push(fn);
    },
    run() {
      while (microTasksQueue.length > 0 || macroTasksQueue.length > 0) {
        while (microTasksQueue.length > 0) {
          const micro = microTasksQueue.shift();
          micro();
        }
        if (macroTasksQueue.length > 0) {
          const macro = macroTasksQueue.shift();
          macro();
        }
      }
    },
  };
}

const loopFunc = (funcs) => {
  Promise.all(funcs);
};

const promise = new Promise((resolve, reject) => {
    
  setTimeout(() => {
    reject("time is up");
  }, 0);

  setTimeout(() => {
    reject("oops");
  }, 0);
});


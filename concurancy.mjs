function doFlexibleStuff(callback) {
  callback();
}

const function1 = () => console.log("Hello1");

const function2 = () => console.log("Hello2");

doFlexibleStuff(function1);

doFlexibleStuff(function2);

/* Revealing Module pattern : It is a variation of the module where all functions are define private first and then
                              only the one you want to expose are returned in a single object - making public/private 
                              separation clearer and consistent
*/
// ES5
var CounterModule = (function () {
  var count = 0;

  function increment() {
    count++;
    logCount();
  }

  function decrement() {
    count--;
    logCount();
  }

  function logCount() {
    console.log("Current count:", count);
  }

  function getCount() {
    return count;
  }

  // Revealing only what is public
  return {
    increment,
    decrement,
    getCount
  };
})();

CounterModule.increment();

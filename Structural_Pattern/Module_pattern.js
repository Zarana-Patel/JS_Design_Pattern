/* Module Pattern - is design pattern that helps structure code into resuable , isolated modules,
 often using closures and IIFE to create private scope */

 var CounterModule =(function(){
    // private variable
    var count = 0;
    function logcount(){
        console.log("current count",count);
    }
    return{
        increment: function(){
            count++;
            logcount();
        },
        decrement: function(){
            count--;
            logcount();
        }

    }
 }
 )();

 CounterModule.increment;
 CounterModule.decrement;
 CounterModule.count; // undefined becuase private variable
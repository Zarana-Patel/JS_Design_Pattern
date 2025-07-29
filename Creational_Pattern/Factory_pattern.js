/*. FACTORY PATTERN : 
    Instead of calling a constructor (new) directly to create an object, 
    the factory pattern uses a function or class (the factory) to create and 
    return different types of objects based on conditions.

    Core Idea : Encapsulate Ojbect creation Logic to avoid direct instantiation of objects 
*/

function CarFactory(type){
    const car = {};
    if(type ==="SUV"){
        Object.assign(car,{type:"SUV",seats:7});
    }
    else{
        Object.assign(car,{type:"sedan",seats:5});
    }
    return car;
    }
    const myCar = CarFactory("SUV");
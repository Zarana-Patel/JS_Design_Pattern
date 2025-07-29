/* It  ensures only  single instance for the class is created and provides global point of access to that instance 
     Share resources  - Logger , database connection , configuration manager */
class Singleton{
    constructor(){
        if(Singleton.instance){
            return Singleton.instance;
        }
        this.timestamp = Date.now();
        Singleton.instance = this;
    }
    getTime(){
        return this.timestamp;
    }
}

const a = new Singleton();
const b = new Singleton();

console.log( a===b);
console.log(a.getTime());
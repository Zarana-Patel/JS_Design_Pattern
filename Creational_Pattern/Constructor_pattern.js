
class Person1{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log("Hello", this.name);
    }
}
const p2 = new Person1("Alicia");
p2.greet();
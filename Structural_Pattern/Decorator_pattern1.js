/* Add Behavior to an Object Dyanamically 
As It name  - Decorate the component by adding feature on top of it.
In React - 
Use HOC - when you want to wrap and modify component behaviour
Use custom hooks when want to share Logic (Logging, form handling)
*/
class Home{
    constructor(){
        this.basePrice = 10000;
    }
    cost(){
        return this.basePrice;
    }
}
function withInterior(home){
    const originalCost = home.cost.bind(home);
    home.cost = function(){
        return originalCost() + 20000;
    }
}
const newHome = new Home();
withInterior(newHome);
console.log("Home Price",newHome.cost());
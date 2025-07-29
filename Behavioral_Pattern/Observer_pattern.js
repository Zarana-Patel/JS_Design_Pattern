/*
Observer Pattern :  Allows Object(observers) to subscribe to and get notified of changes in another Object.
*/

class EventEmitter{
    constructor(){
        this.events = {};
    }
    //subscribe to the event

    subscribe(event,listerner){
        if(!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listerner);
    }
    //unsubscribe to the event
    unsubscribe(event,listernertoRemove){
        if(!this.events[event]) return;
        this.events[event] = this.events[event].filter((listerner) =>listerner !== listernertoRemove);
    }
    //emit to the event
    emit(event,data){
       this.events[event].forEach((listerner)=>listerner(data));
    }
}

const emitter = new EventEmitter();

function subscriber1(data){
    console.log("subscriber1 gets:",data);
}
function subscriber2(data){
    console.log("subscriber2 gets:",data);
}
emitter.subscribe("news",subscriber1);
emitter.subscribe("news",subscriber2);

emitter.emit("news","JS is too good and weird!!");

emitter.unsubscribe("news",subscriber1);

emitter.emit("news","JS is too good and weird and still subscribe to 2!!");
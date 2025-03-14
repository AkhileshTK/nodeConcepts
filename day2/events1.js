import EventEmitter from "events";
let emitter = new EventEmitter()


// this is asynch function which lets event emitt only once
emitter.once("some-event",()=>{
    console.log("this will get executed only once");
    
})


// this gives number of event count
console.log(emitter.listenerCount("some-event"));

emitter.emit(  "some-event")
emitter.emit(  "some-event")


// console.log(emitter.listenerCount("some-event"));

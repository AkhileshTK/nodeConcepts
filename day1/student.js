import EventEmitter from 'events'

class myClass extends EventEmitter{}

let student =new myClass();

//parent
student.on("result",()=>{
    console.log("parents are happy");
    
})

//realtives
student.on("result",()=>{
    console.log("realtives are jelaous");
    
})

//friends
student.on("result",()=>{
    console.log("friends are in shock");
    
})


student.emit("result")
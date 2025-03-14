import EventEmitter from 'events'

class myClass extends EventEmitter{}
let student=new myClass()

//parent
student.on("result",(grade)=>{
    if(grade === "distinction"){
        console.log("parents are happy");    
    }else{
        console.log("parents are sad");
        
    }
})


//friends
student.on("result",(grade)=>{
    if(grade === "distinction"){
        console.log("lets party");    
    }else{
        console.log("lets party");
        
    }
})


//relatives
student.on("result",(grade)=>{
    if(grade === "distinction"){
        console.log("relatives are jealous");    
    }else{
        console.log("relatives are happy");
        
    }
})


student.emit("result","distinction")
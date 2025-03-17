// import fs from 'fs'

// fs.writeFile("demo.txt","gud afternoon",(err)=>{
//     // if(err){
//     //     console.log(err);
        
//     // }else{
//     //     console.log("file written");
        
//     // }

//     if(err)
//         console.log(err);
//     console.log("file written");
    
        
// })



// fs.readFile("./demo.txt","utf-8",(err,data)=>{
//         if(err)
//             console.log(err);
//         console.log(data);
        
            
// })

// fs.appendFile("./demo.txt","\n this is about callback in filesystem",(err)=>{
//     if(err)
//         console.log(err);
//     console.log("append completed");
    
        
// })


// fs.unlink("./demo.txt",(err)=>{
//     if(err)
//         console.log(err);
//     console.log("file deleted");
    
        
// })


// fs.mkdir("demo",(err)=>{
//     if(err)
//         console.log(err);
//     console.log("folder created");
    
        
// })

// fs.rmdir("demo",(err)=>{
//     if(err)
//         console.log(err);
//     console.log("deleted folder");
    
        
// })





// callback hell 

// fs.mkdir("./react-app",(err)=>{
//     fs.mkdir("./react-app/public",(err)=>{
//         fs.mkdir("./react-app/src",(err)=>{
//             fs.mkdir("./react-app/src/components",(err)=>{
//                 fs.writeFile("./react-app/src/components/Home.jsx","",(err)=>{
//                     console.log("happy hacking");
                    
//                 })

//             })
//         })
//     })
// })




// ------------------------------------- promises---------------------------

import fs from 'fs/promises'

// fs.writeFile("./text.txt","hello").then(()=>{
//     console.log("file written");
    
// }).catch((err)=>{
//     console.log(err);
    
// })


//  fs.readFile("./text.txt","utf-8").then((data)=>{
//     console.log(data);
    
//  }).catch((err)=>{
//     console.log(err);
    
//  })


// async function resolvePromise(){
//     try{
//         await fs.writeFile("./text.txt","helllloooo")
//         // console.log(data);
        
//     }
//     catch (err){
//         console.log(err);
        

//     }
// }

// resolvePromise()


// async function resolvePromise(){
//     try{
//         let data = await fs.readFile("./text.txt","utf-8")
//         console.log(data);
        
        
//     }
//     catch (err){
//         console.log(err);
        

//     }
// }

// resolvePromise()


// fs.appendFile("./text.txt","\n promises").then(()=>{
//     console.log("updated");
    
// }).catch((err)=>{
//     console.log(err);
    
// })


// fs.unlink("./text.txt","\n promises").then(()=>{
//     console.log("deleted");
    
// }).catch((err)=>{
//     console.log(err);
    
// })

// fs.mkdir("promises").then(()=>{
//     console.log("folder created");
    
// }).catch((err)=>{
//     console.log(err);
    
// })


fs.rmdir("promises").then(()=>{
    console.log("folder deleted");
    
}).catch((err)=>{
    console.log(err);
    
})
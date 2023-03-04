const fs = require('fs');

// reading through simple text file
// fs.readFileSync('./learn.txt',{encoding:'utf-8',flag:'r'},function(err,fileData){
//     if(err){
//         console.log(err)
//     }else{
//        // console.log(fileData) // buffer result
//        // console.log(fileData.toString())
//        console.log(fileData)
//     }
// })

// reading through simple json file

// fs.readFile('./json/user.json',function(err,jsonData){
//         if(err){
//             console.log(err)
//         }else{
//              const user = JSON.parse(jsonData)
         
//            console.table(user);
//            console.log(user.designation)
//         }
// })
// reading through simple array list of object json file

fs.readFile('./json/users.json',function(err,jsonData){
    if(err){
        console.log(err)
    }else{
         const users = JSON.parse(jsonData)
        for (let index = 0; index < users.length; index++) {
            console.log(users[index].name)     
        }
    }
})
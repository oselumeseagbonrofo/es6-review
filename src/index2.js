import log, { add_two_numbers, appName, dummyFunction, genericFunction, User, multiplier } from "./tools.js";

/*log(22, 2);
log("Hello World!!" + " "+ appName)
log(`Hello World!! From Es6 review ${add_two_numbers(1,1)}, ${dummyFunction()}`);
log(genericFunction())
*/


// Promises
new Promise((resolve, reject) => {
    setTimeout(()=>{
    resolve("Timeout is over"); //send out a success feedback with data using resolve
    }, 1000) //set timeout for 1000ms i.e. 1second.
    }).then((data) => {
    log(`${data}`);//This should output "Timeout is over"
    }).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement.
     log(`${error}`);
     });
let user1 = new User("osel","pass","ose","agbonrofo","male", 1.85);
log(`${user1.firstName} ${user1.lastName} is ${user1.gender}`);

try{
    log(multiplier(1,232,3,1));
}
catch(error){
    log(error)
}


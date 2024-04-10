import log, { add_two_numbers, appName, dummyFunction, genericFunction, User, multiplier } from "./tools.js";

/*log(22, 2);
log("Hello World!!" + " "+ appName)
log(`Hello World!! From Es6 review ${add_two_numbers(1,1)}, ${dummyFunction()}`);
log(genericFunction())
*/

/* multiplier function demonstarting try...catch in js
try{
    log(multiplier(1,3,4));
}
catch(error){
    log(error)
}
*/


// Promises
/*
new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Timeout is over"); //send out a success feedback with data using resolve
    }, 3000) //set timeout for 1000ms i.e. 1second.
    }).then((data) => {
    log(`${data}`);//This should output "Timeout is over"
    }).catch((error) => {//This will only be reached if the asynchronous function returned a reject statement.
     log(`${error}`);
     });
*/

/*
new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject(`Timeout is over but I am upset. You should not have invoked a timeout in the first place. Hence I am
        sending a <em>reject</em> instead of a <em>resolve</em>!`); //send out a reject feedback
    }, 1000)
    }).then((data) => {
    log(`${data}`);//This should output "Timeout is over" if resolve("Timeout is over") is invoked
    }).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement.
    log(`Error message received: ${error}`);
    })

let user1 = new User("osel","pass","ose","agbonrofo","male", 1.85);
log(`${user1.firstName} ${user1.lastName} is ${user1.gender}`);


// promise using variables
let promise3 = new Promise((resolve, reject)=>{
    setTimeout( () =>{ 
        resolve(`My promise with variables`)} ,2000);
});
promise3.then((data) =>{
    log(`${data}`);
}).catch((error) =>{
    log(`${error}`);
}).then(() =>{
    log("No matter what I must run")
});

// using Promise aware functions defined by others (apis?)
let url = 'https://jsonplaceholder.typicode.com/users/1'
fetch(url)
    .then(response => response.json())
    .then(data => log(`Data: id = ${data.id}, Name= ${data.name}, Email=${data.email}, 
    address=${data.address.street}`))
    .catch(error=> log(`Error: ${error}`))


// Using Promise.all() to fetch data from multiple Promise aware asynchronous functions
let fetch1 = fetch('https://jsonplaceholder.typicode.com/users/1').then(response => response.json())
let fetch2 = fetch('https://jsonplaceholder.typicode.com/users/2').then(response => response.json())
let fetch3 = fetch('https://jsonplaceholder.typicode.com/users/3').then(response => response.json())

Promise.all([fetch1, fetch2, fetch3])
.then (data=>{
    log(`User1 = ${data[0].name} User2 = ${data[1].name} User3 = ${data[2].name}`)
})
.catch(error =>  log(`Error: ${error}`));


// Async/Await method of writing promises
const promiseAwareTimeout = (milliseconds=1000) => { //The function expects milliseconds to be passed. If not
    // passed, milliseconds parameter defaults to 1000
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
    resolve(`Timeout of ${milliseconds} milliseconds is over`); //send out a success feedback with data using resolve
    }, milliseconds) //set timeout for passed milliseconds. Defaults to 1000
    });
}

const usePromiseAwareTimeout = async (milliseconds) =>{
    log(`About to call timeout`);
    try{
        log(await promiseAwareTimeout(3000));
    }catch(error){
        log(error);
    };
}

usePromiseAwareTimeout(3000)

// async/ await for using an existing Promise aware function
let usersUrl = 'https://jsonplaceholder.typicode.com/users/';
const getUserById = async (userId) =>{
    let url = usersUrl + userId;
    const response = await fetch(url);
    const data = await response.json();
    log(data.name);
}
getUserById(5)


// process data from async /await function
let usersUrl = 'https://jsonplaceholder.typicode.com/users/';
const getUserById = async (userId) => {
    let url = usersUrl + userId;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
getUserById(5).then(data => {
    log(data.name);
}).catch( error =>{
    log(error)
});

// Async/Await with try...catch
let usersUrl = 'https://jsonplaceholder.typicode.com/users/';
const getUserById = async (UserId) =>{
    let url = usersUrl + UserId;
    try{
        const response = await fetch(url);
        const data = await response.json();

        if (response.status >= 200 && response.status < 300){
            log(data.name)
        }
        else{
            throw Error(response.status)
        }
    }catch(error){
        log(`Error: ${error}`)
    }
}
getUserById(5);


//Async/ Await with Promise all
let usersUrl = 'https://jsonplaceholder.typicode.com/users/';
const getUsersById = async(userId) =>{
    let url = usersUrl + userId
    // let url2 = usersUrl + userId[1]
    // let url3 = usersUrl + userId[length(userId)-1]
    try{
            const response = await fetch(url);
            const data = await response.json();
            if (response.status >= 200 && response.status < 300){
                return data;
            }
            else{
                throw Error (response.status);
            }
    }catch(error){
        return error;
    }
}
Promise.all([getUsersById(0),getUsersById(1),getUsersById(5)])
.then((data) => {
    log(`User1 = ${data[0].name=='Error'?data[0]:data[0].name}; 
    User2 = ${data[1].name}; 
    User5= ${data[2].name}`)
});


// Iterators and Generators
function *waitList(list){
    for(let person of list){
        yield person;
    }
}

let myWaitList = waitList(['Joseph Agbonrofo','Aluya Agbonrofo','Oselumese Agbonrofo']);

let output = `The first yielded value is ${myWaitList.next().value}
The 2nd yielded value is ${myWaitList.next().value}
The last yielded value is ${myWaitList.next().value}
This is what happens when there's no other value ${myWaitList.next().value}`

log(output);
*/

function *waitList(list){
    for (let [index, value] of list.entries()){
        yield `Hi! ${value}. You're number ${index + 1} on the list`
    }
}

let myWaitList = waitList(['Joseph Agbonrofo','Aluya Agbonrofo','Oselumese Agbonrofo']);

let output = `The first yielded value is ${myWaitList.next().value}
The 2nd yielded value is ${myWaitList.next().value}
The last yielded value is ${myWaitList.next().value}
This is what happens when there's no other value ${myWaitList.next().value}`

log(output);
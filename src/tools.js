// export const add_two_numbers = (a,b) =>{
//     return a + b;
// };

export const log = (output) =>{
    console.log(output);
};

export var appName = "Es6 review";

export var dummyFunction = () => {
    return "I am a dummy function"
}

export const genericFunction = () => {
    let languages = ['Python', 'JavaScript', 'Java', 'C#', 'C++']; //this is a list of strings
    //this is a list of 
    let [firstLang, secondLang, ...Otherlanguages] = languages; //assign first element in languages array to firstLang and element to secondLang.
    return `First language is ${firstLang} and the second is ${secondLang}. the others languages are ${Otherlanguages}`
    }

export const User =  class {
    constructor(username, password, firstName, lastName, gender, height){
        this.username = username
        this.password = password
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.height = height
    }
}

export const add_two_numbers = (a,b) =>{
    return a+b;
} 

export const multiplier = (...numbers) =>{
    if (numbers.length < 2){
        throw new Error(`Illegal arguments count.
        Argument should be greater than 1.
        You sent only ${numbers.length} number(s)`);
}
    let product = 1;
    for (let number of numbers){
        product = product * number;
    }
    return product
}

export default log;
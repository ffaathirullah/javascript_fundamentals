/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('IF Statement')
/* coding examples */

var person = {
    name: "Anna",
    age: 19    
}

switch(true){
    case (person.age>17) :
        log(person.name + " sudah dewasa")
    break;
    case (person.age==17) :
        log(person.name + " belum dewasa")
    break;
    default :
        log("Tidak tahu")
}

switch(new Date().getDay()){
    case 2: log("Selasa")
    break;
    default: log("I dont know")
}

// log("statement")
// if (person.age >= 19){
//     log(person.name + " Sudah dewasa")
// }else if(person.age < 19) {
//     log(person.name + "belum dewasa")
// }else{
//     log("Undefied")
// }

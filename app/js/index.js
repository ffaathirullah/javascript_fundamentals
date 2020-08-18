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

if (person.age >= 19){
    log(person.name + " Sudah dewasa")
}else if(person.age < 19) {
    log(person.name + "belum dewasa")
}else{
    log("Undefied")
}

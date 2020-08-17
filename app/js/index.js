/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Funtion')
/* coding examples */

var number = 0;
while(number < 5){
    log(number);
    number +=1
}

var i = 0;
log("selanjutnya");
do{
    i++;
    log(i);
}while(i < 5);

log("selanjutnya");
var person = [
    {name : "Fachrul" , age : 21},
    {name : "Alex", age : 20}
];


for (var i=0; i<=person.length; i++){
    log(person[i].name);
    log(person[i].age);
    log("===========================")
}
/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Funtion')
/* coding examples */


var addition = (2 +2) + 2;	// function addNumbers(n1,n2){
//    var result = n1+n2;
//    return result;
// }


log(addition);	// var hasil = addNumbers(10, 20);
// log(hasil);


function addNumbers(){	var person = {name: "ana", age : 20};
    log("add");	log(Object.keys(person));
}	log(Object.values(person));


log("James Bond".toUpperCase());
log("James Bond".toLowerCase());
log("James Bond".endsWith("bond"));
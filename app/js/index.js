/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Funtion')
/* coding examples */

// function addNumbers(n1,n2){
//    var result = n1+n2;
//    return result;
// }

// var hasil = addNumbers(10, 20);
// log(hasil);

var person = {name: "ana", age : 20};
log(Object.keys(person));
log(Object.values(person));


log("James Bond".toUpperCase());
log("James Bond".toLowerCase());
log("James Bond".endsWith("bond"));


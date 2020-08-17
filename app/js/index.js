/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Title')
/* coding examples */

var name = "Fachrul Faathirullah";
var age = 21.5;
var hasDriverLicence = true;
var empty = undefined;

var person = {
    name : "fachrul faathirullah",
    age : 21.5,
    hasDriverLicence : true,
    empty : undefined,
    dateOfbirth : "01/03/2918",
    address: {
        Negara : "Indonesia",
        Kota : "Bandung",
        postCode: "4025"
    }
};

log(JSON.stringify(person));

log(person.name);
log(person.age);
log(person.hasDriverLicence);
log(person.empty);
log(JSON.stringify(person.address));

log(Object.values(person));
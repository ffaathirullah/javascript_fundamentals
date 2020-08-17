/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Funtion')
/* coding examples */

var addition = (2 +2) + 2;

log(addition);

function addNumbers(){
    log("add");
}

addNumbers();
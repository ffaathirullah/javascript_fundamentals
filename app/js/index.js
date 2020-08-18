/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Comparison')
/* coding examples */

//comparisonn:
log(10==10);
log(10<10);

//logical operator
log(10==10 && 20==20 || 100==100);
log(!(10==20));
log("operator :")
log("holla" == "hello");

if ((10<=20)){
    log("Statement was executed")
}

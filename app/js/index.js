/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Array')
/* coding examples */

var names = ["Alex", "Maria", "Sam"];
log(names);
log(names.length);

for (var i of names){
    log(i);
}

names.forEach(function(i, index, {}){
    log(index + "-" + i);
});
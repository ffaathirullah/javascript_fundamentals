/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
import { map } from 'bluebird';
/* your imports */
logTitle('Callback')
/* coding examples */
// callback adalah function di dalam function
function callbackExample(name, callback){
    log(callback(name));
}

callbackExample("Fachrul", function(name){
    return "Hello " + name;
});

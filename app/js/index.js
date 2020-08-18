/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
import { map } from 'bluebird';
/* your imports */
logTitle('Map || filter || reduce')
/* coding examples */


var mapa = [1, 2, 3, 4, 5].map(function(n){
    return n * 2;
});

log(mapa);

var filter1 = [1, 2, 3, 4, 5, 10 ,20, 100].filter(function(n){
    return n % 2 == 0;
});

log(reduce1)

var reduce1 = [1, 2, 3, 4, 5].reduce(function(accumulator, current){
    return accumulator + current;
});

log(reduce1)
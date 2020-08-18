/* styling */
require('styles/main.scss');
/* js */
import $ from 'jquery';
import { log, logTitle } from 'logger';
/* your imports */
logTitle('Breaks and Continue')
/* coding examples */


log("Break..... :");
var number = 0;
while(number < 5){
    log(number);
    if (number == 2){
        break
    }
    number++;
}

log("Continue..... :");
var angka = 0;
while(angka < 5){
    angka++;

    if(angka < 5){
        continue;
    }
    log(angka);
}


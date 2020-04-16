// change require to es6 import style
import $ from 'jquery';
import './style.scss';

let $num = 0;

function incrementTime() {
  $num += 1;
  $('#main').html(`You've been on this page for ${$num} seconds..`);
}

setInterval(incrementTime, 1000);

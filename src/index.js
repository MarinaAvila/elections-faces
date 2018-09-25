import $ from 'jquery';
import anime from 'animejs'

import './scss/style.scss';

const setup = async () => {
  const data = await $.getJSON('data.json')
  console.log(data.batata)
  $('#header').append(`
    <div class="teste29"></div>
  `)
}

setup();




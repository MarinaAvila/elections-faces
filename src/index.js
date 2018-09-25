import $ from 'jquery';
import anime from 'animejs'

import './scss/style.scss';

const setup = async () => {
  const data = await $.getJSON('data.json')
  const content = $('#content');

  console.log(data.economics.answers.yes)

  content.append(`
    <div class="teste29">${data.economics.question}</div>
    <div class="teste29">${data.economics.answers}</div>

  `)

  data.economics.answers.forEach((answer, index) => {
    content.append(`
      <div>batata</div>
    `)
  })

  data.economics.answers.yes.forEach((yes, index) => {
    content.append(`
      <div>${yes.ciro}</div>
    `)
  })

}

setup();




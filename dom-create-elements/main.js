const aElement = document.createElement('a');
const bodyElement = document.querySelector('body');

const divElementHello = document.querySelector('[data-hello]');

// divElementHello.appendChild(divElement);
divElementHello.insertAdjacentElement('beforebegin', aElement);

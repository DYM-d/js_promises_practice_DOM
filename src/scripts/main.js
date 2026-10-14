'use strict';

const body = document.querySelector('body');

const firstPromise = new Promise((resolve, reject) => {
  document.addEventListener('click', (even) => {
    even.preventDefault();

    if (even.button === 0) {
      clearTimeout(timeoutFirstPromise);
      resolve();
    }
  });

  const timeoutFirstPromise = setTimeout(() => {
    reject(new Error('First promise was rejected'));
  }, 3000);
});

firstPromise
  .then(() => {
    const succes = document.createElement('div');

    succes.setAttribute('class', 'success');
    succes.setAttribute('data-qa', 'notification');
    succes.textContent = 'First promise was resolved';

    body.append(succes);
  })
  .catch(() => {
    const error = document.createElement('div');

    error.setAttribute('class', 'error');
    error.setAttribute('data-qa', 'notification');
    error.textContent = 'First promise was rejected';

    body.append(error);
  });

const secondPromise = new Promise((resolve, reject) => {
  document.addEventListener('mousedown', (even) => {
    if (even.button === 0 || even.button === 2) {
      resolve();
    }
  });
});

secondPromise
  .then(() => {
    const succes = document.createElement('div');

    succes.setAttribute('class', 'success');
    succes.setAttribute('data-qa', 'notification');
    succes.textContent = 'Second promise was resolved';

    body.append(succes);
  })

  .catch(() => {
    const error = document.createElement('div');

    error.setAttribute('class', 'error');
    error.setAttribute('data-qa', 'notification');
    error.textContent = 'Second promise was rejected';

    body.append(error);
  });

const thirdPromise = new Promise((resolve, reject) => {
  let counterLeft = false;
  let counterRight = false;

  document.addEventListener('mousedown', (even) => {
    even.preventDefault();

    if (even.button === 0) {
      counterLeft = true;
    }

    if (even.button === 2) {
      counterRight = true;
    }

    if (counterLeft && counterRight) {
      resolve();
    }
  });
});

thirdPromise
  .then(() => {
    const success = document.createElement('div');

    success.setAttribute('class', 'success');
    success.setAttribute('data-qa', 'notification');
    success.textContent = 'Third promise was resolved';

    body.append(success);
  })

  .catch(() => {
    const error = document.createElement('div');

    error.setAttribute('class', 'error');
    error.setAttribute('data-qa', 'notification');
    error.textContent = 'Third promise was rejected';

    body.append(error);
  });

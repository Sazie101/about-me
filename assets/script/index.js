'use strict';

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function selectById(selector, parent = document) {
    return parent.getElementById(selector);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
    return[...parent.querySelectorAll(selector)];
}

function create(element, parent = document) {
    return parent.createElement(element);
}

function print(...args) {
    console.log(args.join(', '));
}

const projectPage = select('.projectPage');
const aboutMe = select('.aboutMe');
const contactPage = select('.contactPage');
const buttons = selectAll('.info');

buttons.forEach((button) => {
    onEvent('click', button, () => {
        if (button.classList.contains('project')) {
            projectPage.scrollIntoView({ behavior: 'smooth' });
        } else if (button.classList.contains('about')) {
            aboutMe.scrollIntoView({ behavior: 'smooth' });
        } else if (button.classList.contains('contact')) {
            contactPage.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
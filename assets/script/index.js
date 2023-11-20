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
    return [...parent.querySelectorAll(selector)];
}

function create(element, parent = document) {
    return parent.createElement(element);
}

function print(...args) {
    console.log(args.join(', '));
}

const menu = selectById('hamburger');
const navbar = select('.menus');
const projectPage = select('.projectPage');
const aboutMe = select('.about');
const contactPage = select('.contactMe');
const buttons = selectAll('.info');
const scrollToTopBtn = selectById('scrollToTopBtn');
const sections = selectAll('.part');

buttons.forEach((button) => {
    onEvent('click', button, () => {
        if (button.classList.contains('myProject')) {
            projectPage.scrollIntoView({ behavior: 'smooth' });
        } else if (button.classList.contains('aboutMe')) {
            aboutMe.scrollIntoView({ behavior: 'smooth' });
        } else if (button.classList.contains('contact')) {
            contactPage.scrollIntoView({ behavior: 'smooth' });
        }
        navbar.style.display = 'none';
    });
});

onEvent('scroll', window, () => {
    if (window.pageYOffset > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

onEvent('click', scrollToTopBtn, () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

onEvent('click', menu, () => {
    navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
});

function checkWindowWidth() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 911) {
        navbar.style.display = 'none';
    }
}

onEvent('resize', window, () => {
    checkWindowWidth();
});

function checkInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateSections() {
    sections.forEach((section) => {
        if (checkInView(section)) {
            section.classList.add('in-view');
        }
    });
}

onEvent('load', window, animateSections)

onEvent('scroll', document, animateSections);


checkWindowWidth();
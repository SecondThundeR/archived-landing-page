'use strict';
let isShown = true;
function showHideVideo() {
    let video = document.getElementById('videobcg');
    let bg = document.getElementById('typing');
    let text = document.getElementById('text-btn');
    
    if (isShown) {
        video.classList.remove('visible');
        video.classList.add('hidden');
        bg.classList.remove('visible-dark');
        bg.classList.add('hidden-dark');
        text.innerHTML = "Show Video";
        isShown = false;
    } else {
        video.classList.remove('hidden');
        video.classList.add('visible');
        bg.classList.remove('hidden-dark');
        bg.classList.add('visible-dark');
        text.innerHTML = "Hide Video";
        isShown = true;
    }
}

let TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span id="wrap">'+this.txt+'</span>';

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    let elements = document.getElementsByClassName('typewrite');
    for (let i=0; i<elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-type');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};
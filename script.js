'use strict';
let isShown = true;
let div1IsShown = true;

function showHideVideo() {
    let video = document.getElementById('videobcg');
    let text = document.getElementById('showHideBtn');

    if (isShown) {
        isShown = false;
        video.classList.remove('visible');
        video.classList.add('hidden');
        text.innerHTML = "Show Video";
    } else {
        isShown = true;
        video.classList.remove('hidden');
        video.classList.add('visible');
        text.innerHTML = "Hide Video";
    }
}

async function showPlaylistDiv() {
    let container = document.getElementById('hostCont');
    let div1 = document.getElementById('mainCont');
    let div2 = document.getElementById('playCont');
    let divs = [div1, div2];

    if (div1IsShown) {
        div1.classList.remove('visible');
        div1.classList.add('hidden');
        await new Promise(r => setTimeout(r, 160));
        container.insertBefore(divs[1], divs[0]);
        await new Promise(r => setTimeout(r, 160));
        div2.classList.remove('hidden');
        div2.classList.add('visible');
        div1IsShown = false;
    } else {
        div2.classList.remove('visible');
        div2.classList.add('hidden');
        await new Promise(r => setTimeout(r, 160));
        container.insertBefore(divs[0], divs[1]);
        await new Promise(r => setTimeout(r, 160));
        div1.classList.remove('hidden');
        div1.classList.add('visible');
        div1IsShown = true;
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

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

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

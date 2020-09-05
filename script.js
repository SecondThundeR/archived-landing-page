'use strict';
let isVideoShown = true;
let isSecondVidSet = false;
let isDiv1Shown = true;
let isDiv2Shown = false;

function showHideVideo() {
    let video = document.getElementById('videobcg');
    let text = document.getElementById('showHideBtn');
    let body = document.body;

    if (isVideoShown) {
        body.style.animationPlayState = "running";
        video.classList.toggle('visible');
        video.classList.toggle('hidden');
        text.innerHTML = "Show Video";
        isVideoShown = false;
    } else {
        body.style.animationPlayState = "paused";
        video.classList.toggle('hidden');
        video.classList.toggle('visible');
        text.innerHTML = "Hide Video";
        isVideoShown = true;
    }
}

function changeVideo() {
    let videocontainer = document.getElementById('videobcg');
    let videosource = document.getElementById('videosrc');
    let firstvideo = 'assets/1.mp4';
    let secondvideo = 'assets/2.mp4';
    let videobutton = document.getElementById("changeVideoBtn");

    if (isSecondVidSet) {
        isSecondVidSet = false;
        videobutton.addEventListener("click", function(event) {
            videosource.setAttribute('src', firstvideo);
            videocontainer.load();
        }, false);
    } else {
        isSecondVidSet = true;
        videobutton.addEventListener("click", function(event) {
            videosource.setAttribute('src', secondvideo);
            videocontainer.load();
        }, false);
    }
}

async function showPlaylistDiv() {
    let container = document.getElementById('hostCont');
    let div1 = document.getElementById('mainCont');
    let div2 = document.getElementById('playCont');
    let divs = [div1, div2];

    if (isDiv1Shown) {
        div1.classList.remove('visible');
        div1.classList.add('hidden');
        await new Promise(r => setTimeout(r, 250));
        container.insertBefore(divs[1], divs[0]);
        await new Promise(r => setTimeout(r, 25));
        div2.classList.remove('hidden');
        div2.classList.add('visible');
        isDiv1Shown = false;
        isDiv2Shown = true;
    } else {
        div2.classList.remove('visible');
        div2.classList.add('hidden');
        await new Promise(r => setTimeout(r, 250));
        container.insertBefore(divs[0], divs[1]);
        await new Promise(r => setTimeout(r, 25));
        div1.classList.remove('hidden');
        div1.classList.add('visible');
        isDiv1Shown = true;
        isDiv2Shown = false;
    }
}

async function showInfoDiv() {
    let container = document.getElementById('hostCont');
    let div1 = document.getElementById('playCont');
    let div2 = document.getElementById('infoCont');
    let divs = [div1, div2];

    if (isDiv2Shown) {
        div1.classList.remove('visible');
        div1.classList.add('hidden');
        await new Promise(r => setTimeout(r, 250));
        container.insertBefore(divs[1], divs[0]);
        await new Promise(r => setTimeout(r, 25));
        div2.classList.remove('hidden');
        div2.classList.add('visible');
        isDiv2Shown = false;
    } else {
        div2.classList.remove('visible');
        div2.classList.add('hidden');
        await new Promise(r => setTimeout(r, 250));
        container.insertBefore(divs[0], divs[1]);
        await new Promise(r => setTimeout(r, 25));
        div1.classList.remove('hidden');
        div1.classList.add('visible');
        isDiv2Shown = true;
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
    let body = document.body;
    body.style.animationPlayState = "paused";
    let elements = document.getElementsByClassName('typewrite');
    for (let i=0; i<elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-type');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
};

'use strict';
let isVideoShown = true;
let isSecondVidSet = false;
let isDiv1Shown = true;
let isDiv2Shown = false;

function showHideVideo() {
  let videocontainer = document.getElementById('videobcg');
  let text = document.getElementById('showHideBtn');

  if (isVideoShown) {
    videocontainer.pause();
    videocontainer.classList.toggle('visible');
    videocontainer.classList.toggle('hidden');
    text.innerHTML = "Показать видео";
    isVideoShown = false;
  } else {
    videocontainer.play();
    videocontainer.classList.toggle('hidden');
    videocontainer.classList.toggle('visible');
    text.innerHTML = "Скрыть видео";
    isVideoShown = true;
  }
}

function changeVideo() {
  let videocontainer = document.getElementById('videobcg');
  var sources = videocontainer.getElementsByTagName('source');
  let firstvideo = '../assets/1.mp4';
  let secondvideo = '../assets/2.mp4';

  if (isSecondVidSet) {
    isSecondVidSet = false;
    sources[0].src = firstvideo;
    sources[1].src = secondvideo;
    videocontainer.load();
  } else {
    isSecondVidSet = true;
    sources[0].src = secondvideo;
    sources[1].src = firstvideo;
    videocontainer.load();
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

'use strict'
let isDiv1Shown = true;

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

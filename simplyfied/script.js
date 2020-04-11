'use strict';
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function switchTheme() {
    let text = document.getElementById('themeButton');

    if (localStorage.getItem('theme') === 'theme-light'){
       setTheme('theme-dark');
       text.innerHTML = "Turn Light Mode";
    } else {
        setTheme('theme-light');
        text.innerHTML = "Turn Dark Mode";
    }
}

(function () {
   if (localStorage.getItem('theme') === 'theme-light') {
       setTheme('theme-light');
   } else {
       setTheme('theme-dark');
   }
})();

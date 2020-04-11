'use strict';
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function switchTheme() {
    let text = document.getElementById('themeButton');

    if (localStorage.getItem('theme') === 'theme-dark'){
       setTheme('theme-light');
       text.innerHTML = "Turn Dark Mode";
    } else {
        setTheme('theme-dark');
        text.innerHTML = "Turn Light Mode";
    }
}

(function () {
   if (localStorage.getItem('theme') === 'theme-dark') {
       setTheme('theme-dark');
   } else {
       setTheme('theme-light');
   }
})();

// Change favicons depending on current theme
function changeFavicons() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.querySelector("link[rel='apple-touch-icon']").setAttribute("href", "favicons/404/dark/apple-touch-icon.png");
        document.querySelector("link[sizes='32x32']").setAttribute("href", "favicons/404/dark/favicon-32x32.png");
        document.querySelector("link[sizes='16x16']").setAttribute("href", "favicons/404/dark/favicon-16x16.png");
        document.querySelector("link[rel='manifest']").setAttribute("href", "favicons/404/dark/site.webmanifest");
        document.querySelector("link[rel='mask-icon']").setAttribute("href", "favicons/404/dark/safari-pinned-tab.svg");
        document.querySelector('link[rel="mask-icon"]').setAttribute("color", "#e6739f");
        document.querySelector("link[rel='shortcut icon']").setAttribute("href", "favicons/404/dark/favicon.ico");
        document.querySelector('meta[name="msapplication-TileColor"]').setAttribute("content", "#e6739f");
        document.querySelector('meta[name="msapplication-config"]').setAttribute("content", "favicons/404/dark/browserconfig.xml");
    }
    else {
        document.querySelector("link[rel='apple-touch-icon']").setAttribute("href", "favicons/404/light/apple-touch-icon.png");
        document.querySelector("link[sizes='32x32']").setAttribute("href", "favicons/404/light/favicon-32x32.png");
        document.querySelector("link[sizes='16x16']").setAttribute("href", "favicons/404/light/favicon-16x16.png");
        document.querySelector("link[rel='manifest']").setAttribute("href", "favicons/404/light/site.webmanifest");
        document.querySelector("link[rel='mask-icon']").setAttribute("href", "favicons/404/light/safari-pinned-tab.svg");
        document.querySelector('link[rel="mask-icon"]').setAttribute("color", "#b91d47");
        document.querySelector("link[rel='shortcut icon']").setAttribute("href", "favicons/404/light/favicon.ico");
        document.querySelector('meta[name="msapplication-TileColor"]').setAttribute("content", "#b91d47");
        document.querySelector('meta[name="msapplication-config"]').setAttribute("content", "favicons/404/light/browserconfig.xml");
    }
}

// Event listener for theme switch. Control favicons change
window.matchMedia(`(prefers-color-scheme: dark)`).addEventListener('change', event => {
    changeFavicons();
    if (!event.matches) {
        console.info("Favicons have been successfully replaced with a light version");
    }
    else {
        console.info("Favicons have been successfully replaced with a dark version");
    }
})

// Onload function. Execute favicons change, set hostCont styles and set opacity of elements of main container to 1
window.onload = function () {
    changeFavicons();
    document.getElementById("mainCont-elements").style.opacity = "1";
}

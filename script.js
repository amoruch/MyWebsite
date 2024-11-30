function isVisible(elem) {
    let coords = elem.getBoundingClientRect();
    let windowHeight = window.screen.height;

    let Visible = coords.top < windowHeight;

    return Visible;
}

function f() {
    a = document.getElementById('target')
    if (isVisible(a)) {
        for (let elem of document.getElementsByTagName('li')) {
            elem.style.animationPlayState = 'running';
        }
        document.getElementById('projects').style.animationPlayState = 'running';
    }
}

f();
window.onscroll = f;
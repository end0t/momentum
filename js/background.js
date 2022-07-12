const main = document.querySelector('.main');

function resizeHanler() {
    let imgWidth = window.innerWidth;
    let imgHeight = window.innerHeight;
    main.style.backgroundImage = `url(http://placeimg.com/${imgWidth}/${imgHeight}/any)`;
    console.log(main);
}

window.addEventListener("resize", resizeHanler);

setTimeout()


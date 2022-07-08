const clock = document.querySelector("#clock");

function clockHandle() {
    const toDate = new Date();
    const dateHour = String(toDate.getHours()).padStart(2, "0");
    const dateMinutes = String(toDate.getMinutes()).padStart(2, "0");
    const dateSeconds = String(toDate.getSeconds()).padStart(2, "0");
    clock.innerText = ` ${dateHour}:${dateMinutes}:${dateSeconds}`
}
clockHandle();
setInterval(clockHandle,1000);

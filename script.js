let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let released = document.querySelector('.released');
let updown = document.querySelector('.updown');

start.addEventListener('click',()=>{
    document.addEventListener('keydown',handleDown);
    document.addEventListener('keyup',handleUp)
})

stop.addEventListener('click',()=>{
    document.removeEventListener('keydown',handleDown);
    document.removeEventListener('keyup',handleUp);
    released.innerHTML = "";
    updown.innerHTML = "";
})


function handleDown(e){
    released.innerHTML = `<p>key ${e.key} is pressed</p>`;
    updown.innerHTML = `<p>key ${e.key} is down</p>`
}


function handleUp(e){
    released.innerHTML = `<p>key ${e.key} is released</p>`;
    updown.innerHTML = `<p>key ${e.key} is up</p>`
}
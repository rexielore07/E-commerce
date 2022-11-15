const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

let span = document.getElementsByTagName('span');
let bannerr = document.getElementsByClassName('bannerr');
let blackqoute = document.querySelector('blockquote');
let index = 0;

span[1].onclick = ()=>{
    if (index == bannerr.length -1) {
        index = 0;
    }
    else{
        index++;
    }
    show_bannerr();
    pas();
    resetAutoDisplay();


}
span[0].onclick = ()=>{
    if (index == 0) {
        index = bannerr.length -1;
    }
    else{
        index--;
    }
    show_bannerr();
    left_bannerr();
    pas();
    resetAutoDisplay();


}

function show_bannerr(){
    for(let i=0; i<bannerr.length; i++)
    {
        bannerr[i].classList.remove('activee');
    }
    bannerr[index].classList.add('activee');
}

let left_bannerr = ()=>{
    for(let i=0; i<bannerr.length; i++)
    {
        bannerr[i].classList.remove('left');
    }
    bannerr[index].classList.add('left');
}

// create dots
function createEle(){
for(let i=0; i<bannerr.length; i++){
    let p = document.createElement('p');
    p.setAttribute('onclick', 'indicate(this)');
    p.id = i;
    if (i==0)
    {
        p.className = 'actual';
    }
    blackqoute.appendChild(p);
    }
}
createEle();

function pas() {
    for(let i=0; i<blackqoute.children.length; i++) {
        blackqoute.children[i].classList.remove('actual');
    }
    blackqoute.children[index].classList.add('actual');
    }

    function indicate(element){
        index = element.id;
        show_bannerr();
        pas();
    }

    // auto play 
    function autoDisplay() {
        span[1].click();
    }
    let x = setInterval(autoDisplay, 5000);

    function resetAutoDisplay(){
        clearInterval(x); 
        x = setInterval(autoDisplay, 5000);
    }


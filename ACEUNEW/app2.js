let sliderWrap2 = document.querySelector('.slider-wrap2');
let slider2 = document.querySelector('.slider2');
let clonesWidth2;
let sliderWidth2;
let clones2 = [];
let scrollPos2 =1
let sliderHover2 = false;
let req2; // request animation frame reference
let items2 = [...document.querySelectorAll('.slider-item2')];
let images2 = [...document.querySelectorAll('.img-div2')];


images2.forEach((image, idx) => {
    image.style.backgroundImage = `url(./pics3/${idx+1}.jpg)`
})

items2.forEach(item => {
    let clone = item.cloneNode(true);
    clone.classList.add('clone');
    slider2.appendChild(clone);
    clones2.push(clone);
})

sliderWrap2.addEventListener('mouseover', () =>{
    sliderHover2 = true;
})

sliderWrap2.addEventListener('mouseleave', () =>{
    sliderHover2 = false;
})

function getClonesWidth(){
    let width = 0;
    clones2.forEach(clone => {
        width += clone.offsetWidth;
    })
    return width;
}


function scrollUpdate(){
    if(window.innerWidth > 760){
        sliderWrap2.style.overflow = 'hidden';
        if(!sliderHover2){
            scrollPos2 -= .2
        }

        if(clonesWidth2 + scrollPos2 >= sliderWidth2){
            
            scrollPos2 = 1;
        }else if(scrollPos2 <= 0){
            
            scrollPos2 = sliderWidth2 - clonesWidth2 - 1
        }
        slider2.style.transform = `translateX(${-scrollPos2}px)`

        req2 = requestAnimationFrame(scrollUpdate)
    }else{
        sliderWrap2.style.overflow = 'scroll';
    }

}


function onLoad(){

    calaculateDimensions()
    scrollPos2 = 1;
    scrollUpdate();
}

function calaculateDimensions(){

    sliderWidth2 = slider2.getBoundingClientRect().width;
    clonesWidth2 = getClonesWidth();
}

onLoad()
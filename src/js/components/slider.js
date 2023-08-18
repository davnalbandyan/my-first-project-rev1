function sliderModule (){
   
const slider =document.querySelector(".offer__slider");

const slides=document.querySelectorAll(".offer__slide");
const prev=document.querySelector(".offer__slider-prev");
const next=document.querySelector(".offer__slider-next");
const current = document.querySelector("#current");
const total = document.querySelector("#total");
const slidesWrapper=document.querySelector(".offer__slider-wrapper");
const slidesInner=document.querySelector(".offer__slider-inner");
const width = window.getComputedStyle(slidesWrapper).width;



let slideIndex = 1;
let offset = 0;

function useWithAll(){
  if(slides.length < 10 ){
    total.textContent = `0${slides.length} `
    current.textContent = `0${slideIndex} `
  }else{
    total.textContent =  slides.length
    current.textContent = slideIndex;
  }
}
function timesHundred(){
  if (offset === parseFloat(width.slice(0, width.length - 2)) * (slides.length - 1)) {
    offset = 0;
  } else {
    offset += parseFloat(width.slice(0, width.length - 2));
  }
}




  
  useWithAll()
  slidesInner.style.cssText = `
  display: flex;
  width: ${100 * slides.length}%;
  transition: all .5s;
`;
slidesWrapper.style.overflow = "hidden";
slider.style.position = "relative";
const dots = [];
const dotsWrapper = document.createElement("ul");
dotsWrapper.style.cssText = `
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 15;
  display: flex;
  justify-content: center;
  margin-left: 15%;
  margin-right: 15%;
  list-style: none;
`;
slider.append(dotsWrapper);
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("li");
  dot.setAttribute("data-slide-to", i + 1);
  dot.style.cssText = `
    box-sizing: content-box;
    flex: 0 1 auto;
    width: 30px;
    height: 6px;
    margin-left: 3px;
    margin-right: 3px;
    cursor: pointer;
    background-color: #fff;
    background-clip: padding-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    opacity: .5;
    transition: opacity .5s;
  `;
  if (i === 0) {
    dot.style.opacity = 1;
  }
  dotsWrapper.append(dot);
  dots.push(dot);
  
}


function nextOne(){
  next.addEventListener("click", () => {  
    timesHundred()
    slidesInner.style.transform = `translateX(-${offset}px)`;
  
    if (slideIndex === slides.length || slideIndex >= slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }
    function dots(){
      dots.forEach(dot => dot.style.opacity = 0.5);
      dots[slideIndex - 1].style.opacity = 1;
    }
   
    useWithAll()
     dots()
})}
nextOne()


function prevBack(){
  prev.addEventListener("click", () => {
  
    timesHundred()
    
    slidesInner.style.transform = `translateX(-${offset}px)`;
  
    if (slideIndex === 1 || slideIndex <= 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }
  
    useWithAll()
     dots()
    
  });
}
prevBack()

dots.forEach(dot => {
  dot.addEventListener("click", (e) =>{
    const slideTo = e.target.getAttribute("data-slide-to");
    slideIndex = slideTo;
    offset = parseFloat(width.slice(0, width.length - 2)) * (slideTo - 1)
    slidesInner.style.transform = `translateX(-${offset}px)`;
    useWithAll()
    dots()
  })
})


}

// module.exports = sliderModule;

export default sliderModule;
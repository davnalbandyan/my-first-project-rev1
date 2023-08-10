"use strict";

window.addEventListener("load", () => {
  //tab logic start
  const tabHeaders = document.querySelectorAll(".tabheader__item");
  const tabContents = document.querySelectorAll(".tabcontent");
  const tabsParent = document.querySelector(".tabheader__items");

  function hide() {
    tabContents.forEach((tabcontenct) => {
      tabcontenct.classList.add("hide");
      tabcontenct.classList.remove("show", "fade");
    });
    tabHeaders.forEach((tabheader) =>
      tabheader.classList.remove("tabheader__item_active")
    );
  }

  function show(i = 2) {
    tabContents[i].classList.add("show", "fade");
    tabContents[i].classList.remove("hide");
    tabHeaders[i].classList.add("tabheader__item_active");
  }

  hide();
  show();

  tabsParent.addEventListener("click", (e) => {
    if (e.target && e.target.matches(".tabheader__item")) {
      tabHeaders.forEach((item, index) => {
        if (e.target === item) {
          hide();
          show(index);
        }
      });
    }
  });
  //tab logic end

  //timer logic start
  const date = "2023-09-01";
  function getTimeRemaining(end) {
    const total = Date.parse(end) - Date.parse(new Date());
    const days = Math.floor(
      total / (1000 * 60 * 60 * 24)
    ); /* get the days quantity*/
    const hours = Math.floor(
      (total / (1000 * 60 * 60)) % 24
    ); /*get the hours quantity*/
    const min = Math.floor((total / 1000 / 60) % 60); /* get the min quantity*/
    const seconds = Math.floor((total / 1000) % 60); /* get the sec quantity*/

    return {
      total,
      days,
      hours,
      min,
      seconds,
    };
  }
  function setClock(selector, ending) {
    const timer = document.querySelector(selector);
    const daysBlock = timer.querySelector("#days");
    const hoursBlock = timer.querySelector("#hours");
    const minutesBlock = timer.querySelector("#minutes");
    const secondsBlock = timer.querySelector("#seconds");
    const timerID = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const time = getTimeRemaining(ending); /*ask to Sammi ending ի պահ ը)*/

      daysBlock.textContent =
        time.days >= 0 && time.days < 10 ? `0${time.days}` : time.days;
      hoursBlock.textContent =
        time.hours >= 0 && time.hours < 10 ? `0${time.hours}` : time.hours;
      minutesBlock.textContent =
        time.min >= 0 && time.minutes < 10 ? `0${time.min}` : time.min;
      secondsBlock.textContent =
        time.seconds > 0 && time.seconds < 10
          ? `0${time.seconds}`
          : time.seconds;

      if (time.total <= 0) {
        clearInterval(timerID);
      }
    }
  }

  setClock(".timer", date);
  //timer logic end


  //modal start
  const modalTrig = document.querySelectorAll("[data-modal]");
  const modal = document.querySelector(".modal");
  const modalClose = document.querySelector("[data-close]");

  modalTrig.forEach((item) => {
    item.addEventListener("click", open);

    modalClose.addEventListener("click", close);

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        close();
      }
    });
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.matches(".show")) {
      close();
    }
  });

  function showMod() {
    if (window.scrollY >= 1000) {
      open();
      window.removeEventListener("scroll", showMod);
    }
  }
  window.addEventListener("scroll", showMod);
  function open() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
  }

  function close() {
    modal.classList.remove("show");
    modal.classList.add("hide");
    document.body.removeAttribute("style");
  }

  //modal end

 
//used class for menu card start
axios.get("http://localhost:8888/menu")
.then(request=>creatMenuCards(request.data))
  // getData("http://localhost:8888/menu")
  // 
  
  function creatMenuCards(data){
    data.forEach(({img,altimg,title,descr,price})=>{
      const element=document.createElement("div");
      element.classList.add("menu__item");
      const transfer=27.59;
     function changetoUAH(){
        price = (parseFloat(price) * parseFloat(transfer)).toFixed(2)
      }
      changetoUAH()
      element.innerHTML=`
        <img src=${img} alt=${altimg} />
        <h3 class="menu__item-subtitle">${title}</h3>
        <div class="menu__item-descr"> ${descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${price}</span> грн/день</div>
        </div>
      `
      document.querySelector(".menu .container").append(element);
    });
    
  };
  
  //used class for menu card end
// forms part start
  const forms = document.querySelectorAll("form");
  

  function spin() {
    return ` 
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<path fill="none" stroke="#e90c59" stroke-width="8" stroke-dasharray="42.76482137044271 42.76482137044271" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" stroke-linecap="round" style="transform:scale(0.8);transform-origin:50px 50px">
  <animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0;256.58892822265625"/>
</path>
<!-- [ldio] generated by https://loading.io/ --></svg>
    `;
  }

  const messages = {
    loading: spin,
    success: "Thank you",
    fail: "Sorry something went wrong",
  };

  forms.forEach((form) => bindpostData(form));

//   async function postData(url, data) {
//     const request = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Contnet-type": "application/json; charset=utf-8"
//       },
//       body: data
//     })
    
//     //----------------------------//
// if(!request.ok){
//   throw new Error()
// }
//     //----------------------------//
//     return await request.json();

    

//   }

  async function getData(url){
    const request= await fetch(url);
    if(!request.ok){
      throw new Error()
    }
    return await request.json();
  }

  function bindpostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const { loading, success, fail } = messages;

      const loader = document.createElement("div");
      loader.innerHTML = spin();
      form.append(loader);

      if (!navigator.onLine) {
        massageModal(fail + ": Connection lost! ");
        loader.remove();
        form.reset();
      }
      const empty = /^$/g;
			const phone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
			let status = false

			for (let i = 0; i < form.querySelectorAll("input").length; i++) {
				if (empty.test(form[i].value) || !phone.test(form[1].value)) {
					status = false;
					massageModal("Please fill all fields. On phone filed please fill telephone number format");
					loader.remove();
					form.reset();
					break;
				} else {
					status = true;
				}
			}

      if(status){
        const formData = new FormData(form);

      // const data = JSON.stringify(Object.fromEntries(formData.entries()));
      
  
      // postData("http://localhost:8888/requests", data)
        axios.post("http://localhost:8888/requests",Object.fromEntries(formData.entries()))
        .then((data) => {
          console.log(data);
          massageModal(success);
        })
        .catch((error) => {
          massageModal(fail + ": " + error);
        })
        .finally(() => {
          loader.remove();
          form.reset();
        });
       
      }else{
        console.log("status is falsed");
      }

		
      

     

      // const formData = new FormData(form);

      // // const data = JSON.stringify(Object.fromEntries(formData.entries()));
      
  
      // // postData("http://localhost:8888/requests", data)
      //   axios.post("http://localhost:8888/requests",Object.fromEntries(formData.entries()))
      //   .then((data) => {
      //     console.log(data);
      //     massageModal(success);
      //   })
      //   .catch((error) => {
      //     massageModal(fail + ": " + error);
      //   })
      //   .finally(() => {
      //     loader.remove();
      //     form.reset();
      //   });
       

      // request.addEventListener("load", () => {
      //   if (request.status === 200) {
      //     console.log(request.response);
      //     massageModal(success);
      //     loader.remove();
      //     form.reset();
      //   } else {
      //     console.error("Error");
      //     massageModal(fail);
      //     loader.remove();
      //     form.reset();
      //   }
      // });
    });
  }

  function massageModal(message) {
    const prevModal = document.querySelector(".modal__dialog");
    prevModal.classList.add("hide");
    open();

    const mesModal = document.createElement("div");
    mesModal.classList.add(".modal__dialog");
    mesModal.innerHTML = `
    <div class="modal__content">
    <div  data-close class=modal__close></div>
    <div class="modal__title">${message}</div>
    </div>
    `;

    document.querySelector(".modal").append(mesModal);
    setTimeout(() => {
      mesModal.remove();
      prevModal.classList.add("show");
      prevModal.classList.remove("hide");
      close();
    }, 2000);
  }
  
//forms part end

// slider part start
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












//slider part end
});

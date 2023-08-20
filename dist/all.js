/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/JS/components/calculation.js":
/*!******************************************!*\
  !*** ./src/JS/components/calculation.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calculating (){
    

const result = document.querySelector(".calculating__result span");
	let gender, height, weight, age, ratio;

	function initStartSettings (key, value, variable) {
		if (localStorage.getItem(key)) {
			variable = localStorage.getItem(key);
		} else {
			variable = value;
			localStorage.setItem(key, value);
		}
	}

	initStartSettings("gender", "female", gender);
	initStartSettings("ratio", 1.375, ratio);

	// if (localStorage.getItem("gender")) {
	// 	gender = localStorage.getItem("gender");
	// } else {
	// 	gender = "female";
	// 	localStorage.setItem("gender", "female");
	// }

	// if (localStorage.getItem("ratio")) {
	// 	ratio = localStorage.getItem("ratio");
	// } else {
	// 	ratio = 1.375;
	// 	localStorage.setItem("ratio", 1.375);
	// }

	function calcTotal () {
		if (!gender || !height || !weight || !age || !ratio) {
			result.textContent = "_____";
			return;
		}

		if (gender === "female") {
			result.textContent = Math.round(((10 * weight) + (6.25 * height) - (5 * age) - 161) * ratio);
		} else if (gender === "male") {
			result.textContent = Math.round(((10 * weight) + (6.25 * height) - (5 * age) + 5) * ratio);
		} else {
			result.textContent = "_____";
		}
	}

	calcTotal();

	function initLocalSettings(selector, activeClass) {
		const elements = document.querySelectorAll(selector);

		elements.forEach(elem => {
			elem.classList.remove(activeClass);

			if (elem.getAttribute("id") === localStorage.getItem("gender")) {
				elem.classList.add(activeClass);
			}

			if (elem.dataset.ratio === localStorage.getItem("ratio")) {
				elem.classList.add(activeClass);
			}
		});
	}

	initLocalSettings("#gender div", "calculating__choose-item_active");
	initLocalSettings(".calculating__choose_big div", "calculating__choose-item_active");

	function getStaticInformation(selector, activeClass) {
		const elements = document.querySelectorAll(selector);

		elements.forEach(elem => {
			elem.addEventListener("click", (e) => {
				if (e.target.dataset.ratio) {
					ratio = parseFloat(e.target.dataset.ratio);
					localStorage.setItem("ratio", parseFloat(e.target.dataset.ratio));
				} else {
					gender = e.target.getAttribute("id");
					localStorage.setItem("gender", e.target.getAttribute("id"));
				}

				elements.forEach(elem => elem.classList.remove(activeClass));
				e.target.classList.add(activeClass);
				calcTotal();
			});
		});
	}

	getStaticInformation("#gender div", "calculating__choose-item_active");
	getStaticInformation(".calculating__choose_big div", "calculating__choose-item_active");

	function getDynamicInformation (selector) {
		const input = document.querySelector(selector);

		input.addEventListener("input", () => {
			const val = input.value;

			if (val.match(/\D/g)) {
				input.style.border = "1px solid red";
				
				const timerID = setTimeout(() => {
					input.value = "";
					input.removeAttribute("style");
					clearTimeout(timerID);
				}, 200);
			}

			switch(input.getAttribute("id")) {
				case "height":
					height = parseFloat(val);
					break;
				case "weight":
					weight = parseFloat(val);
					break;
				case "age":
					age = parseFloat(val);
					break;
			}

			calcTotal();
		});
	}

	getDynamicInformation("#height");
	getDynamicInformation("#weight");
	getDynamicInformation("#age");

}

// module.exports = calculating;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculating);

/***/ }),

/***/ "./src/JS/components/forms.js":
/*!************************************!*\
  !*** ./src/JS/components/forms.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/JS/components/modal.js");
const spin = __webpack_require__(/*! ./sppiner */ "./src/JS/components/sppiner.js");


function formsModule (){
    const forms = document.querySelectorAll("form");
  

   
  
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
  
        
      });
    };
  
    
    
  
    function massageModal(message) {
      const prevModal = document.querySelector(".modal__dialog");
      const modal = document.querySelector(".modal");
      prevModal.classList.add("hide");
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.open)(modal);
  
      const mesModal = document.createElement("div");
      mesModal.classList.add(".modal__dialog");
      mesModal.innerHTML = `
      <div class="modal__content">
      <div  data-close class=modal__close></div>
      <div class="modal__title">${message}</div>
      </div>
      `;
  
      modal.append(mesModal);
      setTimeout(() => {
        mesModal.remove();
        prevModal.classList.add("show");
        prevModal.classList.remove("hide");
        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.close)(modal);
      }, 2000);
    }
}

// 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formsModule);

/***/ }),

/***/ "./src/JS/components/menuCard.js":
/*!***************************************!*\
  !*** ./src/JS/components/menuCard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menuCardModule (){
    
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
  
 
}

// module.exports = menuCardModule;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuCardModule);

/***/ }),

/***/ "./src/JS/components/modal.js":
/*!************************************!*\
  !*** ./src/JS/components/modal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   close: () => (/* binding */ close),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   open: () => (/* binding */ open)
/* harmony export */ });
function open(modal) {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
}

function close(modal) {
  modal.classList.remove("show");
  modal.classList.add("hide");
  document.body.removeAttribute("style");
}

function modalMudul (){
   
   const modalTrig = document.querySelectorAll("[data-modal]");
   const modal = document.querySelector(".modal");
   const modalClose = document.querySelector("[data-close]");
 
   modalTrig.forEach((item) => {
     item.addEventListener("click",()=> open(modal));
 
     modalClose.addEventListener("click", close);
 
     modal.addEventListener("click", (e) => {
       if (e.target === modal) {
         close(modal);
       }
     });
   });
   window.addEventListener("keydown", (e) => {
     if (e.key === "Escape" && modal.matches(".show")) {
       close(modal);
     }
   });
 
   function showMod() {
     if (window.scrollY >= 1000) {
       open(modal);
       window.removeEventListener("scroll", showMod);
     }
   }
   window.addEventListener("scroll", showMod);
 
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalMudul);

/***/ }),

/***/ "./src/JS/components/slider.js":
/*!*************************************!*\
  !*** ./src/JS/components/slider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderModule);

/***/ }),

/***/ "./src/JS/components/sppiner.js":
/*!**************************************!*\
  !*** ./src/JS/components/sppiner.js ***!
  \**************************************/
/***/ ((module) => {

function spin() {
    return ` 
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<path fill="none" stroke="#e90c59" stroke-width="8" stroke-dasharray="42.76482137044271 42.76482137044271" d="M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z" stroke-linecap="round" style="transform:scale(0.8);transform-origin:50px 50px">
  <animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0;256.58892822265625"/>
</path>
<!-- [ldio] generated by https://loading.io/ --></svg>
    `;
  }

  module.exports = spin;

  

/***/ }),

/***/ "./src/JS/components/tab.js":
/*!**********************************!*\
  !*** ./src/JS/components/tab.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabModule () {
   
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
  
}

// module.exports = tabModule;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabModule);

/***/ }),

/***/ "./src/JS/components/timer.js":
/*!************************************!*\
  !*** ./src/JS/components/timer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timerModule(){
  
  const date = "2023-12-31";
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

}

// module.exports = timerModule;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timerModule);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/JS/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/tab */ "./src/JS/components/tab.js");
/* harmony import */ var _components_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/timer */ "./src/JS/components/timer.js");
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modal */ "./src/JS/components/modal.js");
/* harmony import */ var _components_menuCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/menuCard */ "./src/JS/components/menuCard.js");
/* harmony import */ var _components_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/forms */ "./src/JS/components/forms.js");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/slider */ "./src/JS/components/slider.js");
/* harmony import */ var _components_calculation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/calculation */ "./src/JS/components/calculation.js");













window.addEventListener("load", () => {
// const tabModule = require("./components/tab");
// const timerModule = require("./components/timer");
// const modalModule = require("./components/modal");
// const menuCardModule = require("./components/menuCard");
// const formsModule = require("./components/forms");
// const sliderModule = require("./components/slider")
// const calcucationModule = require("./components/calculation")

(0,_components_tab__WEBPACK_IMPORTED_MODULE_0__["default"])()
;(0,_components_timer__WEBPACK_IMPORTED_MODULE_1__["default"])()
;(0,_components_modal__WEBPACK_IMPORTED_MODULE_2__["default"])()
;(0,_components_menuCard__WEBPACK_IMPORTED_MODULE_3__["default"])()
;(0,_components_forms__WEBPACK_IMPORTED_MODULE_4__["default"])()
;(0,_components_slider__WEBPACK_IMPORTED_MODULE_5__["default"])()
;(0,_components_calculation__WEBPACK_IMPORTED_MODULE_6__["default"])()




});



})();

/******/ })()
;
//# sourceMappingURL=all.js.map
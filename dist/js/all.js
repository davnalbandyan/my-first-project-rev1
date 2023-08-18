/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/JS/components/calculation.js":
/*!******************************************!*\
  !*** ./src/JS/components/calculation.js ***!
  \******************************************/
/***/ ((module) => {

eval("function calculating (){\r\n    \r\n\r\nconst result = document.querySelector(\".calculating__result span\");\r\n\tlet gender, height, weight, age, ratio;\r\n\r\n\tfunction initStartSettings (key, value, variable) {\r\n\t\tif (localStorage.getItem(key)) {\r\n\t\t\tvariable = localStorage.getItem(key);\r\n\t\t} else {\r\n\t\t\tvariable = value;\r\n\t\t\tlocalStorage.setItem(key, value);\r\n\t\t}\r\n\t}\r\n\r\n\tinitStartSettings(\"gender\", \"female\", gender);\r\n\tinitStartSettings(\"ratio\", 1.375, ratio);\r\n\r\n\t// if (localStorage.getItem(\"gender\")) {\r\n\t// \tgender = localStorage.getItem(\"gender\");\r\n\t// } else {\r\n\t// \tgender = \"female\";\r\n\t// \tlocalStorage.setItem(\"gender\", \"female\");\r\n\t// }\r\n\r\n\t// if (localStorage.getItem(\"ratio\")) {\r\n\t// \tratio = localStorage.getItem(\"ratio\");\r\n\t// } else {\r\n\t// \tratio = 1.375;\r\n\t// \tlocalStorage.setItem(\"ratio\", 1.375);\r\n\t// }\r\n\r\n\tfunction calcTotal () {\r\n\t\tif (!gender || !height || !weight || !age || !ratio) {\r\n\t\t\tresult.textContent = \"_____\";\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tif (gender === \"female\") {\r\n\t\t\tresult.textContent = Math.round(((10 * weight) + (6.25 * height) - (5 * age) - 161) * ratio);\r\n\t\t} else if (gender === \"male\") {\r\n\t\t\tresult.textContent = Math.round(((10 * weight) + (6.25 * height) - (5 * age) + 5) * ratio);\r\n\t\t} else {\r\n\t\t\tresult.textContent = \"_____\";\r\n\t\t}\r\n\t}\r\n\r\n\tcalcTotal();\r\n\r\n\tfunction initLocalSettings(selector, activeClass) {\r\n\t\tconst elements = document.querySelectorAll(selector);\r\n\r\n\t\telements.forEach(elem => {\r\n\t\t\telem.classList.remove(activeClass);\r\n\r\n\t\t\tif (elem.getAttribute(\"id\") === localStorage.getItem(\"gender\")) {\r\n\t\t\t\telem.classList.add(activeClass);\r\n\t\t\t}\r\n\r\n\t\t\tif (elem.dataset.ratio === localStorage.getItem(\"ratio\")) {\r\n\t\t\t\telem.classList.add(activeClass);\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\r\n\tinitLocalSettings(\"#gender div\", \"calculating__choose-item_active\");\r\n\tinitLocalSettings(\".calculating__choose_big div\", \"calculating__choose-item_active\");\r\n\r\n\tfunction getStaticInformation(selector, activeClass) {\r\n\t\tconst elements = document.querySelectorAll(selector);\r\n\r\n\t\telements.forEach(elem => {\r\n\t\t\telem.addEventListener(\"click\", (e) => {\r\n\t\t\t\tif (e.target.dataset.ratio) {\r\n\t\t\t\t\tratio = parseFloat(e.target.dataset.ratio);\r\n\t\t\t\t\tlocalStorage.setItem(\"ratio\", parseFloat(e.target.dataset.ratio));\r\n\t\t\t\t} else {\r\n\t\t\t\t\tgender = e.target.getAttribute(\"id\");\r\n\t\t\t\t\tlocalStorage.setItem(\"gender\", e.target.getAttribute(\"id\"));\r\n\t\t\t\t}\r\n\r\n\t\t\t\telements.forEach(elem => elem.classList.remove(activeClass));\r\n\t\t\t\te.target.classList.add(activeClass);\r\n\t\t\t\tcalcTotal();\r\n\t\t\t});\r\n\t\t});\r\n\t}\r\n\r\n\tgetStaticInformation(\"#gender div\", \"calculating__choose-item_active\");\r\n\tgetStaticInformation(\".calculating__choose_big div\", \"calculating__choose-item_active\");\r\n\r\n\tfunction getDynamicInformation (selector) {\r\n\t\tconst input = document.querySelector(selector);\r\n\r\n\t\tinput.addEventListener(\"input\", () => {\r\n\t\t\tconst val = input.value;\r\n\r\n\t\t\tif (val.match(/\\D/g)) {\r\n\t\t\t\tinput.style.border = \"1px solid red\";\r\n\t\t\t\t\r\n\t\t\t\tconst timerID = setTimeout(() => {\r\n\t\t\t\t\tinput.value = \"\";\r\n\t\t\t\t\tinput.removeAttribute(\"style\");\r\n\t\t\t\t\tclearTimeout(timerID);\r\n\t\t\t\t}, 200);\r\n\t\t\t}\r\n\r\n\t\t\tswitch(input.getAttribute(\"id\")) {\r\n\t\t\t\tcase \"height\":\r\n\t\t\t\t\theight = parseFloat(val);\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase \"weight\":\r\n\t\t\t\t\tweight = parseFloat(val);\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase \"age\":\r\n\t\t\t\t\tage = parseFloat(val);\r\n\t\t\t\t\tbreak;\r\n\t\t\t}\r\n\r\n\t\t\tcalcTotal();\r\n\t\t});\r\n\t}\r\n\r\n\tgetDynamicInformation(\"#height\");\r\n\tgetDynamicInformation(\"#weight\");\r\n\tgetDynamicInformation(\"#age\");\r\n\r\n}\r\n\r\nmodule.exports = calculating;\n\n//# sourceURL=webpack://food/./src/JS/components/calculation.js?");

/***/ }),

/***/ "./src/JS/components/forms.js":
/*!************************************!*\
  !*** ./src/JS/components/forms.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const spin = __webpack_require__(/*! ./sppiner */ \"./src/JS/components/sppiner.js\")\r\n\r\nfunction formsModule (){\r\n    const forms = document.querySelectorAll(\"form\");\r\n  \r\n\r\n   \r\n  \r\n    const messages = {\r\n      loading: spin,\r\n      success: \"Thank you\",\r\n      fail: \"Sorry something went wrong\",\r\n    };\r\n  \r\n    forms.forEach((form) => bindpostData(form));\r\n  \r\n  //   async function postData(url, data) {\r\n  //     const request = await fetch(url, {\r\n  //       method: \"POST\",\r\n  //       headers: {\r\n  //         \"Contnet-type\": \"application/json; charset=utf-8\"\r\n  //       },\r\n  //       body: data\r\n  //     })\r\n      \r\n  //     //----------------------------//\r\n  // if(!request.ok){\r\n  //   throw new Error()\r\n  // }\r\n  //     //----------------------------//\r\n  //     return await request.json();\r\n  \r\n      \r\n  \r\n  //   }\r\n  \r\n    async function getData(url){\r\n      const request= await fetch(url);\r\n      if(!request.ok){\r\n        throw new Error()\r\n      }\r\n      return await request.json();\r\n    }\r\n  \r\n    function bindpostData(form) {\r\n      form.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n  \r\n        const { loading, success, fail } = messages;\r\n  \r\n        const loader = document.createElement(\"div\");\r\n        loader.innerHTML = spin();\r\n        form.append(loader);\r\n  \r\n        if (!navigator.onLine) {\r\n          massageModal(fail + \": Connection lost! \");\r\n          loader.remove();\r\n          form.reset();\r\n        }\r\n        const empty = /^$/g;\r\n              const phone = /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/im;\r\n              let status = false\r\n  \r\n              for (let i = 0; i < form.querySelectorAll(\"input\").length; i++) {\r\n                  if (empty.test(form[i].value) || !phone.test(form[1].value)) {\r\n                      status = false;\r\n                      massageModal(\"Please fill all fields. On phone filed please fill telephone number format\");\r\n                      loader.remove();\r\n                      form.reset();\r\n                      break;\r\n                  } else {\r\n                      status = true;\r\n                  }\r\n              }\r\n  \r\n        if(status){\r\n          const formData = new FormData(form);\r\n  \r\n  \r\n         \r\n        // const data = JSON.stringify(Object.fromEntries(formData.entries()));\r\n        \r\n    \r\n        // postData(\"http://localhost:8888/requests\", data)\r\n          axios.post(\"http://localhost:8888/requests\",Object.fromEntries(formData.entries()))\r\n          .then((data) => {\r\n            console.log(data);\r\n            massageModal(success);\r\n          })\r\n          .catch((error) => {\r\n            massageModal(fail + \": \" + error);\r\n          })\r\n          .finally(() => {\r\n            loader.remove();\r\n            form.reset();\r\n          });\r\n         \r\n        }else{\r\n          console.log(\"status is falsed\");\r\n        }\r\n  \r\n        \r\n      });\r\n    };\r\n  \r\n    \r\n    \r\n  \r\n    function massageModal(message) {\r\n      const prevModal = document.querySelector(\".modal__dialog\");\r\n      prevModal.classList.add(\"hide\");\r\n      open();\r\n  \r\n      const mesModal = document.createElement(\"div\");\r\n      mesModal.classList.add(\".modal__dialog\");\r\n      mesModal.innerHTML = `\r\n      <div class=\"modal__content\">\r\n      <div  data-close class=modal__close></div>\r\n      <div class=\"modal__title\">${message}</div>\r\n      </div>\r\n      `;\r\n  \r\n      document.querySelector(\".modal\").append(mesModal);\r\n      setTimeout(() => {\r\n        mesModal.remove();\r\n        prevModal.classList.add(\"show\");\r\n        prevModal.classList.remove(\"hide\");\r\n        close();\r\n      }, 2000);\r\n    }\r\n}\r\n\r\nmodule.exports = formsModule;\n\n//# sourceURL=webpack://food/./src/JS/components/forms.js?");

/***/ }),

/***/ "./src/JS/components/menuCard.js":
/*!***************************************!*\
  !*** ./src/JS/components/menuCard.js ***!
  \***************************************/
/***/ ((module) => {

eval("function menuCardModule (){\r\n    \r\naxios.get(\"http://localhost:8888/menu\")\r\n.then(request=>creatMenuCards(request.data))\r\n  // getData(\"http://localhost:8888/menu\")\r\n  // \r\n  \r\n  function creatMenuCards(data){\r\n    data.forEach(({img,altimg,title,descr,price})=>{\r\n      const element=document.createElement(\"div\");\r\n      element.classList.add(\"menu__item\");\r\n      const transfer=27.59;\r\n     function changetoUAH(){\r\n        price = (parseFloat(price) * parseFloat(transfer)).toFixed(2)\r\n      }\r\n      changetoUAH()\r\n      element.innerHTML=`\r\n        <img src=${img} alt=${altimg} />\r\n        <h3 class=\"menu__item-subtitle\">${title}</h3>\r\n        <div class=\"menu__item-descr\"> ${descr}</div>\r\n        <div class=\"menu__item-divider\"></div>\r\n        <div class=\"menu__item-price\">\r\n        <div class=\"menu__item-cost\">Цена:</div>\r\n        <div class=\"menu__item-total\"><span>${price}</span> грн/день</div>\r\n        </div>\r\n      `\r\n      document.querySelector(\".menu .container\").append(element);\r\n    });\r\n    \r\n  };\r\n  \r\n \r\n}\r\n\r\nmodule.exports = menuCardModule;\n\n//# sourceURL=webpack://food/./src/JS/components/menuCard.js?");

/***/ }),

/***/ "./src/JS/components/modal.js":
/*!************************************!*\
  !*** ./src/JS/components/modal.js ***!
  \************************************/
/***/ ((module) => {

eval("function modalMudul (){\r\n   \r\n   const modalTrig = document.querySelectorAll(\"[data-modal]\");\r\n   const modal = document.querySelector(\".modal\");\r\n   const modalClose = document.querySelector(\"[data-close]\");\r\n \r\n   modalTrig.forEach((item) => {\r\n     item.addEventListener(\"click\", open);\r\n \r\n     modalClose.addEventListener(\"click\", close);\r\n \r\n     modal.addEventListener(\"click\", (e) => {\r\n       if (e.target === modal) {\r\n         close();\r\n       }\r\n     });\r\n   });\r\n   window.addEventListener(\"keydown\", (e) => {\r\n     if (e.key === \"Escape\" && modal.matches(\".show\")) {\r\n       close();\r\n     }\r\n   });\r\n \r\n   function showMod() {\r\n     if (window.scrollY >= 1000) {\r\n       open();\r\n       window.removeEventListener(\"scroll\", showMod);\r\n     }\r\n   }\r\n   window.addEventListener(\"scroll\", showMod);\r\n   function open() {\r\n     modal.classList.add(\"show\");\r\n     modal.classList.remove(\"hide\");\r\n     document.body.style.overflow = \"hidden\";\r\n   }\r\n \r\n   function close() {\r\n     modal.classList.remove(\"show\");\r\n     modal.classList.add(\"hide\");\r\n     document.body.removeAttribute(\"style\");\r\n   }\r\n \r\n  \r\n}\r\n\r\nmodule.exports = modalMudul;\n\n//# sourceURL=webpack://food/./src/JS/components/modal.js?");

/***/ }),

/***/ "./src/JS/components/slider.js":
/*!*************************************!*\
  !*** ./src/JS/components/slider.js ***!
  \*************************************/
/***/ ((module) => {

eval("function sliderModule (){\r\n   \r\nconst slider =document.querySelector(\".offer__slider\");\r\n\r\nconst slides=document.querySelectorAll(\".offer__slide\");\r\nconst prev=document.querySelector(\".offer__slider-prev\");\r\nconst next=document.querySelector(\".offer__slider-next\");\r\nconst current = document.querySelector(\"#current\");\r\nconst total = document.querySelector(\"#total\");\r\nconst slidesWrapper=document.querySelector(\".offer__slider-wrapper\");\r\nconst slidesInner=document.querySelector(\".offer__slider-inner\");\r\nconst width = window.getComputedStyle(slidesWrapper).width;\r\n\r\n\r\n\r\nlet slideIndex = 1;\r\nlet offset = 0;\r\n\r\nfunction useWithAll(){\r\n  if(slides.length < 10 ){\r\n    total.textContent = `0${slides.length} `\r\n    current.textContent = `0${slideIndex} `\r\n  }else{\r\n    total.textContent =  slides.length\r\n    current.textContent = slideIndex;\r\n  }\r\n}\r\nfunction timesHundred(){\r\n  if (offset === parseFloat(width.slice(0, width.length - 2)) * (slides.length - 1)) {\r\n    offset = 0;\r\n  } else {\r\n    offset += parseFloat(width.slice(0, width.length - 2));\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n  \r\n  useWithAll()\r\n  slidesInner.style.cssText = `\r\n  display: flex;\r\n  width: ${100 * slides.length}%;\r\n  transition: all .5s;\r\n`;\r\nslidesWrapper.style.overflow = \"hidden\";\r\nslider.style.position = \"relative\";\r\nconst dots = [];\r\nconst dotsWrapper = document.createElement(\"ul\");\r\ndotsWrapper.style.cssText = `\r\n  position: absolute;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  z-index: 15;\r\n  display: flex;\r\n  justify-content: center;\r\n  margin-left: 15%;\r\n  margin-right: 15%;\r\n  list-style: none;\r\n`;\r\nslider.append(dotsWrapper);\r\nfor (let i = 0; i < slides.length; i++) {\r\n  const dot = document.createElement(\"li\");\r\n  dot.setAttribute(\"data-slide-to\", i + 1);\r\n  dot.style.cssText = `\r\n    box-sizing: content-box;\r\n    flex: 0 1 auto;\r\n    width: 30px;\r\n    height: 6px;\r\n    margin-left: 3px;\r\n    margin-right: 3px;\r\n    cursor: pointer;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border-top: 10px solid transparent;\r\n    border-bottom: 10px solid transparent;\r\n    opacity: .5;\r\n    transition: opacity .5s;\r\n  `;\r\n  if (i === 0) {\r\n    dot.style.opacity = 1;\r\n  }\r\n  dotsWrapper.append(dot);\r\n  dots.push(dot);\r\n  \r\n}\r\n\r\n\r\nfunction nextOne(){\r\n  next.addEventListener(\"click\", () => {  \r\n    timesHundred()\r\n    slidesInner.style.transform = `translateX(-${offset}px)`;\r\n  \r\n    if (slideIndex === slides.length || slideIndex >= slides.length) {\r\n      slideIndex = 1;\r\n    } else {\r\n      slideIndex++;\r\n    }\r\n    function dots(){\r\n      dots.forEach(dot => dot.style.opacity = 0.5);\r\n      dots[slideIndex - 1].style.opacity = 1;\r\n    }\r\n   \r\n    useWithAll()\r\n     dots()\r\n})}\r\nnextOne()\r\n\r\n\r\nfunction prevBack(){\r\n  prev.addEventListener(\"click\", () => {\r\n  \r\n    timesHundred()\r\n    \r\n    slidesInner.style.transform = `translateX(-${offset}px)`;\r\n  \r\n    if (slideIndex === 1 || slideIndex <= 1) {\r\n      slideIndex = slides.length;\r\n    } else {\r\n      slideIndex--;\r\n    }\r\n  \r\n    useWithAll()\r\n     dots()\r\n    \r\n  });\r\n}\r\nprevBack()\r\n\r\ndots.forEach(dot => {\r\n  dot.addEventListener(\"click\", (e) =>{\r\n    const slideTo = e.target.getAttribute(\"data-slide-to\");\r\n    slideIndex = slideTo;\r\n    offset = parseFloat(width.slice(0, width.length - 2)) * (slideTo - 1)\r\n    slidesInner.style.transform = `translateX(-${offset}px)`;\r\n    useWithAll()\r\n    dots()\r\n  })\r\n})\r\n\r\n\r\n}\r\n\r\nmodule.exports = sliderModule;\n\n//# sourceURL=webpack://food/./src/JS/components/slider.js?");

/***/ }),

/***/ "./src/JS/components/sppiner.js":
/*!**************************************!*\
  !*** ./src/JS/components/sppiner.js ***!
  \**************************************/
/***/ ((module) => {

eval("function spin() {\r\n    return ` \r\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"margin: auto; background: rgb(255, 255, 255); display: block; shape-rendering: auto;\" width=\"100px\" height=\"100px\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\">\r\n<path fill=\"none\" stroke=\"#e90c59\" stroke-width=\"8\" stroke-dasharray=\"42.76482137044271 42.76482137044271\" d=\"M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z\" stroke-linecap=\"round\" style=\"transform:scale(0.8);transform-origin:50px 50px\">\r\n  <animate attributeName=\"stroke-dashoffset\" repeatCount=\"indefinite\" dur=\"1s\" keyTimes=\"0;1\" values=\"0;256.58892822265625\"/>\r\n</path>\r\n<!-- [ldio] generated by https://loading.io/ --></svg>\r\n    `;\r\n  }\r\n\r\n  module.exports = spin;\n\n//# sourceURL=webpack://food/./src/JS/components/sppiner.js?");

/***/ }),

/***/ "./src/JS/components/tab.js":
/*!**********************************!*\
  !*** ./src/JS/components/tab.js ***!
  \**********************************/
/***/ ((module) => {

eval("function tabModule () {\r\n   \r\n   const tabHeaders = document.querySelectorAll(\".tabheader__item\");\r\n   const tabContents = document.querySelectorAll(\".tabcontent\");\r\n   const tabsParent = document.querySelector(\".tabheader__items\");\r\n \r\n   function hide() {\r\n     tabContents.forEach((tabcontenct) => {\r\n       tabcontenct.classList.add(\"hide\");\r\n       tabcontenct.classList.remove(\"show\", \"fade\");\r\n     });\r\n     tabHeaders.forEach((tabheader) =>\r\n       tabheader.classList.remove(\"tabheader__item_active\")\r\n     );\r\n   }\r\n \r\n   function show(i = 2) {\r\n     tabContents[i].classList.add(\"show\", \"fade\");\r\n     tabContents[i].classList.remove(\"hide\");\r\n     tabHeaders[i].classList.add(\"tabheader__item_active\");\r\n   }\r\n \r\n   hide();\r\n   show();\r\n \r\n   tabsParent.addEventListener(\"click\", (e) => {\r\n     if (e.target && e.target.matches(\".tabheader__item\")) {\r\n       tabHeaders.forEach((item, index) => {\r\n         if (e.target === item) {\r\n           hide();\r\n           show(index);\r\n         }\r\n       });\r\n     }\r\n   });\r\n  \r\n}\r\n\r\nmodule.exports = tabModule;\n\n//# sourceURL=webpack://food/./src/JS/components/tab.js?");

/***/ }),

/***/ "./src/JS/components/timer.js":
/*!************************************!*\
  !*** ./src/JS/components/timer.js ***!
  \************************************/
/***/ ((module) => {

eval("function timerModule(){\r\n  \r\n  const date = \"2023-12-31\";\r\n  function getTimeRemaining(end) {\r\n    const total = Date.parse(end) - Date.parse(new Date());\r\n    const days = Math.floor(\r\n      total / (1000 * 60 * 60 * 24)\r\n    ); /* get the days quantity*/\r\n    const hours = Math.floor(\r\n      (total / (1000 * 60 * 60)) % 24\r\n    ); /*get the hours quantity*/\r\n    const min = Math.floor((total / 1000 / 60) % 60); /* get the min quantity*/\r\n    const seconds = Math.floor((total / 1000) % 60); /* get the sec quantity*/\r\n\r\n    return {\r\n      total,\r\n      days,\r\n      hours,\r\n      min,\r\n      seconds,\r\n    };\r\n  }\r\n  function setClock(selector, ending) {\r\n    const timer = document.querySelector(selector);\r\n    const daysBlock = timer.querySelector(\"#days\");\r\n    const hoursBlock = timer.querySelector(\"#hours\");\r\n    const minutesBlock = timer.querySelector(\"#minutes\");\r\n    const secondsBlock = timer.querySelector(\"#seconds\");\r\n    const timerID = setInterval(updateClock, 1000);\r\n    updateClock();\r\n    function updateClock() {\r\n      const time = getTimeRemaining(ending); /*ask to Sammi ending ի պահ ը)*/\r\n\r\n      daysBlock.textContent =\r\n        time.days >= 0 && time.days < 10 ? `0${time.days}` : time.days;\r\n      hoursBlock.textContent =\r\n        time.hours >= 0 && time.hours < 10 ? `0${time.hours}` : time.hours;\r\n      minutesBlock.textContent =\r\n        time.min >= 0 && time.minutes < 10 ? `0${time.min}` : time.min;\r\n      secondsBlock.textContent =\r\n        time.seconds > 0 && time.seconds < 10\r\n          ? `0${time.seconds}`\r\n          : time.seconds;\r\n\r\n      if (time.total <= 0) {\r\n        clearInterval(timerID);\r\n      }\r\n    }\r\n  }\r\n\r\n  setClock(\".timer\", date);\r\n\r\n}\r\n\r\nmodule.exports = timerModule;\n\n//# sourceURL=webpack://food/./src/JS/components/timer.js?");

/***/ }),

/***/ "./src/JS/index.js":
/*!*************************!*\
  !*** ./src/JS/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\r\n\r\nwindow.addEventListener(\"load\", () => {\r\nconst tabModule = __webpack_require__(/*! ./components/tab */ \"./src/JS/components/tab.js\");\r\nconst timerModule = __webpack_require__(/*! ./components/timer */ \"./src/JS/components/timer.js\");\r\nconst modalModule = __webpack_require__(/*! ./components/modal */ \"./src/JS/components/modal.js\");\r\nconst menuCardModule = __webpack_require__(/*! ./components/menuCard */ \"./src/JS/components/menuCard.js\");\r\nconst formsModule = __webpack_require__(/*! ./components/forms */ \"./src/JS/components/forms.js\");\r\nconst sliderModule = __webpack_require__(/*! ./components/slider */ \"./src/JS/components/slider.js\")\r\nconst calcucationModule = __webpack_require__(/*! ./components/calculation */ \"./src/JS/components/calculation.js\")\r\n\r\ntabModule()\r\ntimerModule()\r\nmodalModule()\r\nmenuCardModule()\r\nformsModule()\r\nsliderModule()\r\ncalcucationModule()\r\n\r\n\r\n\r\n\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack://food/./src/JS/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/JS/index.js");
/******/ 	
/******/ })()
;
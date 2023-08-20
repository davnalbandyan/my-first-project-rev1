
function tabModule () {
  function tabHeader(tabHeaders, tabContents, tabsParent) {
    function hide() {
      tabContents.forEach((tabcontent) => {
        tabcontent.classList.add("hide");
        tabcontent.classList.remove("show", "fade");
      });
      tabHeaders.forEach((tabheader) =>
        tabheader.classList.remove("tabheader__item_active")
      );
    }
  
    function show(index) {
      tabContents[index].classList.add("show", "fade");
      tabContents[index].classList.remove("hide");
      tabHeaders[index].classList.add("tabheader__item_active");
    }
  
    hide();
    show(0); 
  
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
  

  tabHeader(
    document.querySelectorAll(".tabheader__item"),
    document.querySelectorAll(".tabcontent"),
    document.querySelector(".tabheader__items")
  );
  


  // const tabHeaders = document.querySelectorAll(".tabheader__item");
  // const tabContents = document.querySelectorAll(".tabcontent");
  // const tabsParent = document.querySelector(".tabheader__items");

  // function hide() {
  //   tabContents.forEach((tabcontenct) => {
  //     tabcontenct.classList.add("hide");
  //     tabcontenct.classList.remove("show", "fade");
  //   });
  //   tabHeaders.forEach((tabheader) =>
  //     tabheader.classList.remove("tabheader__item_active")
  //   );
  // }

  // function show(i = 3) {
  //   tabContents[i].classList.add("show", "fade");
  //   tabContents[i].classList.remove("hide");
  //   tabHeaders[i].classList.add("tabheader__item_active");
  // }

  // hide();
  // show();

  // tabsParent.addEventListener("click", (e) => {
  //   if (e.target && e.target.matches(".tabheader__item")) {
  //     tabHeaders.forEach((item, index) => {
  //       if (e.target === item) {
  //         hide();
  //         show(index);
  //       }
  //     });
  //   }
  // });
 
}

// module.exports = tabModule;

export default tabModule
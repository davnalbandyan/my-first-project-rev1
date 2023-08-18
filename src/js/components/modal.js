function modalMudul (){
   
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
 
  
}

// module.exports = modalMudul;

export default modalMudul
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

function modalMudul() {
  function modalAll(modalTrig, modal, modalClose) {
    modalTrig.forEach((item) => {
      item.addEventListener("click", () => open(modal));

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
  modalAll(
    document.querySelectorAll("[data-modal]"),
    document.querySelector(".modal"),
    document.querySelector("[data-close]")
  )






  //    const modalTrig = document.querySelectorAll("[data-modal]");
  //    const modal = document.querySelector(".modal");
  //    const modalClose = document.querySelector("[data-close]");

  //    modalTrig.forEach((item) => {
  //      item.addEventListener("click",()=> open(modal));

  //      modalClose.addEventListener("click", close);

  //      modal.addEventListener("click", (e) => {
  //        if (e.target === modal) {
  //          close(modal);
  //        }
  //      });
  //    });
  //    window.addEventListener("keydown", (e) => {
  //      if (e.key === "Escape" && modal.matches(".show")) {
  //        close(modal);
  //      }
  //    });

  //    function showMod() {
  //      if (window.scrollY >= 1000) {
  //        open(modal);
  //        window.removeEventListener("scroll", showMod);
  //      }
  //    }
  //    window.addEventListener("scroll", showMod);

}


export { open, close }
export default modalMudul
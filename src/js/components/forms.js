const spin = require("./sppiner");
import { open,close } from "./modal";

function formsModule (){

    // const forms = document.querySelectorAll("form");
  function forms (selectorForms){
    selectorForms.forEach((form) => bindpostData(form));
  }
  forms(document.querySelectorAll("form"))

   
  
    const messages = {
      loading: spin,
      success: "Thank you",
      fail: "Sorry something went wrong",
    };
  
    // forms.forEach((form) => bindpostData(form));
  
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
      open(modal);
  
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
        close(modal);
      }, 2000);
    }
}

// 
export default formsModule;
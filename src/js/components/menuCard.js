function menuCardModule (){
    
  axios.get("http://localhost:8888/menu")
  .then(request => createMenuCards(request.data));

function createMenuCards(data) {
  data.forEach(({ img, altimg, title, descr, price }) => {
    const element = document.createElement("div");
    element.classList.add("menu__item");
    const transfer = 27.59;

    function changeToUAH() {
      price = (parseFloat(price) * parseFloat(transfer)).toFixed(2);
    };

    changeToUAH();

    element.innerHTML = `
      <img src=${img} alt=${altimg}>
      <h3 class="menu__item-subtitle">${title}</h3>
      <div class="menu__item-descr">${descr}</div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${price}</span> грн/день</div>
      </div>
    `;
    document.querySelector(".menu .container").append(element);
  });
  
}}
// module.exports = menuCardModule;

export default menuCardModule
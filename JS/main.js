import itens from '../JS/dataset.js'
import foods from '../JS/food.js'

const formFood=document.querySelector('#formFood')

foods.load(itens)

for(const food of foods.readAll()){
    createFoodView(food)
}
function createFoodView(food){
    const card = `<div class="flex-row card-food col-sm-6 col-lg-4 col-xl-3 mb-3"">
    <div class="card">
      <div class="card-header text-center font-weight-bold">
        <span class="food-name">
          ${food.name}
        </span>
      </div>
      <div class="card-body p-0">
        <img src="${food.image}" alt="${food.name}" class="food-image w-100">
      </div>
    </div>
  </div>`
  const cardDeck=document.querySelector('.card-deck')

  cardDeck.insertAdjacentHTML('beforeend', card)
}

formFood.onsubmit = (e) => {
  e.preventDefault();

  let food = Object.fromEntries(new FormData(formFood));

  const newFood = foods.create(food);

  createFoodView(newFood);

  $('#formFoodModal').modal('toggle');

  document.querySelector('#newBtnFood').blur();
};
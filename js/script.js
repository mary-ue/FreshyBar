const API_URL = 'https://voltaic-rhinestone-carob.glitch.me/';

const getData = async () => {
  const response = await fetch(`${API_URL}api/goods`);
  const data = await response.json();
  return data;
}

const createCard = (item) => {
  const cocktail = document.createElement('article');
  cocktail.classList.add('cocktail');

  cocktail.innerHTML = `
    <img class="cocktail__img" src="${API_URL}${item.image}" alt="${item.title}">
    <div class="cocktail__content">
      <div class="cocktail__text">
        <h3 class="cocktail__title">${item.title}</h3>
        <p class="cocktail__price text-red">${item.price} ₽</p>
        <p class="cocktail__size">${item.size}</p>
      </div>
      <button class="btn cocktail__btn" data-id=${item.id}>Добавить</button>
    </div>
  `;

  return cocktail;
}

const init = async () => {
  const goodsListEleme = document.querySelector('.goods__list');
  const data = await getData();

  const cartsCocktail = data.map((item) => {
    const li = document.createElement('li');
    li.classList.add('goods__item');
    li.append(createCard(item));

    return li;
  });

  goodsListEleme.append(...cartsCocktail);


};

init();


const searchInput = document.getElementById('search-input');
const results = document.getElementById('results');
const randomMeal = document.getElementById('random-meal');

let search = '';

const fetchSearch = async(url) => {
   meals = await fetch(`https://www.themealdb.com/api/json/v1/1/${url}`)
      .then( data => data.json())
      .then( data => data.meals)
      console.log(meals);
};

// Search
const searchDisplay = async() => {
  await fetchSearch(search);

  if(meals == null) {
    results.innerHTML = `<div class="component-app__result-is-null"><span>Aucun resultat</span></div>`;
  }

    results.innerHTML = (
      meals.map( meal => (
        `
        <div class="component-app__wrapper-meal">
          <div class="component-app__wrap-picture">
            <picture>
                <img src="${meal.strMealThumb}" alt="">
            <picture>
          </div>
          <div class="component-app__wrap-texts">
            <h3 class="component-app__wrap-country">${meal.strArea}</h3>
            <p class="component-app__wrap-info">
              <span class="component-app__wrap-name">${meal.strMeal}</span> 
              <span class="component-app__wrap-categorie">${meal.strCategory}</span> 
            </p>
             
          </div>
        </div>
        `
      )).join('')
    );
}

// random meal

const randomMealDisplay = async() => {

  await fetchSearch('random.php');

  results.innerHTML = (
    meals.map( meal => (
      `
      <div class="component-app__random-wrapper-meal">
        <div class="component-app__random-wrap-picture">
          <picture>
              <img src="${meal.strMealThumb}" alt="">
          <picture>
        </div>
        <div class="component-app__random-wrap-texts">
          <h3 class="component-app__random-wrap-title">${meal.strArea}</h3>

        </div>
      </div>
      `
    )).join('')
  );
  
}

searchInput.addEventListener('input', (e) => {

  search = `search.php?s=${e.target.value}`;
  searchDisplay();
})

randomMeal.addEventListener('click', randomMealDisplay);
randomMealDisplay();
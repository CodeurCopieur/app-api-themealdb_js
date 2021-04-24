const searchInput = document.getElementById('search-input');
const results = document.getElementById('results');
const randomMeal = document.getElementById('random-meal');

let search = '';

const fetchSearch = async() => {
   meals = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then( data => data.json())
      .then( data => data.meals)
      console.log(meals);
};


const searchDisplay = async() => {
  await fetchSearch();

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
            <h3 class="component-app__wrap-title">Country : ${meal.strArea}</h3>  
          </div>
        </div>
        `
      )).join('')
    );
}

searchInput.addEventListener('input', (e) => {
  
  search = e.target.value;
  searchDisplay();
})



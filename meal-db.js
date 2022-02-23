const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  const searchResult = document.getElementById("search-result");

  // clear data
  searchField.value = "";

  if (searchText == "") {
    const p = document.createElement("p");
    p.classList.add("text-center", "mx-auto");
    p.innerText = "Please type something to search";
    searchResult.appendChild(p);
  } else {
    // load data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displaySearchResult(data.meals))
      .catch((error) => displayError(error));
  }
};

const displayError = (error) => {
  const errorP = document.getElementById("error-message");
  errorP.classList.remove("d-none");
};

const displaySearchResult = (meals) => {
  const searchResult = document.getElementById("search-result");
  // clear previous (way 1)
  // searchResult.innerHTML = "";

  // clear previous (way 2)
  searchResult.textContent = "";

  // clear previous error
  const errorP = document.getElementById("error-message");
  errorP.classList.add("d-none");

  // if no search result found
  if (!meals) {
    const p = document.createElement("p");
    p.classList.add("text-center", "mx-auto");
    p.innerText = "No item found as you search query";
    searchResult.appendChild(p);
  }

  meals.forEach((meal) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
            </div>
        </div>
    `;
    searchResult.appendChild(div);
  });
};

const loadMealDetail = (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetail(data.meals[0]));
};

const displayMealDetail = (meal) => {
  console.log(meal);
  const mealDetails = document.getElementById("meal-details");
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="Meal">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
  `;
  mealDetails.appendChild(div);
};

const dfdkf = document.getElementById("pfdhhfd");
dfdkf.innerText = "";

const searchFood = async () => {
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

    try {
      const res = await fetch(url);
      const data = await res.json();
      displaySearchResult(data.meals);
    } catch (e) {
      displayError(error);
    }
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => displaySearchResult(data.meals));
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

const loadMealDetail = async (idMeal) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

  const res = await fetch(url);
  const data = await res.json();
  displayMealDetail(data.meals[0]);

  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => displayMealDetail(data.meals[0]));
};

const displayMealDetail = (meal) => {
  console.log(meal);
  const mealDetails = document.getElementById("meal-details");
  mealDetails.textContent = "";
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

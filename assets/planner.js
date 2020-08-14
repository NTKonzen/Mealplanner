const recipeArr = [];
const plannerInput = [];

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
  });

$(document).ready(function () {

  

    $('#searchBtn').click(function (event) {
        event.preventDefault()
        console.log('running')
        const recipeSearch = $('#recipe-search').val()
        app_id = "580e9c1d"
        api_key = "f3651c3d279f9b429a95b97fd5f70466"
        const queryUrl = "https://api.edamam.com/search?q=" + recipeSearch + "&app_id=" + app_id + "&app_key=" + api_key;

       $.ajax({
           type:"GET", 
           url: queryUrl,
           success: function (response){
               console.log(response)
               response.hits.forEach(function(i) {
                   console.log(i)
                   let recipe = i.recipe;
                   console.log(recipe)
                   let calories = Math.floor(recipe.calories / recipe.yield);
                   console.log(calories)

               })
           }
       })

    })

    // recipes/716429/information?apiKey=ff17a00df0ff4e7e89e1f7512d404731&includeNutrition=true
    // api key for spoonacular - ff17a00df0ff4e7e89e1f7512d404731 //
});
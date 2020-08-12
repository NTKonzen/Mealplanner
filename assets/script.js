$(document).ready(function () {

    $('#startBtn').click(function () {
        location.replace('./planner.html');
        JSON.parse(localStorage.getItem('mondayMeals'));
        localStorage.getItem('tuesdayMeals');
        localStorage.getItem('wednesdayMeals');
        localStorage.getItem('thursdayMeals');
        localStorage.getItem('fridayMeals');
        localStorage.getItem('saturdayMeals');
        localStorage.getItem('sundayMeals');
    });

    $('#searchBtn').click(function (event) {
        event.preventDefault()
        console.log('running')
        const recipeSearch = $('#recipe-search').val()
        const queryUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=ff17a00df0ff4e7e89e1f7512d404731&query=' + recipeSearch;

        $.ajax({
            'url': queryUrl,
            'method': 'GET'
        }).then(response => {
            console.log(response);
            console.log(response.results[0].id)
            $.ajax({
                'url': 'https://api.spoonacular.com/recipes/' + response.results[0].id + '/information?includeNutrition=false&apiKey=ff17a00df0ff4e7e89e1f7512d404731',
                'method': 'GET'
            }).then(response => {
                console.log(response)

                recipeElement = $("<div class='recipe>");
                
            })
        });

    })

    // recipes/716429/information?apiKey=ff17a00df0ff4e7e89e1f7512d404731&includeNutrition=true
    // api key for spoonacular - ff17a00df0ff4e7e89e1f7512d404731 //
});
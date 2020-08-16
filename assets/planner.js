const plannerInput = [];

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
});

$('#chooseWhenDialog').dialog({
    autoOpen: false,
    modal: true,
    width: 700,
    draggable: false,
    height: 'auto',
    close: function () {
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
    }
})

$("#timeSlider").slider({
    min: 0,
    max: 1440,
    step: 15,
    value: 600,
    create: function () {
        $('#timeHandle').text("12:00 PM");
    },
    slide: function (e, ui) {
        let hours1 = Math.floor(ui.value / 60);
        let minutes1 = ui.value - (hours1 * 60);

        if (hours1.length === 1) hours1 = '0' + hours1;
        if (minutes1.length === 1) minutes1 = '0' + minutes1;
        if (minutes1 === 0) minutes1 = '00';
        if (hours1 >= 12) {
            if (hours1 === 12) {
                hours1 = hours1;
                minutes1 = minutes1 + " PM";
            } else {
                hours1 = hours1 - 12;
                minutes1 = minutes1 + " PM";
            }
        } else {
            hours1 = hours1;
            minutes1 = minutes1 + " AM";
        }
        if (hours1 === 0) {
            hours1 = 12;
            minutes1 = minutes1;
        }
        let time = hours1 + ':' + minutes1;
        time.toString();
        $('#timeHandle').text(time);
    }
});



$(document).ready(function () {

    $('select').formSelect();

    $('#searchBtn').click(function (event) {
        event.preventDefault()
        console.log('running')
        const recipeSearch = $('#recipe-search').val()
        app_id = "580e9c1d"
        api_key = "f3651c3d279f9b429a95b97fd5f70466"
        const queryUrl = "https://api.edamam.com/search?q=" + recipeSearch + "&app_id=" + app_id + "&app_key=" + api_key;

        $.ajax({
            type: "GET",
            url: queryUrl,
            success: function (response) {
                console.log(response)
                response.hits.forEach(function (i) {
                    console.log(i)
                    let recipe = i.recipe;
                    console.log(recipe)
                    let calories = Math.floor(recipe.calories / recipe.yield);
                    console.log(calories)
                    let ingredientsArr = [];
                    recipe.ingredients.forEach(i => {
                        console.log(i.text)
                        ingredientsArr.push(i.text);
                    });

                    let newList = $('<ul class="ingredients is-list">')

                    $(ingredientsArr).each(function (index, item) {
                        let newListItem = $('<li>')
                        newListItem.text(item)
                        newList.append(newListItem);
                        console.log(item)
                    })

                    let uploadRecipe =
                        '<article class="valign-wrapper">' +
                        '<div class="card">' +
                        '<div class="card-image">' +
                        '<img class="recipe-image" src="' + recipe.image + '" alt="image of recipe">' +
                        '</div>' +
                        '<div class="card-content">' +
                        '<h3 class="title">' + recipe.label + '</h3>' +
                        '<p class="recipeCal">' + calories + ' calories per serving</p>' +
                        '<p class="recipeServings"> Servings: ' + recipe.yield + '</p>' +
                        $(newList)[0].outerHTML +
                        '<hr>' +
                        '<a href="' + recipe.url + '">View this Recipe!</a>' +
                        '<footer class="card-footer">' +
                        '<a class="btn waves-effect waves-light" data-function="add" "type="submit" name="action">Add To Planner<i class="material-icons right send"></i></button>' +
                        '<a class="btn waves-effect waves-light" "type="submit name="action">Save Recipe</button>' +
                        '</footer>' +
                        '</div>' +
                        '</div>' +
                        '</article>'
                    $("#recipe-cards").append(uploadRecipe);
                })
                $('a').data('function', 'add').click(function (event) {
                    event.stopPropagation();
                    $('html, body').css({
                        overflow: 'hidden',
                    });
                    $('#chooseWhenDialog').dialog('open');
                    $('#timeSlider').width($('#daySelect').width())
                    $('input.dropdown-trigger').click(function (event) {
                        event.stopPropagation();
                        console.log($('.dropdown-content').css('display'))
                        if ($('div[role="dialog"]').height() < $('ul.select-dropdown').height()) {
                            console.log(event.target)
                            let adjustedHeight = $('div[role="dialog"]').height() + $('ul.select-dropdown').height();
                            $('#chooseWhenDialog').dialog("option", "height", adjustedHeight)
                        }

                    })

                    $('li').click(function (event) {
                        if ($(this).parent().hasClass('select-dropdown')) {
                            $('#chooseWhenDialog').dialog("option", "height", 'auto')
                        }
                    })

                    $('#chooseWhenDialog').click(function () {
                        if ($('.dropdown-content').css('display') === 'none') {
                            $('#chooseWhenDialog').dialog("option", "height", 'auto')
                        }
                    })
                })
            }
        })
        $("#recipe-search").val("");

    })

    $('#recipe-search').keypress(function (e) {
        if (e.which == 13) {
            $('#searchBtn').click();
        }
    })

});
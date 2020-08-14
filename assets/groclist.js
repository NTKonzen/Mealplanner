// JavaScript for groclist.html specific elements
// VARIABLES FIRST
const listItem = 
  $(`<div class="row list-item">
      <div class="input-field">
        <input type="checkbox" />
        <input placeholder="Grocery Item" type="text" class="validate">
      </div>
    </div>`);

// FUNCTIONS

// BUTTON ELEMENTS  
// add a list element
function addListItem () {
  $('#groc-list').append(listItem);
  console.log($('#groc-list'));
}
/*$("#add-list-item").on("click", function () {
  $('#groc-list').append(listItem);
  // this button only works once. gonna look at a todo list repository. I think I'm missing something big -KIL
});*/
// remove checked items
$("#clear-check-items").on("click", function () {
  // if input type="checkbox" is also "checked" then we remove it's <div class="row list-item" and everything inside
});
// save list changes
$("#save-list").on("click", function () {
  //local storage. save all changes. probably using an array here
});
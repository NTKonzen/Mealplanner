// JavaScript for groclist.html specific elements

// FUNCTIONS

// BUTTON ELEMENTS  
// add a list element
$("#add-list-item").on("click", function () {
  const listItem = 
  $(`<div class="row list-item">
      <div class="input-field">
        <input type="checkbox" />
        <input placeholder="Grocery Item" type="text" class="validate">
      </div>
    </div>`);
  $('#groc-list').append(listItem);
});
// remove checked items
$("#clear-check-items").on("click", function () {
  let inputField = $('.input-field');
  let checkboxes = inputField.children('input:checked');
  checkboxes.parent().parent().remove();
});
// save list changes
$("#save-list").on("click", function () {
  //local storage. save all changes. probably using an array here
});
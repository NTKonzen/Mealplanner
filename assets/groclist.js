// JavaScript for groclist.html specific elements
// VARIABLES
const grocList = $('#groc-list');
const listItem = $('.list-item');
const inputField = $('.input-field');
let textInputEl = inputField.children('type:text');
// WHEN THE PAGE LOADS

let textCont = localStorage.getItem();
textInputEl.val(textCont);
// FUNCTIONS

// BUTTON FUNCTIONS
// add a list element
function addListItem() {
  const listItem = 
  $(`<div class="row list-item">
      <div class="input-field">
        <input type="checkbox" />
        <input placeholder="Grocery Item" type="text" class="validate">
      </div>
    </div>`);
  $('#groc-list').append(listItem);
}
// save list changes
function saveList() {
  let textInputID = textInputEl.attr('id');
  localStorage.setItem(textInputID, textInputEl.val());
}
// remove checked items
function clearChecks() {
  let checkboxes = inputField.children('input:checked');
  checkboxes.parent().parent().remove();
  saveList();
  //the function doesn't work properly when you have more than one check. figure that out later.
}
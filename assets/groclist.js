// JavaScript for groclist.html specific elements
// VARIABLES
const grocList = $('#groc-list');
const listItem = $('.list-item');
let inputField = $('.input-field');
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
  inputField = $(".input-field");
  let grocItems = [];
  inputField.each (function () {
    let isChecked = $(this).children('type:checkbox').val();
    let grocText = $(this).children('type:text').val();
    grocItems.push({
      isChecked: isChecked, grocText: grocText,
    });
  });
  localStorage.setItem("grocItems", JSON.stringify(grocItems))
}
// remove checked items
function clearChecks() {
  inputField = $(".input-field");
  let checkboxes = inputField.children('input:checked');
  checkboxes.each (function () {
    $(this).parent().parent().remove();
  });
  saveList();
}
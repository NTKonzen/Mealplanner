// JavaScript for groclist.html specific elements
// VARIABLES
const grocList = $('#groc-list');
const listItem = $('.list-item');
let inputField = $('.input-field');
let textInputEl = inputField.children('type:text');
let grocItems = JSON.parse(localStorage.getItem("grocItems")) || [];
console.log(grocItems);
// WHEN THE PAGE LOADS



// i being the array, trigger addListItem until i = the length of the array
// place each inputField object into an actual input-field

// let textCont = localStorage.getItem();
// textInputEl.val(textCont);

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
  inputField.each(function () {
    let isChecked = $(this).children("input[type='checkbox']").is(':checked');
    let grocText = $(this).children("input[type='text']").val();
    grocItems.push({
      isChecked: isChecked, grocText: grocText,
    });
  });
  console.log(grocItems)
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
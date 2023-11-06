import {
  createOrderHtml,
  html,
  moveToColumn,
  updateDraggingHtml,
} from "./view.js";

import { COLUMNS, createOrderData, state, updateDragging } from "./data.js";
/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */
const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;

  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }

  if (!column) return;
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
};
//Added nothing here
const handleDragStart = (event) => {};
// When Drag ends the for loop checks for the column that is highlighted green.
// Sets the column to no colour
// Moves the div to the column that was highlighted green
const handleDragEnd = (event) => {
  let column = ''
   for (const columnName of COLUMNS) {
      if (html.area[columnName].style.backgroundColor === "rgba(0, 160, 70, 0.2)")
        column = html.area[columnName].querySelector('[class="grid__content"]').getAttribute("data-column");
        html.area[columnName].style.backgroundColor = '';
   }
  moveToColumn(event.target.dataset.id, column);
};
// Uses event to get the className/InnerText of the button that was selected / clicked
// Opens and closes the help overlay
const handleHelpToggle = (event) => {
    if (event.target.className === "help") {
        html.help.overlay.show()
    } else if (event.target.innerText === "Close"){
        html.help.overlay.close();
        // Sets the focus to the add button so the user can use space/enter to select
        html.other.add.focus();
    }
    
};

// Same as handleHelpToggle
const handleAddToggle = (event) => {
    if (event.target.innerText === "Add Order"){
        html.add.overlay.show()
    } else if (event.target.innerText === "Cancel") {
        html.add.form.reset();
        html.add.overlay.open = false;
        html.other.add.focus();
    }
  
};

const handleAddSubmit = (event) => {
    event.preventDefault()
    // Gets the info from the entries on the form
    const formData = new FormData(event.target)
    const {title , table } = Object.fromEntries(formData)
    // Calls createOrderData function passing the needed params
    const newOrder = createOrderData({title, table, column: 'ordered'})
    
    state.orders[newOrder.id] = newOrder
    //Uses createOrderHtml with param from createOrderData
    const htmlOrder = createOrderHtml(newOrder)
    // Adds the div to the correct column as a row item
    html.columns[newOrder.column].appendChild(htmlOrder)
    // Closes form and sets focus
    html.add.form.reset()
    html.add.overlay.open = false
    html.other.add.focus()
};

let updateID = 0

const handleEditToggle = (event) => {
  // Checks what button is selected
  if (event.target.className === "order") {
    html.edit.overlay.show();
    //Gets ID of Div for next eventhandler
    updateID = event.target.dataset.id
  } else if (event.target.innerText === "Cancel") {
    html.edit.form.reset();
    html.edit.overlay.open = false;
    html.other.add.focus();
  }
};

const handleEditSubmit = (event) => {
  // Gets item entries from the Form
  event.preventDefault();
  const formData = new FormData(event.target);
  const { title, table, column } = Object.fromEntries(formData);
  // QuerySelector to change the innerHtml of correct div
  let updateDiv = document.querySelector('[data-id="' + updateID + '"]')
  updateDiv.querySelector('[data-order-title]').innerHTML = title
  updateDiv.querySelector('[data-order-table]').innerHTML = table
  // Moves to the column selected in the form
  moveToColumn(updateID,column)
  html.edit.form.reset();
  html.edit.overlay.open = false;
};
const handleDelete = (event) => {
  // Searches for the div selected
  const htmlSource = document.querySelector(`[data-id="${updateID}"]`);
  // Removes it 
  htmlSource.remove();
  html.edit.form.reset();
  html.edit.overlay.open = false;
};

html.add.cancel.addEventListener("click", handleAddToggle);
html.other.add.addEventListener("click", handleAddToggle);
html.add.form.addEventListener("submit", handleAddSubmit);

html.other.grid.addEventListener("click", handleEditToggle);
html.edit.cancel.addEventListener("click", handleEditToggle);
html.edit.form.addEventListener("submit", handleEditSubmit);
html.edit.delete.addEventListener("click", handleDelete);

html.help.cancel.addEventListener("click", handleHelpToggle);
html.other.help.addEventListener("click", handleHelpToggle);

for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener("dragstart", handleDragStart);
  htmlColumn.addEventListener("dragend", handleDragEnd);
}

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
}

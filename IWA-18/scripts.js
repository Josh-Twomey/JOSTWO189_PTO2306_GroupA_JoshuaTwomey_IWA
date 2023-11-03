import { createOrderHtml, html, moveToColumn } from "./view.js";

import { COLUMNS, createOrderData, state } from "./data.js";
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

const handleDragStart = (event) => {};
const handleDragEnd = (event) => {};

const handleHelpToggle = (event) => {
    if (event.target.className === "help") {
        html.help.overlay.showModal()
    } else if (event.target.innerText === "Close"){
        html.help.overlay.close();
    }
    
};

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
    const formData = new FormData(event.target)
    const {title , table } = Object.fromEntries(formData)
    const newOrder = createOrderData({title, table, column: 'ordered'})

    state.orders[newOrder.id] = newOrder
    const htmlOrder = createOrderHtml(newOrder)
    html.columns[newOrder.column].appendChild(htmlOrder)
  
    html.add.form.reset()
    html.add.overlay.open = false
    html.other.add.focus()
};
let updateID = 0
const handleEditToggle = (event) => {
  if (event.target.className === "order") {
    html.edit.overlay.show();
    updateID = event.target.dataset.id
  } else if (event.target.innerText === "Cancel") {
    html.edit.form.reset();
    html.edit.overlay.open = false;
    html.other.add.focus();
  }
};

const handleEditSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const { title, table, column } = Object.fromEntries(formData);
  let updateDiv = document.querySelector('[data-id="' + updateID + '"]')
  updateDiv.querySelector('[data-order-title]').innerHTML = title
  updateDiv.querySelector('[data-order-table]').innerHTML = table
  moveToColumn(updateID,column)
  html.edit.form.reset();
  html.edit.overlay.open = false;
};
const handleDelete = (event) => {
  const htmlSource = document.querySelector(`[data-id="${updateID}"]`);
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

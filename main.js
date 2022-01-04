//  MODAL
var modal = document.getElementById("simpleModal");
// MODAL BUTTON
var modalBtn = document.getElementById("modalBtn");
// CLOSE BUTON
var closeBtn = document.getElementsByClassName("closeBtn")[0];

let btnAdd = document.querySelector("#addButton");
let table = document.querySelector("table");
// CLICK FUNCTINALITY
modalBtn.addEventListener("click", openModal);

// CLICK FUNCTIONALITY OF CLOSE
closeBtn.addEventListener("click", closeModal);

//  CLICK FOR OUTSIDE
window.addEventListener("click", outsideClick);

let titleInput = document.querySelector("#title");
let authorInput = document.querySelector("#author");
let pagesInput = document.querySelector("#number");
// let reading = document.querySelector("#yes");

// FUNCTION FOR CLOSE BUTTON
function closeModal() {
  modal.style.display = "none";
}

// FUNCTION FOR MODAL
function openModal() {
  modal.style.display = "block";
}
function winClose() {
  closeBtn = document.getElementById("simpleModal");
  closeBtn.style.display = "none";
}

// FUNCTION FOR OUTSIDE CLICK
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

// FUNCTIONS FOR SMALL BOOK LIBRARY APP
btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  let title = titleInput.value;
  let author = authorInput.value;
  let pages = pagesInput.value;
  // let read = reading.value;

  let template = `
                  <tbody>
                      <tr>
                          <td>${title}</td>
                          <td>${author}</td>
                          <td>${pages}</td>
                      </tr>
                  </tbody>`;

  table.innerHTML += template;
});

const button = document.querySelector("#button");

const push_button = document.querySelector("#button");
push_button.addEventListener("click", () => {
  const input_box = document.querySelector("#input_in");
  const text = input_box.value();

  if (text !== "") {
    add_list(text);
    input_box.value = "";
    input_box.focus();
  }
});

// add_list.addEventListener("click",
function add_list(text) {
  const list = document.createElement("#list");

  const new_list = document.createElement("li");
  new_list.classList.add("list_item");

  new_list.innerHTML = text;

  list.appendChild(new_list);
}

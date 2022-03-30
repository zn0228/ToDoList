const list_box = document.getElementById("list");
const input_box = document.getElementById("input_box");
const input_in = input_box.querySelector("#input_in");

const put = (event) => {
  event.preventDefault();
  addlist(input_in.value);
  input_in.value = "";
};

const addlist = (text) => {
  const newlist = document.createElement("li");
  newlist.className = "list_item";
  newlist.innerText = text;
  list_box.appendChild(newlist);
};

input_box.addEventListener("submit", put);

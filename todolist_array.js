const list_box = document.getElementById("list");
const input_box = document.getElementById("input_box");
const input_in = input_box.querySelector("#input_in");

const toDo = [];
const put = (event) => {
  event.preventDefault();
  if (input_in.value != "") {
    toDo.push(input_in.value);
    input_in.value = "";
    addlist();
  }
};

const addlist = () => {
  list_box.innerHTML = "";
  toDo.forEach((text, index) => {
    const newlist = document.createElement("li");
    newlist.className = "list_item";
    newlist.innerText = text;
    list_box.appendChild(newlist);

    const newDeleteButton = document.createElement("button");
    newDeleteButton.className = "delete_button";
    newDeleteButton.innerText = "X";
    newlist.appendChild(newDeleteButton);
    newDeleteButton.addEventListener("click", () => delete_list(index));
  });
};

delete_list = (index) => {
  const array = toDo.filter((todo) => {
    todo !== toDo[index];
  });
  console.log(array);
  toDo = array;

  // toDo.splice(index, 1);
  addlist();
};

input_box.addEventListener("submit", put);

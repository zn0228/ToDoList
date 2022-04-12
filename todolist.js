const list_box = document.getElementById("list");
const input_box = document.getElementById("input_box");
const input_in = input_box.querySelector("#input_in");

const toDo = [];
const put = (event) => {
  event.preventDefault();
  if (input_in.value != "") {
    toDo.push(input_in.value);
    input_in.value = "";
  }
};

const addlist = (...toDo) => {
  const newlist = document.createElement("li");
  newlist.className = "list_item";
};

//   const put = (event) => {
//     event.preventDefault();
//     addlist(input_in.value);
//     input_in.value = "";
//   };

// const addlist = (text) => {
//   if (text != "") {
//     const newlist = document.createElement("li");
//     newlist.className = "list_item";
//     newlist.innerText = text;
//     list_box.appendChild(newlist);
//     const newDeleteButton = document.createElement("button");

//     newDeleteButton.className = "delete_button";
//     newDeleteButton.innerText = "X";
//     newlist.appendChild(newDeleteButton);
//     // const delete_button = newDeleteButton.querySelector(".delete_button");
//     newDeleteButton.addEventListener("click", delete_list);
//   }
// };

// const delete_list = (event) => {
//   const removing_one = event.target.parentElement;
//   removing_one.remove();
// };

input_box.addEventListener("submit", put);

let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
function add() {
  if (inputs.value == "") {
    alert("please enter task");
  } else {
    let newEle = document.createElement("uI");
    newEle.innerHTML = `${inputs.value} <i class="fa-thin fa-trash"></i>`;
    text.appendChild(newEle);
    inputs.value = "";
    newEle.querySelector("i").addEventListener("click,remove");
    function remove() {
      newEle.remove();
    }
  }
}

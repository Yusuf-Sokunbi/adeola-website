const arrayTask = [{name:'Goto gym',status:'pending'}];
let inputElement = document.querySelector(".js-todo-input");
const names = inputElement.value;
const submit = document.querySelector(".js-add-list");

doneElement = 'Mark as done';
// let emptyList = "";

renderArrayTask();
// render function ArrayTask to display on Webpage
function renderArrayTask() {
  let arrayTaskHTML = ""; 
 
  // let empty = '';
  //Generatin the HTML
   if (arrayTask.length > 0) {
    document.querySelector(".js-list").innerHTML = arrayTaskHTML;
   } else{
    document.querySelector(".js-list").innerHTML = "Empty List";
   }
     
    for (let i = 0; i < arrayTask.length; i++) {
      const todoArray = arrayTask[i];
      const html = `
      <div class="item">
      <div class="title">
      ${todoArray.name}</div>
      <div class="status"><span class="js-pending">${todoArray.status}</span></div>
      <div class="action"><button class="done"  onclick="completedTask(${i})";>${doneElement}</button>
      <button class="js-delete delete" onclick = "deleteTask(${i})"
      >Delete</button></div>
      </div>
      `;
      arrayTaskHTML += html;
      document.querySelector(".js-list").innerHTML = arrayTaskHTML;
    }

}



function deleteTask(i) {
  arrayTask.splice(i, 1);
  renderArrayTask();
  
}


submit.addEventListener("click", () => {
  let inputElement = document.querySelector(".js-todo-input");
  const names = inputElement.value;

  if (names === ""){
    alert("Please enter your List");
    // names.focus();  
    return false;
  } else{
    names;
  }
    
  let newname = { name: names, status: "pending" };
  arrayTask.push(newname);
  inputElement.value = "";
  renderArrayTask();
  let doneElement = document.querySelector('.done').innerHTML;
});

function completedTask(i) {
  const changeColor = document.querySelector('.js-pending');
if (arrayTask[i].status === "pending"){
  arrayTask[i].status = "completed";
  changeColor.style.backgroundColor = 'blue';
   doneElement ='mark as undone';
}else if  (arrayTask[i].status === "completed"){
  arrayTask[i].status = "pending";
  changeColor.style.backgroundColor = 'red';
  doneElement ='mark as done!';
 
}
console.log(changeColor.style.backgroundColor);
console.log("hello");
  renderArrayTask();
} 
// document.querySelector('.add-button').style.color ="red!impotant";


// function two(i) {
//   arrayTask[i].status ="pendding"
//   console.log("bye")
//   renderArrayTask();
// }

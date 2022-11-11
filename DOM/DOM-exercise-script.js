var btn = document.getElementById("btn");
var btnList = document.getElementsByClassName('btn');
var userInput = document.getElementById("userInput");
var shoppingList = document.getElementById("list");

function keyPress(event){
    if(userInput.value.length > 0 && event.keyCode === 13){
        var newElement = document.createElement('LI');
            shoppingList.appendChild(newElement);
            newElement.innerHTML= userInput.value + "<button class='btn'>Delete</button>";
            userInput.value = "";
    }
}

function addEventListenerToList(){
    btn.addEventListener('click', function(){
        if(userInput.value.length > 0){   
            var newElement = document.createElement('LI');
            shoppingList.appendChild(newElement);
            newElement.innerHTML= userInput.value + "<button class='btn'>Delete</button>";
            userInput.value = "";
        }});
    
      
      shoppingList.addEventListener('click', function(e){
        if(e.target && e.target.nodeName == "BUTTON") {
              // List item found!  Output the ID!
              console.log("Button ", e, " was clicked!");
          e.target.parentNode.remove();
          alert(e.target);
          }
      });
      document.getElementById("list").addEventListener("click", function(e) {
        // e.target will be the item that was clicked on
        e.target.classList.toggle('done');
    })
}
addEventListenerToList()
userInput.addEventListener("keypress",keyPress);


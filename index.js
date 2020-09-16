document.addEventListener("DOMContentLoaded", function(){
  createGrid()
  renderBot(currentPosition)

  // ADD CODE HERE!
  // 1. As user press arrow keys, add that direction to the list (ul with id of "moves-container" already exists).
  // 2. Robot does not move until user press "MOVE" button.
  // 3. The direction on top will be removed
  // 4. Robot moves in the direction was just removed!
  // 5. If robot hits a wall, user should get an "ALERT!" saying "Clang!"
  // 6. When user press DELETE on keyboard, remove the last direction from the <ul>
  // 7. Remeber edge case! (what if there is nothing to delete?)
  // Bonus
  // When "MOVE" is clicked, Robot automatically moves to the directions and directions will be removed
  // (check setInterval)


  const container = document.getElementById("moves-container")

  document.addEventListener('keyup', e => {
    if (e.key === "ArrowRight") {
      // move('right')
      let li = document.createElement('li')
      li.textContent = "right"
      container.appendChild(li)
    }
    else if (e.key === "ArrowLeft") {
      // move('left')
      let li = document.createElement('li')
      li.textContent = "left"
      container.appendChild(li)
    }
    else if (e.key === "ArrowUp") {
      // move('up')
      let li = document.createElement('li')
      li.textContent = "up"
      container.appendChild(li)
    }
    else if (e.key === "ArrowDown") {
      // move('down')
      let li = document.createElement('li')
      li.textContent = "down"
      container.appendChild(li)
    }
    else if(e.key==="Backspace"){
      const list = document.querySelectorAll('li');
        list[list.length-1].remove();
    }
  })


const button = document.getElementById("move-button");

button.addEventListener('click', e => {
  const list = document.querySelectorAll('li');
for(let item of list){
  move(item.innerText);
  item.remove();                                
}

})
})
  

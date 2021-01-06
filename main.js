content.addEventListener("mouseover", function( event ) {
    event.target.style.backgroundColor = "black";
  });

  
  function createDiv(){
      const container = document.querySelector('#container');
      const content = document.createElement('div');
      container.appendChild(content);

      content.setAttribute("id", "theDiv");         
      content.classList.add("classDiv");
      let y = document.getElementById("theDiv");
  }         
  


  const btn = document.getElementById("button");
  let userNumber = 1600;
  let x = document.getElementsByClassName("classDiv");
  let items= 1600

  for (let i=0; i<1600; i++){
    createDiv(); }

  btn.addEventListener('click', () => {
     
                    
      userNumber = prompt("How many squares do you want?");
      if (userNumber>100){alert("Too, big number, try again and insert number under 100")}
      else{

          for(i=0; i<items; i++){
          container.removeChild(theDiv);  
          }

      userNumberConverted = parseInt(userNumber);
      container.setAttribute('style', 'grid-template-columns: repeat(' + userNumberConverted + ', auto)');
      

      items = userNumber*userNumber; 
      createGrid();
      return;
      }
  });
  
  function createGrid(){
      for (let i=0; i<items; i++){
      createDiv();
      
      }
  }
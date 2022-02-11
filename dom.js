//Create the DOMContentLoaded function 

document.addEventListener("DOMContentLoaded", function () {
 
    //Create a button withing the Div with a label of "Add Square" (and className)
    const newBtn = document.createElement("button");
    const btnText = document.createTextNode("Add Square");
    newBtn.classList.add("btn");
    
    
    //Append to textNode to the buttonNode
    newBtn.appendChild(btnText);
    //Append buttonNode to the bodyNode
    document.body.appendChild(newBtn);
    
    //Target the button for an onclick event
    const divMaker = document.querySelector(".btn");
    let btnCounter = 0; //the tracker(counter)
    
    
    //Create an Array with colors 
    const colorArr = ["aqua", "darkgoldenrod", "crimson", "darkkhaki", "limegreen", "darkblue", "pink", "brown", "grey", "yellow", "blue", "orange", "red" ];
    
    //Create eventlistener function
    divMaker.addEventListener("click", function(){
       
    //Create div element with a className and #Id
    const newDiv = document.createElement("div");
    btnCounter++;
    newDiv.className = "square";
    newDiv.id = btnCounter;
    newDiv.addEventListener("click", randomColor);


      
     //Append to the body
     document.body.appendChild(newDiv);


      //Create Even and Odd functions
     newDiv.addEventListener("dblclick", function(){
        if (this.id % 2 == 0 & this.nextSibling === null) {
            alert("No square after me to delete!")
        }
        else if (this.id % 2 == 0) {
            this.nextSibling.remove();
        }
     })

     newDiv.addEventListener("dblclick", function(){
         if (this.id % 2 !== 0 & this.previousSibling === null) {
             alert("No square before me to delete!");
         } else if ( this.id % 2 !== 0) {
             this.previousSibling.remove();
         }
        
     });

    }); 

    
    
    //Create an random color function
    
    function randomColor(event) {
        const randomArr = Math.floor(Math.random() * colorArr.length);
        event.target.style.backgroundColor = colorArr[randomArr];
    }

   
});
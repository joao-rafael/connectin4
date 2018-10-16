//For the modal
var modal = document.getElementById("modal");
var showTutorial = document.getElementById("Tutorial");
var closebutton = document.getElementById("close");

        showTutorial.onclick = function(){
            modal.style.display = "block";
        } 
        closebutton.onclick = function(){
            modal.style.display = "none";
        }
        window.onclick = function(event){
            if(event.target == modal){
                modal.style.display = "none";
            }

        }
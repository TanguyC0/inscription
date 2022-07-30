function createModalmodal()
{
    // Get the modal
    var modal = document.getElementById("myModal");

    

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() 
    {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) 
    {
        if (event.target == modal) 
        {
            modal.style.display = "none";
        }
    }
}

function openModal() 
{
    document.getElementById("myModal").style.display = "block";
}

function validateForm() {
    let x = document.forms["Forms"]
    for (let i = 0; i < x.length; i++) {
        let element = x[i].value;
        if (element == "") {
            // alert("Name must be filled out");
            openModal();
            return false;
        }
    }
 
}

new createModalmodal();
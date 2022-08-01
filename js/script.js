class Modal
{
    constructor(id)
    {
        this.id = id;
    }

    configModal()
    {
        // Get the modal
        let modal = document.getElementById("myModal");

        
        // Get the <span> element that closes the modal
        let span = document.getElementsByName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() 
        {
            modal.style.display = "none";
        }

        span = document.getElementsByName("close")[1];

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

    openModal(valide, message)
    {
        document.getElementById("myModal").style.display = "block";

        let elementH = document.getElementsByClassName("modal-header")[0];
        let elementB = document.getElementsByClassName("modal-body")[0];

        console.log("openmodal");
        
        if(valide)
        {
            console.log("valide");
            elementH.style.backgroundColor = "green";
            elementH.getElementsByTagName("h2")[0].innerHTML = '<i class="fa fa-check-square-o" aria-hidden="true"></i> Valid';

            elementB.getElementsByTagName("p")[0].textContent = message+" now has free access for 7 days!";
        }
        else
        {
            console.log("invalide");
            elementH.style.backgroundColor = "red";
            elementH.getElementsByTagName("h2")[0].innerHTML = '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Error';

            elementB.getElementsByTagName("p")[0].textContent = "An unknown error has occurred.";
        }

        

    }

}

function validateForm(popup) {
    let x = document.forms["Forms"]
    for (let i = 0; i < x.length; i++) {
        let element = x[i].value;
        if (element == "") {
            // alert("Name must be filled out");
            popup.openModal(false,"");
            return false;
        }
    }
    popup.openModal(true,document.forms["Forms"]["Email-Address"].value);
    return false;
}

let popup = new Modal();
popup.configModal();
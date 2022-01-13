function creatingAlert(){
    window.alert("Click on the Project")
}

function myFunction(){
    let email = document.getElementById("email").value;
    let correctEmail = email.includes("@") ? "It Works! ":"You need to have an @ symbol. ";
    document.getElementById("demo").innerHTML = correctEmail + "Thanks!";
}
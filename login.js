var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Formget" && password == "formget#123"){
alert ("Login successfully");
window.location = "index.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}

function validate1()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var feedback = document.getElementById("feedback").value;
    let reg1 = "@gmail.com";
    let slice1 = email.slice(-10);
    if( name.length<1)
    {
        alert("Please enter a name");
    }
    else
    if (slice1!=reg1 && email.length>10){  
        alert("Please enter a valid e-mail address");
    }
    else
    if( feedback.length<1)
    {
        alert("Please give your feedback");
    }
} 
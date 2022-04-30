function sendMail() {
    var temParams = {
        firstName:document.getElementById("firstName").value,
        LastName:document.getElementById("LastName").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };
    onclick = (sendMail) =>{
        console.log("sucessFully send");
    };
}


document.querySelector(".submit").addEventListener("click", (e)=>{
    e.preventDefault()
    username = document.querySelector(".username").value
    password = document.querySelector(".password").value
    const staticUsername = "admin"
    const staticPassword = "admin"

    if(staticUsername == username && staticPassword == password ){
        window.location.href = "index1.html"
    }
    else{
        alert("WRONG CREDENTIALS")
    }

});
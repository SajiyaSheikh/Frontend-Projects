window.addEventListener("DOMContentLoaded",userLogedIn)

function userLogedIn(){
    console.log("Inside UserLogedIn")

    var isUserLogedIn=JSON.parse(localStorage.getItem("isUserLogedIn"));
    console.log(isUserLogedIn);
    if(isUserLogedIn==true)
    {
        var login=document.querySelector("#right-navbar>a:first-child");
        console.log(login);
        login.innerText="LOGOUT"
        document.querySelector("#right-navbar>a:first-child").addEventListener("click",userLogout)
    }

}

function userLogout()
{
    localStorage.removeItem("isUserLogedIn");
    localStorage.removeItem("userData")

   window.location.href="../Login/login.html"
}
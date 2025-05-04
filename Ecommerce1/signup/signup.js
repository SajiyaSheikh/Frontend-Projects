
document.querySelector("form").addEventListener("submit",signUpFunction);
//userData is array of objects.
var userData=JSON.parse(localStorage.getItem("userCredentials") || "[]");

function signUpFunction(){
    event.preventDefault();
   // console.log("Inside SignUp Function");

   var userEmail=document.querySelector("#email").value;
   var userPassword=document.querySelector("#password").value;
   var userUsername=document.querySelector("#username").value;
   //console.log("User Deatails : "+enteredEmail,enteredPassword,enteredUsername);

   var userObj={};
   userObj.email=userEmail;
   userObj.password=userPassword;
   userObj.username=userUsername;
   //console.log(userObj);

   userData.push(userObj);
   //console.log("UserData :",userData);

   localStorage.setItem(("userCredentials"),JSON.stringify(userData));

   window.location.href="../login/login.html"
}
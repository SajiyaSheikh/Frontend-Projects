
document.querySelector("form").addEventListener("submit",createAccount);

function createAccount(){

    event.preventDefault();
    // console.log("Inside createAccount Function")

   var p1= document.querySelector("#login-container>p");
   //console.log(p1.innerText);
   p1.innerText="CReate An Account";

   var email=document.querySelector(".email");
   email.style.backgroundColor="rgb(193, 190, 190)";

  var pw= document.createElement("label");
   pw.innerText="Password"
  var br1=document.createElement("br");
 
  var password=document.createElement("input");
  password.type="password";
  password.setAttribute("class","input");
  var br2=document.createElement("br");

 var bottom= document.createElement("div");
 bottom.setAttribute("id","bottom-section");

 var p2=document.createElement("p");
 p2.innerText="Sign up for newsletters and personalized shopping reminders about your Wishlist and Shopping Bag."

var submit=document.querySelector(".login-btn");
document.querySelector("#parent-container").insertBefore(pw,submit)
document.querySelector("#parent-container").insertBefore(br1,submit)
document.querySelector("#parent-container").insertBefore(password,submit)
document.querySelector("#parent-container").insertBefore(br2,submit)
document.querySelector("#parent-container").insertBefore(bottom,submit)
}
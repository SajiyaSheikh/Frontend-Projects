
document.querySelector("form").addEventListener("submit",createAccount, {once:true});

function createAccount(){

    event.preventDefault();
    // console.log("Inside createAccount Function")

   var p1= document.querySelector("#login-container>p");
   //console.log(p1.innerText);
   p1.innerText="Create An Account";

   var email=document.querySelector(".email");
   email.style.backgroundColor="rgb(193, 190, 190)";

  var pw= document.createElement("label");
   pw.innerText="Password"
   pw.setAttribute("class","email-label");
  var br1=document.createElement("br");
 
  var password=document.createElement("input");
  password.type="password";
  password.setAttribute("class","input password");
  var br2=document.createElement("br");

 var bottom= document.createElement("div");
 bottom.setAttribute("id","bottom-section");

 var p2=document.createElement("p");
 p2.innerText="Sign up for newsletters and personalized shopping reminders about your Wishlist and Shopping Bag."

 var radioBox=document.createElement("div");
 radioBox.setAttribute("id","radio-box");

 var r1=document.createElement("input");
 r1.type="radio"
 r1.value="menswear"

 var r1Label=document.createElement("label")
 r1Label.innerText="MENSWEAR";
 r1Label.setAttribute("class","radio-label")

 var r2=document.createElement("input");
 r2.type="radio"
 r2.value="womenwear"

 var r2Label=document.createElement("label")
 r2Label.setAttribute("class","radio-label")
 r2Label.innerText="WOMENWEAR";

 var r3=document.createElement("input");
 r3.type="radio"
 r3.value="not now"

 var r3Label=document.createElement("label")
 r3Label.setAttribute("class","radio-label")
 r3Label.innerText="NOT NOW";

 radioBox.append(r1,r1Label,r2,r2Label,r3,r3Label);
 bottom.append(p2,radioBox);

 //var br3=document.querySelector("br");
 var backButton=document.createElement("button")
 backButton.setAttribute("id","back-button");
 backButton.innerText="BACk"

 var bottomPara=document.createElement("div")
 bottomPara.setAttribute("id","bottom-para");

 var desc1=document.createElement("p")
 desc1.innerText="When you create an SSENSE account, we collect your email and other personal data  to enhance your shopping experience and, subject to your agreement, to provide you with exclusive email updates, promotions and notifications. We may also use third party search engines and social media platforms to deliver our updates, promotions and notifications to you."

 var desc2=document.createElement("p")
 desc2.innerText="You may unsubscribe at any time."

 var desc3=document.createElement("p")
 desc3.innerText="To find out more, please visit our Privacy Policy."

 bottomPara.append(desc1,desc2,desc3);


var submit=document.querySelector(".login-btn");
submit.value="create an account"
document.querySelector("#parent-container").insertBefore(pw,submit)
document.querySelector("#parent-container").insertBefore(br1,submit)
document.querySelector("#parent-container").insertBefore(password,submit)
document.querySelector("#parent-container").insertBefore(br2,submit)
document.querySelector("#parent-container").insertBefore(bottom,submit)
document.querySelector("#parent-container").append(backButton,bottomPara)

document.querySelector("form").addEventListener("submit",userLogin,{once:true})

}

var user=JSON.parse(localStorage.getItem("userData"))||[];
var isUserLogedIn=false;
function userLogin(){
    event.preventDefault();
    console.log("Inside userLogin Function");
    var email=document.querySelector(".email").value
    console.log("email:",email);

    var password=document.querySelector(".password").value;
    console.log("Password:",password)

    var userObj={
        userEmail:email,
        userPassword:password
    }

    user.push(userObj);

    localStorage.setItem("userData",JSON.stringify(user));
    localStorage.setItem("isUserLogedIn",true);
    window.location.href="../Home/home.html"
}

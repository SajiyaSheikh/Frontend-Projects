document.querySelector("#form-container").addEventListener("submit",loginFunction);


function loginFunction()
{
    event.preventDefault();
    //console.log("Inside Login Function");

    var enteredEmail=document.querySelector("#email").value;
    var enteredPassword=document.querySelector("#password").value;
    //console.log(enteredEmail,enteredPassword);

    //userData is an array of stored objects
    var userData=JSON.parse(localStorage.getItem("userCredentials"));
    //console.log("userDta:",userData);
    
    var successfullLogin=false;
    for(var i=0;i<userData.length;i++)
    {
        console.log("UserData :",userData[i]);
        if(userData[i].email==enteredEmail && userData[i].password==enteredPassword)
        {
           // console.log("Login Succesfull !");
             alert("Login Successfull !");
             window.location.href="../home/home.html";
             successfullLogin=true;
             break;
        }
    }
    if(successfullLogin==false){
        alert("Login failed. Invalid Credentials !");
    }
}
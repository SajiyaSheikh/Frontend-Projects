
var cartItems=JSON.parse(localStorage.getItem("cart") ||"[]");
//console.log("cartItems",cartItems);

var total=cartItems.reduce(function(sum,elements,index,arr){
  return sum+Number(elements.price);
},0)
console.log(total)
var cartLength=cartItems.length;
var totalItems=document.querySelector("#totalitems");
totalItems.innerText=`You Have Added ${cartLength} Items`

var totalPrice=document.querySelector("#total")
totalPrice.innerText=`Total Amount Is : ${total} Rs`

// document.querySelector("#paybutton").addEventListener("click",processPayment)

// function processPayment(){


// }


cartItems.map(function(elements,index){

    var parentBox=document.createElement("div");
    parentBox.setAttribute("class","parent-box");

    var box1=document.createElement("div")
    
    var img=document.createElement("img");
    img.src=elements.image_url;
    box1.append(img);

    var name1=document.createElement("p");
    name1.innerText=elements.name;

    var box2=document.createElement("div")
    box2.setAttribute("class","box2")

    var p1=document.createElement("p");
    p1.innerText=`Price is ${elements.price}`

    var p2=document.createElement("p")
    p2.innerText=elements.strikedoffprice

    var btn=document.createElement("button")
    btn.innerText="Remove"
    btn.addEventListener("click",function(){
      removeItemsFromCart(elements,index);
    })

    box2.append(p1,p2, btn);
    parentBox.append(box1,name1,box2)
    document.querySelector("#container").append(parentBox);

})


function removeItemsFromCart(elements,index){
    cartItems.splice(index,1);
     console.log("updated:",cartItems);
     localStorage.setItem("cart",JSON.stringify(cartItems));
     window.location.reload();

}
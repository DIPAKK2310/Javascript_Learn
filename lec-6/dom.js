// let div = document.querySelector('div')
// console.log(div)

// let id = div.getAttribute("id")
// console.log(id)

// let id = box.setAttribute("job","id")
// console.log(id)

// ------------------------------------------------------------------------------------------------------------------------
//------------------------------//Inserting Element//-----------------------------------------------------------------

//1)Create element then modify add element

// let btn = document.createElement("button")
// btn.innerText="This is a button"
// console.log(btn)


// let div =document.querySelector("div")
// // div.append(btn)  //At last of this div
// div.prepend(btn) //At start of this div

// let div =document.querySelector("div")
//  div.before(btn)  //At start of this div outside
// div.after(btn) //At las of this div outside 


// let newBtn = document.querySelector("button")
// newBtn.remove() //Remove to node 
//--------------------------------------//Practice Questions//----------------------------------------------------------------------------------
// 1)create a new btn element
// 2)Give it a text "Click me"
// 3)Backgroundd color of red and text color of white
// 4)Insert as first element of body


let newBtn= document.createElement("button")
newBtn.innerText="Click me"
newBtn.style.color="white";
newBtn.style.backgroundColor="red";


let body = document.querySelector("body")
body.prepend(newBtn)




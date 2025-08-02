// let btn =document.querySelector("button")
// // Mouse Events-->

//  btn.onclick= ()=>{
//      console.log("Button is clicked")
//  }
// btn.ondblclick= ()=>{
//     console.log("Button is clicked 2x")
// }

// btn.onmouseover= ()=>{
//     btn.style.backgroundColor="green"
// }
// btn.onmouseleave= ()=>{
//     btn.style.backgroundColor="purple"
// }

// //Keyboard Events -->


// btn.onkeydown= ()=>{
//    console.log("You pressed the key")
// }


// // Form Events ------>

// const form = document.querySelector("form")

// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     alert("Form is submitted successfully!")
// })

//--------//Toggle light/dark mode //---------------------------
 let btn = document.querySelector("button")
 let currMode = "light"

 btn.addEventListener("click",()=>{
    if (currMode==="light") {
        currMode ="dark"
        document.querySelector("body").style.backgroundColor="black"
        document.querySelector("button").style.color="white"
        document.querySelector("button").style.backgroundColor="black"
    } else {
        currMode="light"
        document.querySelector("body").style.backgroundColor="white"
        document.querySelector("button").style.color="black"
        document.querySelector("button").style.backgroundColor="white"
    }
 })
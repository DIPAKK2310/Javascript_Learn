const URL = "https://catfact.ninja/fact";
const factPara = document.querySelector("#fact");
btn = document.querySelector("#btn");

const getFacts = async ()=>{
    try{
        console.log("Fetching data from API...");
       let response = await fetch(URL);
       console.log("Fetching data from api completed")
       let data = await response.json();
    //    console.log("Fetching facts from api completed: ",data.fact)
       factPara.innerText = data.fact;
       console.log("Fact displayed in the paragraph element")
    }catch(err){
        console.log("Error in fetching",err)
    }
}

addEventListener("click",getFacts)



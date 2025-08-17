const URL = "https://catfact.ninja/fact";


const getFacts = async ()=>{
    try{
        console.log("Fetching data from API...");
       let response = await fetch(URL);
       let data = await response.json();
       console.log("Fetching data from api completed")
       console.log("Fetching facts from api completed: ",data.fact)
    }catch(err){
        console.log("Error in fetching",err)
    }
}


getFacts();

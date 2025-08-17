//-------------------------//setTimeout//------------------------------------//

// setTimeout is used time out the function in bound time that are given ==> In simple word it make sure the function run after certain time

        // function hello (){
        //     console.log("Hello")
        // }

        // setTimeout(hello,6000)


// ----------------------------------//Callbacks //----------------------- 
// A caallback is a function that is passed as an argument to another function and is executed after the completion of that function.

// function downloadFile(url,callback){
//  console.log("downloadding file from "+url);
//  setTimeout(()=>{
//         console.log("Download completed from "+url);
//         callback(url)
//  },2000)
// }
// function processingFile(fileUrl){
//         console.log("Processing file"+fileUrl)
// }


// downloadFile("http://example.in",processingFile)

// Output:

// downloadding file from http://example.com
// Download completed from http://example.com
// Processing filehttp://example.com


// ----------------------------------//Promises //----------------------- 
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
/*
Mini Exercise 2:

Create a Promise fetchData() that:

Waits 1 second

Resolves with “Data fetched successfully”

Log the result with .then

*/

const fetchData = ()=>{
        return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                        let succes = true;
                       if(succes) resolve("Data fetched successfully");
                       else reject("❌Failed to fetch data");
                        
                                
                        
                },1000)
        })
}

fetchData().then((result)=>{
        console.log(result)
}).catch((error)=>{
        console.error("Error:", error);
})


// ----------------------------------//Promises //----------------------- 
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
/*Mini Exercise 3:

Rewrite your fetchData() from Mini Exercise 2 using async/await. */



const fetchDataAync = ()=>{
        return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                        let succes = true;
                       if(succes) resolve("Data fetched successfully");
                       else reject("❌Failed to fetch data");
                        
                                
                        
                },1000)
        })
}

async function Data(){
  console.log("Data fetching started...");
  try {
        const complete = await fetchDataAync();
  console.log(complete);
  } catch (error) {
    console.error("Error: ", error);      
  }
}

Data();
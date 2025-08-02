//---------------------------//Loops======>//--------------------------------------------------------------------------------------------------------------

                        // 1)For-Loop.
                        // 2)While-Loop.
                        // 3)Do-while Loop. 
                        
//-------------------------//For loop //---------------------------------------------------------
//  for (let count=1;count<=1000;count++){
//   console.log("Dipak")
//  }
//  console.log("Loop ended")

// Flow of for loop===> initialization=>condition if true then => Block of code run => updation=> again condition check
// ----------------------------------------------------------------------------------------------------------

//for calculate sum of 1 to 5

// let sum =0;
// for(let i=1;i<=5;i++){
//     sum+=i
// }
// console.log("Sum = ",sum)
// ----------------------------------------------------------------------------------------------------------
// for calculate sum of 1 to n;
// let sum =0;

// let n=5; 
// for(let i=1;i<=n;i++){
    
//     sum+=i
// }
// console.log("Sum =",sum)

// -----------------------------------------------------------------------------------------
//-------------------------//While loop //------------------------------------------------------------------------
//   Instruction/Rules for writing while loop 
// 1)initialization is done before loop.
// 2)stoping condition after while word====> while(Condition)
// 3)updation done in the block of code   
//     example-- 
        // let i =1;
        // while(i<=5){
        //     console.log("i =",i)
        //     i++
        // }
// --------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------//Do-While loop //------------------------------------------------------------------------
// instruction/Rule--
// 1)it allways runs one because stoping condition checksat ends
// 
        //  let i =20;
        //  do{
        //      console.log("Dipak")
        //      i++;
        //  }
        //  while(i<=10);


        //  it gets output = Dipak only once because condition is false

// --------------------------------------------------------------------------------------------------------------------------------------------
// Practice Question--------->

//QS) Print all even number from 0-100

// for(i=0;i<=100;i++){
//  if(i%2===0){


//      console.log("i =",i)
//  }
// }
// ---------------------------------------------------------------------
// Qs) Create a game where you start with any ranndom game number .Ask the user to keep guessing the game number untill the user enters correct number .

// let gameNum=25;
// let userNum= prompt("Gues the Game Number")

// while(userNum !=gameNum){
//     userNum = prompt("Gues the right number again")

// }
// console.log("you guest it right")

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
//--------------------------------------//String//---------------------------------------------------------

// Imp -----Strings are imutable mean we can not change a string to change we have to create a new one
//let str ="dipak"
// String Lenght
// str.length; // output is 5 because length of string is 5

//  String Indexing-----Indexing start from 0
//str[0]; // output is d
//str[1]; // output is i        
//console.log(str)  
  //-----//Template Literals (String)---------------------------------------------------

//   let str = `Dipak`
//  console.log( str)
// Why use the template literals because we can access  the keys in same line or sting in shorter way simple way
//Example----->console.log(`My name is ${str}`)
             //--------------------------------------//String Methods//---------------------------------------------------------
//  There are methods / function built in to manipulate string
          // let str = "dipak"
        // toUppercase--->
        //  console.log(str.toUpperCase())===>DIPAK it gives to console to use in code we have to use it in new string 
        // let strNew = str.toUpperCase() ===>Now it give "DIPAK" without console.log
        // Like-wise for toLowerCase....
//----------------------//Trim====>//-----------------------------------
      // It clear whitespaces form start and end of string but not middle space
        // let str = " dipak is get 8Lpa "

        // console.log(str.trim())

 //----------------------//Slice====>//-----------------------------------
//  it return some part of string which is given a start and end value but end value is inclusive mean if gives 3 it return upto 2
          // str.slice(start,end?)
          // let name = "Dipak khare"
          // let str = name.slice(5,11);
          // console.log(str) ===>Gives the output Khare because of the start value 5 and end value which is 11 


//----------------------//Concat====>//-----------------------------------
    // concat mean addition of two string 
    // For adding/concatinating two strings we use concat or + sign
  //   let str = "dipak";
  //   let str1 = " Khare"
  //    let str2 = str.concat(str1)
  //   let str2 = str + str1====> can use this also
  //  console.log(str2)

//----------------------//Replace====>//----------------------------------- 
// in string to change some value by giving search value with new value
      // .replace(serchVal,newVal)
      // let str = "flower"
      // console.log(str.replace("w","v"))
      // output==>flover

//----------------------//charAt====>//---------------------------------------------------------------------
      //  charAt===>to findout charachter based on indicess
      // let str ="I love FE" 
      // console.log(str.charAt(0))===> output ===> I

// -------------------------------------------------------------------------------
    // Practice Question ======>
    // Qs-1) Prompt the user to enter their full name. Generate a username for them based on the input. Start username with @  and their full name & ending with fullname lenght
    let fullName = prompt("Enter your full name ")
    
    let userName = "@" + fullName +fullName.length

    console.log(userName)

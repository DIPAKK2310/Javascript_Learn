// Arithmetic operators 
// List of arithmetic operators in JavaScript
//-------------------------------------------------------------------------------------------------------------------------------------- 
// + addition ,++  increment

// let a = 5;
// let b = 5;
// console.log("a +b =",a+b);

// increament ++
// let a= 5;
// a++
// console.log("a+ =",a);

// post and pre increment
//   let a = 5;   
//  console.log("a++ = ",a++); // post increment
//  console.log(a)

//  output ===>first it will print the variable at it is on next line if we csl a++ = 5
//it will increment the value of a to 6

    // --------------------------------------------------------
//    let a =5;
 // console.log("++a = ",++a); // pre increment
//  it directly make increament then and then it prints
   


//-------------------------------------------------------------------------------------------------------------------------------------- 

// - division,
// let a= 5;
// let b = 7;
// console.log("a - b = ",a-b)

//  --  decrement
// let a= 5;
// a--
// console.log("a =",a);
// Pre & Post decrement

//----------------//Pre decrement--------------
// let a= 5
// console.log("--a = ",--a); // pre decrement
// // it will decrement the value of a to 4 and then print it
//-------------------------------------------------------------------------------------------------------------------------------------- 
  //--------------- //Post decrement---------------------
//        let a= 5;
//  console.log("a-- = ",a--); // post decrement
// // it will print the value of a as it is 5 
//    console.log(a)
// //  then decrement it to 4
 
//----------------------------------------------------------------------------------------------------------
//  * multiplication, 
// let a =3;
// let b= 2;
// console.log("a *b= ",a*b)
//----------------------------------------------------------------------------------------------------------


// ** Exponentiation  (mean 2**3 =2 raised to the power of 3)

//  let a =6;
//  let b = 2;
//  console.log(a**b)
//  a is number after ** that it is a power to a

//-------------------------------------------------------------------------------------------------------------------------------------- 

//   division
//  let a = 10;
//  let b = 2;
//  console.log("a / b =", a / b);

//-------------------------------------------------------------------------------------------------------------------------------------- 

//  % modulus (remainder of division)
// let a=5;
// let b=2;
// console.log("a % b =", a % b); // Output: 1, because    // 5 divided by 2 is 2 with a remainder of 1

//--------------------------------------------------------------------------------------------------------------------------------------
//-----------------------//*Assignment Operator    *//---------------------------------------------------------------
          //  = (Equal to operator ) ====> is is to assign right side value to left side variable.

          // let a = 5 (right side value 5 propogate to left side variable[right side value store in left side variable])
          // let a =5;
          // console.log(a)
          // output ====> 5
        //  --------------------------------------------------------

            // += operator (mean a=a+ value of right)
            // let a =1;
            // a +=2
            // console.log(a)
            // output ===> 3 how (a=1 and a+= a+(and the value) so  a +=2 ==> a=a+2 ==> a=1+2=3)
        //-----------------------------------------------------------
            // -= operator (mean a=a- value of right)
            // let a =4;
            // a -=2
            // console.log(a)
            // output ===> 2 how (a=4 and a-= a - (and the value) so  a -=2 ==> a=a-2 ==> a=4-2=2)
        //-----------------------------------------------------------
           // *= operator (mean a=a* value of right)
            //  let a =4;
            //  a *=2
            //  console.log(a)
            // output ===> 8 how (a=4 and a*= a * (and the value) so  a *=2 ==> a=a*2 ==> a=4*2=8)
        //-----------------------------------------------------------
           // %= operator (mean a=a% value of right)
            //  let a =4;
            //  a %=2
            //  console.log(a)
            // output ===> 0 how (a=4 and a%= a % (and the value) so  a %=2 ==> a=a%2==>a=4%2=0)
        //-----------------------------------------------------------
           // **= operator (mean a=a** value of right)
            // let a =4;
            // a **=2
            // console.log(a)
            // output ===> 16 how (a=4 and a**= a ** (and the value) so  a **=2 ==> a=a**2==>a=4**2=16)

//--------------------------------------------------------------------------------------------------------------------------------------------------------
//-----------------------//*Comparision Operator    *//---------------------------------------------------------------


            // == Equalt to operator (mean a==b  [Left a value is compared to right value b])
            //  let a =5;
            //  let b =2
            //  console.log("a==b ",a==b)
            // output ===> false  how (a=5 and b=2(it compares  the value a & b) so  a ==b ==> 5==2 ==> Not equal ==>False)
        //-----------------------------------------------------------
            // != Not equal to operator (mean a!=b [value of left is not equal to right ] if it not equal gives true otherwise false)
            //  let a =4;
            //  let b =2
            //  console.log("a!=b ", a!=b)
            // output ===> True how (a=4 and b= 2  (it compares for condition value of left is not equal to value of right if not equal gives true otherwise false) so  a !=b ==> 4!=2 ==> Not equal =True)
        //-----------------------------------------------------------
           // === Equal to and type  operator (mean a===b value of left compares to value of right with its type if value aswell as their type is same true otherwise false)
            //  let a =4;
            //  let b=4;
            //  console.log("a===b ",a===b )
            // output ===>True  how (a=4 and b=4 ( It compares  value of left with value of right and it's type ) so  a ===b ==> 4===4 ==> True and types are same [Numbers])
        //-----------------------------------------------------------
           //  !== Not Equal to and type  operator (mean a!==b value of left and value of right and their types if tany one not matches like values/type gives true if both matches false)
            //  let a =4;
            //  let b ="4"
            //  console.log("a!==b ",a!==b)
            // output ===> True how (a=4 and b="4" (left value compare with right one and their types if any one not matches give true else false) so  a !==b ==> 4!=="4"==>True ==> because values same but types are one is number and second is number)
        //-----------------------------------------------------------
           //  > Greater than  operator (mean a!==b value of left and value of right and their types if tany one not matches like values/type gives true if both matches false)
            //  let a =5;
            //  let b =4
            //  console.log("a>b ",a>b)
            // output ===> True how (a=5 and b=4 (left value compare with right one if a is greater value than b output is true else false) so  a >b ==> 5>4==>True ==> because values of a is greater than b )
        //-----------------------------------------------------------
           //  < less than  operator (a=4,b=3 value of left greater than  value of right i.e false)
            //   let a =4;
            //   let b =3
            //   console.log("a<b ",a<b)
            // output ===> False how (a=4 and b=3 (left value compare with right one i.e false) so  a !==b ==> 4!=="4"==>True ==> because values of a is greater than b )
        //-----------------------------------------------------------
           //  => Greater Than equal to  operator (mean a!==b value of left and value of right and their types if tany one not matches like values/type gives true if both matches false)
            //   let a =6;
            //   let b =4
            //   console.log("a=>b ",a=>b)
            // output ===> True how (a=6 and b=4 (left value compare with right one a is greater than b true else false) so  a !==b ==> 4!=="4"==>True ==> because values same but types are one is number and second is number)
        //-----------------------------------------------------------
           // <= Less Than Equal to operator (mean a!==b value of left and value of right and their types if tany one not matches like values/type gives true if both matches false)
            //   let a =1;
            //   let b =4
            //   console.log("a!==b ",a!==b)
            // output ===> True how (a=4 and b="4" (left value compare with right one and their types if any one not matches give true else false) so  a !==b ==> 4!=="4"==>True ==> because values same but types are one is number and second is number)

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------//Logical Operators  //---------------------------------------

        //  && Logical AND Operator
        // let a =6;
        // let b=5;
        // let cond1 =a >b;
        // let cond2 = a===6;
        // console.log("cond1&& cond2", cond1 && cond2)
    //---------------------------------------------------------   
        //  || Logical OR Operator
        // let a =6;
        // let b=5;
        // let cond1 =a >b; //True
        // let cond2 = a===5;//False
        // console.log("cond1 || cond2", cond1 || cond2)
    //---------------------------------------------------------   
        //  || Logical OR Operator
        // let a =6;
        // let b=5;
        // let cond1 =a >b; //True
        // let cond2 = a===5;//False
        // console.log("cond1 || cond2", cond1 || cond2)
    //---------------------------------------------------------   
        //  ! Logical NOT Operator
        //  let a =6;
        //  let b=5;
        //  let cond1 =a >b; //True
        //  let cond2 = a===5;//False
        //  console.log("!(a>b)", !(a>b))
//-------------------------------------------------------------------------------------------------------------------------------------- 
//-----------------------//Comditional Statements//-------------------------------------
        // if statement  
        // [Check for the condition if true then block of code will run otherwise not run]
        // let age = 24
        //  if (age>18) {
        //     console.log("You can Vote")
        //  }
    //--------------------------------------------------------------------------------
        // if-else statement  
        // [Check for the condition if true then first block of code will run otherwise second block of code will run]
        //  let age = 15
        //   if (age>18) {
        //     console.log("You can vote")
        //   }else{
        //     console.log("You can't vote ")
        //   }
    //--------------------------------------------------------------------------------
        // [Check for the condition if true then first block of code will run otherwise second block of code will run]
    //      let age = 15
    //       if (age >18) {
    //         console.log("You can get driving license")
    //       } else if (age=>14) {
    //         console.log("You can get learners permit")
    //       }else {
    //        console.log("You'r age is not legal for driving") 
    //       }
    // //--------------------------------------------------------------------------------
    //--------------//Ternary operator    //---------
//     let age = 25;

//    let res = age > 18 ? "Adult" : "Child";
//    console.log(res)

// -------------------------------------Exersise---------------------------------------------------------------
// Q)Get user to input a number using pormpt ("Enter a number ").Check the number is multiple of 5 or not.
// let num= prompt("Enter a number")
// ;if (num%5 ===0) {
//     console.log("num is multiple of five")
// } else {
//     console.log("num is not multiple")
// } 
        //------------------------------------------------------------------------------------------
// Q)Write a code which can give grades to students according to their score
let score =30;
if (score >80) {
    console.log("You got A+")
} else if(score >70){
    console.log("You got B")
}
 else if(score >60){
    console.log("You got C")
}
 else if(score >50){
    console.log("You got D")
}else{
    console.log("You got F")
} 





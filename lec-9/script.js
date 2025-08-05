//----------------//Objects //------------------------------------------------ 
// const employee = {
//     calTax (){
//         console.log("Tax rate is 10%")
//     }
// }

// const karanArjun ={
//     salary:20000,
// }

// const Meena = {
//     salary : 15000,
// }

// const sheena = {
//     salary: 8000,
// }

// karanArjun.__proto__=employee;
// Meena.__proto__=employee;
// sheena.__proto__=employee;


//----------------//Class //-------------------------------------------------------------
//Class is another or say program-code template for creating objects

// class myClass{

//     hello(){
//         console.log("Hi there")
//     }
//     myMethod(){
//         console.log("My Method")
//     }
// }

// const obj = new myClass("New method")

// obj.myMethod();

//   class Tesla {
//     constructor(brand,mileage){
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start(){
//         console.log("start")
//     }

//     stop(){
//         console.log("stop")
//     }
//   }


//   let fortuner = new Tesla("ferrari",120) 
//     console.log(fortuner)

                    /*
OutPut ====>
                    Tesla {brand: 'ferrari', mileage: 120}
                    brand
                    : 
                    "ferrari"
                    mileage
                    : 
                    120
                    [[Prototype]]
                    : 
                    Object */

//   let lexus = new Tesla("Range Rover",90)
//   console.log(lexus)
                            /*
OutPut ====>
                            Tesla {brand: 'Range Rover', mileage: 90}
                            brand
                            : 
                            "Range Rover"
                            mileage
                            : 
                            90
                            [[Prototype]]
                            : 
                            Object

                            */



//---------------------------//Inheritance//----------------------------------------------//
// ✅ What is Inheritance?
//  Inheritance is a feature where one class (child) gets properties and methods from another class (parent).

          // class Parent {
          //   parentMethod() {
          //     console.log("From parent");
          //   }
          // }

          // class Child extends Parent {
          //   childMethod() {
          //     console.log("From child");
          //   }
          // }

          // const obj = new Child();
          // obj.parentMethod();
          // obj.childMethod();

// Method Overriding;- If parent and child has same methods in this case child's method will be used

      // class father{
      //   sleep(){
      //     console.log("I am sleeping")
      //   }
        
      //   work(){
      //     console.log("HI")
      //   }

      //   }

      //   class child extends father{
      //     work(){
      //       console.log("I am working")
      //     }
      //   }


      //   let obj = new child();// so in this childs work method will run not the fathers
//-------------------------//Super Keyword//--------------------------------------------------
// Super Keyword is used to call the constructor of  its parents class to  access the parent's properties & methods.
        //         class Parent {
        //   constructor() {
        //     this.someValue = 45;
        //   }
        // }

        // class Child extends Parent {
        //   constructor(someValue, childValue) {
        //     super(someValue); // calls Parent's constructor
        //     this.childValue = childValue;
        //   }
        // }
        //   let obj = new Child("13");




//--------------------------------------//Practice Questions//---------------------------------------

// Q-1) You are creating a website for your college. Create a class User with 2 propertirs , name & email. It also has a method  called viewData () that allows user to view website data.

class User{
  constructor(Name,email){
    this.Name = Name;
    this.email = email;

  }
  viewData(){
    console.log("You are in website data stored")
  }
}




// Q-2) Create a new class called admin  which inherites from user .Add new method called editData to admin that allow it to  edit website data .


class Admin extends User{
 constructor(Name,email){
     super(Name,email)
 }
  editData(){
 
    console.log("Website Edited")
  }
}


let obj = new Admin("Dipak","giaPaige69@gmail.com");
console.log(obj.Name);//Dipak
console.log(obj.email);//giaPaige69@gmial.com

obj.viewData()//You are in website data stored
obj.editData()//Website Edited



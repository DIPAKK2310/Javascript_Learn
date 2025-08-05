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

class father{
  sleep(){
    console.log("I am sleeping")
  }
  
  work(){
    console.log("HI")
  }

  }

  class child extends father{
    work(){
      console.log("I am working")
    }
  }


  let obj = new child();// so in this childs work method will run not the fathers
  


//---------------------//Arrays//-------------------------------------------------------
// So arrays are mutable 
// to print an array we can use arr.lenght 

// let marks = [33,45,65,34,54]
// console.log(marks)
// typeof array is Object
                    //--------------//Looping on arrays//---------------

                    //---------//for loop//--------
                    //  let heroes = ['Iron','batman','superman','spiderman','antman','lucifer','thor','hulk']

                    // for (let i=0;i<heroes.length;i++){
                    //     console.log(heroes[i])
                    // }
                    //It prints all the elements of the array
                
                    //---------//for of loop//---------------
                    // for (let hero of heroes){
                    //     console.log(hero)
                    // }
// Qs-1)For a given array with marks ofstudets [85,97,44,37,76,60] find the average marks of the entire class
            //  let marks = [85,97,44,37,76,60]
            // let sum = 0
            // for (let mark of marks){
            //     sum += mark
            // }       
            // let average = sum / marks.length
            // console.log(`Average marks of the class is: ${average}`)


// Qs-2)For a given array with prices of 5 items [250,645,300,900,50] All items have an offer of 10% off on them .Change the array tostore final price after applying offer. 

// let items = [250,645,300,900,50]
// for (let i=0;i<items.length;i++){
//     offer = items[i]/10
//     items[i] -= offer 
// }
// console.log(items)
//-----------------------//Arrays Methods//------------------
// 1)Push --Add at the end of an array
        // let items =[ 'biscuit','bread','garlic','tomato']
        // items.push('paint')
        // console.log(items)
// 2)Pop --Delete at the end of an array
    // items.pop() ====> output ===>  'biscuit','bread','garlic'

// 3)Concat --Concat join multiple arrays
        //   let heros = ["BlackPanther", "Spiderman","Batman"]
        //   let heroins = ["BlackWidow", "SpiderWoman","CatWoman"]
        //   let army = heros.concat(heroins)
        //   console.log(army)
// 4)unshift --unshift add at the start of an array
    //  let fashion = ["shoes","Watch","Socks"]
    //  fashion.unshift("Jeans")
    // console.log(fashion) ====> [ 'Jeans', 'shoes', 'Watch', 'Socks' ]
      

// 5)shift --shift remove  at the start of an array
//  let fashion = ["Jeans","shoes","Watch","Socks"]

//     fashion.shift()
//     console.log(fashion)


// 6)slice(startIdx,endIdx) -- It changes peace of array(cut array).It doesn't change original array
//  It take two argument first is starting index from where you want to change array to ending index untill this but endIdx is inclusive mean if you want until 2 it change until 1
        // let fruits =["Mango","Apples","Peach","Orange"]
        // console.log(fruits.slice(0,1))  ===> it gives "mango" o t0 1 but 1 enclusive so 0

// 7)Splice(startIdx,delCount,newEl1) --it add,remove nad replace in the array 

        //  let fruits =["Mango","Apples","Peach","Orange"]
        //  fruits.splice(0,2,"Jam","Cam")
        //  console.log(fruits)  Output===>  [ 'Jam', 'Cam', 'Peach', 'Orange' ]
//------------------------------------------------------Question------------------------------------------------------------------
// Create an array to store companies  -> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
// a)Remove the first company from the array
// b)Remove uber & add ola on it's place 
// c)Add amazon at the end 
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift()

companies.splice(1,1,"Ola")
companies.push("Amazon")
console.log(companies)
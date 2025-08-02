const employee = {
    calTax (){
        console.log("Tax rate is 10%")
    }
}

const karanArjun ={
    salary:20000,
}

const Meena = {
    salary : 15000,
}

const sheena = {
    salary: 8000,
}

karanArjun.__proto__=employee;
Meena.__proto__=employee;
sheena.__proto__=employee;
const Base_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies";
const dropdowns = document.querySelectorAll('.dropdown select');
let btn = document.querySelector('.btn');
let result = document.querySelector('.result');
const message = document.querySelector('.msg');
const arrowBtn = document.querySelector('.fa-arrow-right-arrow-left')
for(let select of dropdowns){
     
     for(let currCode in countryList){
      let newOption = document.createElement('option');
      newOption.innerText = currCode;
      newOption.value = currCode;
      if (select.name === "from" && currCode === "USD") {
         newOption.selected = true;
      } else if(select.name === "to" && currCode === "INR"){
        newOption.selected = true;
      }
      select.appendChild(newOption);   
     }
     select.addEventListener('change', (evt)=>{
    
         updateFlag(evt.target);
     });
 }


 arrowBtn.addEventListener("click",(evt)=>{
    let fromSelect = document.querySelector("select[name='from']")
    let toSelect = document.querySelector("select[name='to']")

    let temp = fromSelect.value
     fromSelect.value = toSelect.value
     toSelect.value = temp;


     updateFlag(fromSelect);
     updateFlag(toSelect);
     getExchangeRate();
 })


 const updateFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

    let img = element.parentElement.querySelector('img');
    img.src = newSrc;
}

async function getExchangeRate(showLoading=true){
    let from = document.querySelector('.from select').value;
    let to = document.querySelector('.to select').value;
    let amount = document.querySelector('.amount input').value; 
    if(from === to){
        result.innerText = "Please select different currencies";
            return;
        }  
        if(amount === "" || isNaN(amount) || amount <= 0){
            amount = 1;
            document.querySelector('.amount input').value = 1;// Default to 1 if input is invalid
            result.innerText = "⚠️ Invalid input, defaulted to 1";            
        }
        if(showLoading){
            result.innerText = "⏳Converting...";

        }
        let url =`${Base_URL}/${from.toLowerCase()}.json`

        try {
            let response = await fetch(url);
            let data = await response.json();
            
    // Example API response structure:
    // { "usd": { "inr": 82.5 } }
    let rate = data[from.toLowerCase()][to.toLowerCase()];
    let finalAmount = (amount * rate).toFixed(2);

    result.innerText = `${amount} ${from} = ${finalAmount} ${to}`;
        } catch (error) {
            result.innerText = "❌ Error fetching conversion rate. Please try again later.";
            console.error(error)
        }
    }
    
    btn.addEventListener('click',async (evt) =>{
    evt.preventDefault();// Prevent form submission
    getExchangeRate(true);// Call the function to get exchange rate
      
        
})


window.addEventListener('load', () => {
    document.querySelector('.amount input').value = 1;// Default to 1 if input is invalid
     getExchangeRate(false); // Fetch initial exchange rate on page load

}   );
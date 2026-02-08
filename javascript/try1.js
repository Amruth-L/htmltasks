function hideLoadingSpinner(){
    console.log("Loading spinner hidden");
}

async function getWeather(){
try{
    let response=await fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric");
if(!response.ok){
    throw new Error("Oops!That city doesn't exist in our records");
}
let data=await response.json();
console.log("temperature:",data.main.temp,"C");
}
catch(error){
console.log("Error caught :" + error.message);
}
finally{
    hideLoadingSpinner();
    console.log("Attempt finished");
}}
getWeather();
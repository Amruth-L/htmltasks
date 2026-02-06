async function brokencoffee() {
console.log("ordering coffee..");
 await new Promise(resolve=>setTimeout(resolve,2000));
console.log("coffee is ready ! Now i can drink it");
}
brokencoffee();

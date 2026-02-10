async function orderPizza(){
console.log("Ordering piza....");
await new Promise(resolve=>setTimeout(resolve,3000));
console.log("pizza is here! for youu ");
}
console.log("1.I'm hungry ");
orderPizza();
console.log("2. I'm cleaning my room while i wait");

async function boilWater(){
console.log("putting water on to stovee....");
await new Promise(resolve=>setTimeout(resolve,4000));
console.log("water is boiling!!");
}
boilWater();
console.log("I am chopping vegetables...");


async function youTube(){
    console.log("Fetching the Video from chrome !!");
 await new Promise(resolve=>setTimeout(resolve,5000));
 console.log("your video is been fetched!!");
}
console.log("Showing comments and related videos");
youTube();


async function weatherApp(){
    console.log("Saved Cities..");
    console.log("fetching the live temperature from the internet ");
await new Promise(resolve=>setTimeout(resolve,5000));
console.log("Live temperature received.....");
}
console.log("opened the app ");
weatherApp();


// const searchhistory=["Batman",",","Intersteller",null,"Inception",undefined];
// const cleanhistory=searchhistory.filter(item=>item);
// console.log(cleanhistory);
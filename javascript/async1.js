async function orderPizza(){
console.log("Ordering piza....");
await new Promise(resolve=>setTimeout(resolve,3000));
console.log("pizza is here! for youu ");
}
console.log("1.I'm hungry ");
orderPizza();
console.log("2. I'm cleaning my room while i wait");

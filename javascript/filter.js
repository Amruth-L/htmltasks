// const orders=[
//     {
//         name:"cheese pizza",price:10},
//         {name:"pepperoni pizzza",price:15},
//         {name:"veggei pizza",price:12},
//         {name:"super deluxe pizza",price:25}
// ];
// const premiumpizas=orders.filter(pizza=>pizza.price>14);
// console.log(premiumpizas);

// const newPrize=orders.map(pizza=>{
//     return{
//        name:pizza.name,
//         price:pizza.price+5

//     };

// });
// console.log(newPrize);

// const cartprices=[100,200,300,400,500];
// const blackfriday=cartprices.map(price=>price*0.5);
// console.log(blackfriday);

const updatedcart=cartprices.map(price=>{
    return{
        originalPrice:price,
        salePrice:price*0.5,
        isDiscounted:true
    };
});
console.log(updatedcart);
function sayhello(name){
    return "hello,"+name+"!";
}
console.log(sayhello("amruth"));

function square(number){
    return number*number;

}
console.log(square(4));


function agecheck(age){
if(age>=18)
{
    return true;
}
else{
    return false;
}}
console.log(agecheck(1));

function calculator(amount)
{
    return amount+(amount*0.1);
}
console.log(calculator(100));

function uppercase(letter)
{
    return letter.toLowerCase();

}
console.log(uppercase("THINK"));

function PasswordChecker(password){
let length=password.length;
if(length<8)
{
    console.log("tooo weak");
}
else{
    console.log("strong");
}
}
// PasswordChecker("hello");
PasswordChecker("AMruth1032");
function TempConv (units){
    return (units*9/5)+32;
}
console.log(TempConv(55));

function DoubleTrip(number){
    return ((number*2)+10);
}
console.log(DoubleTrip(5));

function canAfford(balance,price)
{
    if(balance>=price)
    {
        console.log("go for it");

    }
    else{
        console.log("save more money!!");
    }
}
canAfford(1200,60);

function makeCoolName(name){
     return name+"_Pro_2026_"+"!";
}
console.log(makeCoolName("Amruth"));

function isEven(number){
    if(number%2==0)
    {
        console.log("It's even");

    }
    else{
        console.log("it's odd");
    }}
    isEven(5);

function getFullname(firstName,lastName){
    return firstName+" "+lastName;
}
console.log(getFullname("Amruth","L")); 
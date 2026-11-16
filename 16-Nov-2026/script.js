console.log("learning js..............")

var balance1=600;
var balance2=200;

const cashoutChargePerThousand=15;
var txAmnt=Number(prompt("Enter the amount to transfer:"));
console.log("balance1:",balance1);
console.log("balance2:",balance2);
console.log("TX amount:", txAmnt);
console.log("cashout/thousand:",cashoutChargePerThousand);

if(txAmnt>balance1){
    console.log("insufficent balance in account!!!")
}
else
{
balance1=balance1-txAmnt;
balance2=balance2+txAmnt;

console.log("balance1:",balance1);
console.log("balance2:",balance2);
}
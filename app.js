const input=document.getElementById("arrayinput");
const disp=document.getElementById("display");

function Even(){
    const arr1=input.value.split(",").map(Number);
 const Even = numbers.filter((num)=>num%2===0);
     console.log( Even);

}
function Odd(){
    const arr1=input.value.split(",").map(Number);
    const oddNumbers = numbers.filter((num) => num % 2 !== 0);
}console.log( Odd);

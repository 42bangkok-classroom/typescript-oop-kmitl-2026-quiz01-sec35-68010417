const input = process.argv[2];
const balance = Number(input);

const input_2 = process.argv[3];
const withdraw = Number(input_2);

if(process.argv[2] === "" || process.argv[3]){
    console.log("Invalid Input");
}
if(isNaN(balance) || isNaN(withdraw)){
    console.log("Invalid Input");
}else{
    if(withdraw > balance){
        console.log("Insufficient balance");
    }else if(withdraw > 5000){
        console.log("Exceeds per-withdrawal limit");
    }else{
        console.log("Withdrawal approved");
    }
}
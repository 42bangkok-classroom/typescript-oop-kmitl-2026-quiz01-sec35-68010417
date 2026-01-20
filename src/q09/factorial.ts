const input = process.argv[2];
const n = Number(input);

if(isNaN(n)|| n < 1 || input === "" || !Number.isInteger(n)){
    console.log("Invalid Input")
}else{
    let result = 1;
    for(let i = 1;i<=n;i++){
        result *= i;
    }
    console.log(result);
}
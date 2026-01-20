const input = process.argv[2];
const n = Number(input);

if(isNaN(n)|| n < 0 || input === "" || !Number.isInteger(n) || input.trim() === ""){
    console.log("Invalid Input")
}else{
    let result = 1;
    for(let i = 1;i<=n;i++){
        result *= i;
    }
    console.log(`${result}`);
}
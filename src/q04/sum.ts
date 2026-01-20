const input = process.argv[2];
const number = Number(input);
let sum :number = 0;


if(isNaN(number)|| number < 1 || !number){
    console.log("Invalid Input");
}else{
    for(let i=0; i <= number;i++){
        sum += i;
    };
    console.log(`Sum: ${sum}`);
}
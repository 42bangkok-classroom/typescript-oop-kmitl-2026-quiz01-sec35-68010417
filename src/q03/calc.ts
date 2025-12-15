const op = process.argv[2];

const input = process.argv[3];
const number = Number(input);

const input_2 = process.argv[4];
const number2 = Number(input_2);

if(isNaN(number) || isNaN(number2)){
    console.log("Invalid input")
}else{
    switch(op){
        case "add": 
            console.log(number + number2);
            break;
        case "sub": 
            console.log(number - number2);
            break;
        case "mul": 
            console.log(number * number2);
            break;
        case "div":
            if(number2 === 0){
                console.log("Invalid input")
            }else{
            console.log(number / number2);
            }
            break;
        default: 
            console.log("Invalid operator");
            break;
    }
}
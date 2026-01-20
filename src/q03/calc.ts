const op = process.argv[2];
const input = process.argv[3];
const number = Number(input);
const input_2 = process.argv[4];
const number2 = Number(input_2);

if(isNaN(number) || isNaN(number2) || input === undefined || input_2 === undefined || input.trim() === "" || input_2.trim() === ""){
    console.log("Invalid input")
}else{
    switch(op){
        case "add": 
            let sum = number + number2
            let sum_string : string = String(sum)
            console.log(sum_string);
            break;
        case "sub": 
            let sum2 = number - number2
            let sum_string2 : string = String(sum2)
            console.log(sum_string2);
            break;
        case "mul": 
            let sum3 = number * number2
            let sum_string3 : string = String(sum3)
            console.log(sum_string3);
            break;
        case "div":
            if(number2 === 0){
                console.log("Invalid input")
            }else{
                let sum4 = number / number2
                let sum_string4 : string = String(sum4)
                console.log(sum_string4);
            }
            break;
        default: 
            console.log("Invalid operator");
            break;
    }
}
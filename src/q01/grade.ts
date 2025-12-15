const input = process.argv[2];
const score = Number(input);

if(isNaN(score) || score > 100 || score < 0){
    console.log("Invalid Input");
}else{
    if(score >= 80){
        console.log("A");
    }
    else if(score >= 70){
        console.log("B");
    }
    else if(score >= 60){
        console.log("C");
    }
    else if(score >= 50){
        console.log("D");
    }
    else if(score < 50){
        console.log("F");
    }
}
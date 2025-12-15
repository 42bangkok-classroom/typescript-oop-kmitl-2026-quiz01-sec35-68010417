const input = process.argv[2];
const number = Number(input);

if(isNaN(number) || number < 1){
    console.log("Invalid Input");
}else{
    for(let i = 1; i<=number;i++){
        if(i%3 === 0 && i%7 === 0){
            console.log("FooBar");
        }else if(i%3 === 0){
            console.log("Foo");
        }else if(i%7 === 0){
            console.log("Bar");
        }else console.log(i);
    }
}
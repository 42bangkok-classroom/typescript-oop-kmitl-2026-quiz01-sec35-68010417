const input = process.argv[2]

if(!input){

}else{
    let letters = 0;
    let digits = 0;
    let others = 0;
    for(let i = 0;i<input.length;i++){
        let char = input[i];
        if(/[a-zA-Z]/.test(char)){
            letters++;
        }else if(/[0-9]/.test(char)){
            digits++;
        }else{
            others++;
        }
    }
    console.log("Letters:",letters);
    console.log("Digits:",digits);
    console.log("Others:",others);
}
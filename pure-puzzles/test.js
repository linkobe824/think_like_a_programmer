const pattern = () => {
    let string = "";
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 8; j++){
            if(j >= 3 - i && j < 5 + i) string += "#"
            else string += "@";
        }
        string +="\n"
    }
    console.log(string)
}

pattern();
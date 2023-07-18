const pattern = () => {
    let string = "";
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 7 - (i * 2); j++){
            if(j < 3 - i) string +="i";
            else string += "#";
        }
        string += `${'i'.repeat(i*2)}`;

        for(let j = 0; j < 4 + i; j++){
            if(j < i * 2) string += "i";
            else string += "#"
        }
        string += "\n"
    }
    console.log(string)
}

pattern();
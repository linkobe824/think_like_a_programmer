/** diseñe un algoritmo que dibuje el siguiente patron
 * #            #
 *  ##        ##
 *   ###    ###
 *    ########
 *    ########
 *   ###    ###
 *  ##        ##
 * #            #
 */
  
const pattern = () => {
    let string = "";
    //top half
    for(let i = 0; i < 4; i++){
        //left half
        // for(let j = 0; j < 7; j++){
        //     if(j < i) string += " ";
        //     else if(j >= i && j <= 2 * i) string += "#";
        // }
        //right half
        // for(let j = 0; j < 7; j++){
        //     if(j < 6 - (2*i)) string += " ";
        //     else if(j >= 6 -(2*i) && j <= 6 - i) string += "#";
        // } 
        // inequality approach
        for(let j = 0; j < 14; j++){
            if( (j < i) ||
                (j > 2*i && j < 13 -(2*i)) ||
                (j >  13 - i)) string += " "
            else string += "#";
        }
        string += "\n";
    }
    //bottom half - book aproach
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 7 - (i * 2); j++){
            if(j < 3 - i) string +=" ";
            else string += "#";
        }
        string += `${' '.repeat(i*2)}`;

        for(let j = 0; j < 4 + i; j++){
            if(j < i * 2) string += " ";
            else string += "#"
        }
        string += "\n"
    }
    console.log(string);
}

pattern();
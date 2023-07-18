/** Diseñe un algoritmo que imprima el siguiente patron
   ##
  ####
 ######
########
########
 ######
  ####
   ##
 */


const pattern = () => {
  let string = "";
  //top half
  for(let i = 0; i < 4; i++){
    for(let j = 0; j < 8; j++){
      if(j >= 3 - i && j < 5 + i) string += "#"
      else string += " ";
    }
    string += "\n";
  }

  //bottom half
  for(let i = 0; i < 4; i++){
    for(let j = 0; j < 8; j++){
      if(j < i) string += " ";
      else if (j + i < 8) string += "#";
    }
    string += "\n";
  }
  console.log(string);
}

pattern();

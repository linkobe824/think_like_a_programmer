/* Diseñe un algoritmo que produsca el siguiente patron 

               ########
                ######
                 ####
                  ##                              */

const pattern = () => {
  let string = "";
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 8; j++) {
      if (j < i) string += " ";
      else if (j + i < 8) string += "#";
    }
    string += "\n";
  }
  console.log(string);
};

pattern();


function mostrar(){

  var myName = ["a", "M" , "P", 7, "A", "R", 9, "O"];
  var element;
  var vowels = "aeiouAEIOU";

  //mostrem el nom complert a la consola
  console.log("Partim del nom: " + myName.join(""));

  //mostrem les lletres a la consola
  for (i = 0; i < myName.length; i++){
    //guardar el valor de la posicion i del array
    element = myName[i];
    //busquem el tipus de valor de cada element del array
    var characterType = typeof myName[i];

    //establecemos las distinas condiciones para identificar vocal, consonante o número
    if (vowels.indexOf(element) != -1){
      //indexOf() busca dentro de vowels el valor de element y devuelve su posicion. Devuelve -1 si NO lo encuentra.
      console.log("He trobat la VOCAL: " + myName[i]);
    }else if (characterType == "number"){
      console.log("Els noms de persones no contenen el número: " + myName[i]);
    }else{
      console.log("He trobat la CONSONANT: " + myName[i]);
    }
  }
}

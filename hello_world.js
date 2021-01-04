// i wish we could be friends
let friends = "Lana, Chase, Willis, Malkova, Vox, Reid";

let textToPrint = "hello world";
let finalString = "";

for (let i = 0; i < textToPrint.length; i++){
  // search for all letters in my friends' names
  for (letter = 0; letter < friends.length; letter++){
    if (textToPrint[i] == friends[letter].toLowerCase()){
      finalString += friends[letter];
      break;
    }
    
    else if(textToPrint[i] == " "){
      finalString += " ";
      break;
    }
  }
}

console.log(finalString + "\n\n");

console.log(myLife); // doesn't work because myLife is an error

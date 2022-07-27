function decoder(code){
array = code.split("");
let letterArray = [];
let numberArray = [];
let final = [];
let i = 0;
for(i=0; i<code.length; i++){
  if(isNaN(array[i])){
    letterArray.push(array[i]);
  }
  else if(!isNaN(array[i])) {
    numberArray.push(array[i]);
  }
}
console.log(letterArray, numberArray)
for(j=0; j<numberArray.length; j++){
    let index = numberArray[j];
    i = index;
    final.push(letterArray[i]);
    } 
    return final

}

console.log(decoder("0s4sdfa5asdfs"))

// 0e4dzxc2as
// 042
// edzxcas
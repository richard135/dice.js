
var myArgs = process.argv.slice(2).toString();
var temp=[];

for (var i = 0; i < myArgs; i++){
  temp[i]=Random(i);
}

function Random(getRandomIntInclusive){
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() *(6))+1;
}

 console.log("Rolled", myArgs , "dice",temp.toString());


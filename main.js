function findLongest(array){
 var newArr=array.slice().sort(function(a,b){
   return b.toString().length-a.toString().length;
 });
 return newArr[0];
}

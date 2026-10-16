function add7(a){
    let b=a+7;
    console.log(b);
    return b;
}

add7(1);

function firstLower(str){
   if(!str){
     console.log("") ;
   }
   console.log(str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()) ;
}

firstLower("AbCd");

function lastLetter(x){
    console.log(x.charAt(x.length-1));
}

lastLetter("adnadnadk")
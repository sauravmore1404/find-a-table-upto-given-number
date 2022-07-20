document.getElementById('demo2').style.fontSize='20px';
var ans;
function table(){
let userInputvalue= document.getElementById('demo').value;
 var demotext=''
 for (let i=1 ; i<=userInputvalue; i++){
   demotext= demotext + '<div class="div2"><h2>Table of '+ i + '</h2>'; 
    for(let j=1; j<=10; j++ ){
        ans= i * j;
        demotext= demotext+ i + ' * '+ j +' = '+  ans + '<br />';
    }
    demotext=demotext+ '</div>'
}
    document.getElementById('demo2').innerHTML=demotext;
}
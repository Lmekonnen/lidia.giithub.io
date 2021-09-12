// var module=(function accountInfo(){
//     document.getElementById("display").src="back.gif";
//     document.getElementById("name").value+document.getElementById("deposit").value;
// })();
// function accountInfo(){
//     document.getElementById("display").innerHTML=document.getElementById("name").value;
//     document.getElementById("display").innerHTML=document.getElementById("deposit").value;
// }
//setTimeout(accountInfo,1000);

function showInput() {
    document.getElementById('display').innerHTML = 
    document.getElementById("user_input").value + " " +
    document.getElementById("acctype").value + " " +
    parseInt(document.getElementById("deposit").value);
}
   
window.onload = function(){
    var submits=document.getElementById("submit");
      submits.onclick = showInput;

}
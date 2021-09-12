// var module=(function accountInfo(){
//     document.getElementById("display").src="back.gif";
//     document.getElementById("name").value+document.getElementById("deposit").value;
// })();
function accountInfo(){
    document.getElementById("display").value=document.getElementById("name").value
    document.getElementById("display").value=document.getElementById("deposit").value;
}
setTimeout(accountInfo,1000);
window.onload = function(){
    var submits=document.getElementById("submit");
      submits.onclick = accountInfo;

}
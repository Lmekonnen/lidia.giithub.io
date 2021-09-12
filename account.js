var module=(function showInput() {
    document.getElementById('display').innerHTML = "Account Name:" + " " +
    document.getElementById("user_input").value + " Type Of Account: " +
    document.getElementById("acctype").value + " Deposit: " +
    parseInt(document.getElementById("deposit").value);
})();
   
window.onload = function(){
    var submits=document.getElementById("submit");
      submits.onclick = showInput;

}
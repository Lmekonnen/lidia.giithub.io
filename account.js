var module=(function showInput() {
    document.getElementById('display').innerHTML = "Account Name:" + " " +
    document.getElementById("user_input").value + " " +
    document.getElementById("acctype").value + " " +
    parseInt(document.getElementById("deposit").value);
})();
   
window.onload = function(){
    var submits=document.getElementById("submit");
      submits.onclick = showInput;

}
function showInput() {
    document.getElementById('display').innerHTML = "Account Name: " + document.getElementById("user_input").value +
                                                   " \nType Of Account: " + document.getElementById("acctype").value + 
                                                   " \nBalance: " + parseInt(document.getElementById("deposit").value);
}
window.onload = function(){
    var submits=document.getElementById("submit");
      submits.onclick = showInput;

}
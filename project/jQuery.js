
jQuery("#submit").click=findword;

function handleResponse(responseObj) {
    console.log("ki");
    console.log("response is "+responseObj.status+" and "+responseObj.text);
     
       $(".main").html(responseObj).css("color","red");
    
}

function findword () {
    console.log("lidia");
    var where = $("#form").attr("action");
    console.log("mekonen");
    var fe = $("#wordSearch").val();
    console.log("shewit");
    var what = { wordSearch: fe };
    $.get( where, what, handleResponse, "json");
}  
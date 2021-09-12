/** Javascript source code for Student Registration SPApp **/
/** Author: O. A. Kalu **/
/** Date created: Thur 9/14/2017 **/
/** Date modified: Fri 11/8/2019 **/

$(function(){
    // Setup and switch-on DateTime ticking clock
   

    // Hold a copy of AccountData in memory
    const accountData = [];

    /** Adds a new Account */
    const addAccount = function(customer) {
        addAccountToListView(customer);
        addAccountToArrayData(customer);
        addAccountToLocalStorage(customer);
    }

    /** Adds the Account data to List UI */
    const addAccountToListView = function(customer) {
        const newListItem = "<li class='list-group-item'>" + " Account name: "+ customer.TypeofAccount +  "   Balance $"+ customer.customerDeposit +"</li>";
        $("#listc").append(newListItem);
    }

    /** Adds the Account to the studentsData array */
    const addAccountToArrayData = function(customer) {
        accountData.push(customer);
    }

    /** Adds the student data to localStorage */
    const addAccountToLocalStorage = function(customer) {
        let idx = localStorage.length;
        localStorage.setItem(idx, " Account name: "+ customer.TypeofAccount +  "   Balance $"+ customer.customerDeposit);
    }

    //#region load data
    const localDataSize = localStorage.length;
    if(localDataSize > 0) {
        // read & display list from localStorage
        for(let i=0; i<localDataSize; i++) {
           
              let list=   $("#listc");

            
            const item=localStorage.getItem(i);
            let newitem="<li class='list-group-item'>" + item + "</li>";
            
            list.append(newitem);  
            
        }
    } else {
        // Fetch and display Account from server using JQuery AJAX
        $.ajax({
            url: "http://127.0.0.1:5500/Assignments/Exam/mini-BankingApp-610529/data/acount.json",
            type: "GET",
            dataType: "json"
        }).done(function(customerdata) {
            customerdata.forEach((custobj) => {
                addAccount(custobj);
            });
        }).fail(function(xhr, status, err) {
            alert("Error: " + status + " - " + err);
        }).always(function(xhr, status) {
            //alert( "The request is complete!" );
        });   
    }
    //#endregion

    //#region Form submission
    $("#create").on("click",function (event)  {
        event.preventDefault();
        const accountNumber = $("#cid").val();
        const customerDeposit = $("#cdeposit").val();
        const typeofAccount=$("#acctype").children("option:selected").val();
        console.log(accountNumber +" " + customerDeposit + " "+ typeofAccount);
        const objNewBankAccount = {
            "AccountNumber": accountNumber,
            "customerDeposit": customerDeposit,
            "TypeofAccount": typeofAccount
        }; 
        addAccount(objNewBankAccount);

        
        $("#cid").val("");
        $("#cdeposit").val("");
        $("#acctype").focus();
    });
    //#endregion

    $("#cid").focus();
});

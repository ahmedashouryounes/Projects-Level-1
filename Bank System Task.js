//Bank System/////////////////////////////
//////////////////////////////////////////
var users = []
/////////////////////////////////////////
function addUser(){
    for(var i = 0;i<3;i++){
        var name = prompt('Enter Your Name');
        var id = prompt('Enter Your id');
        var balance = prompt('Enter Your balance');

        users.push({
            clientName : name,
            clientId : id,
            clientBalance : balance
        })
    }
    showUsers()
}
//////////////////////////////////////////
function editBalanceById(){
    id = prompt('Enter Your (Id) To Edit Your Balance')
    newBalance = prompt('Enter a new Balance')
    var ind  = users.findIndex(el=>el.clientId == id)
    users[ind].clientBalance = newBalance
    showUsers()
}
//////////////////////////////////////////
function deleteUserById(){
    id = prompt('Enter Your Id To Delete')
    var ind  = users.findIndex(el=>el.clientId == id)
    users.splice(users[ind],1)
    showUsers()
}
///////////////////////////////////////////
function showUsers(){
    console.table(users)
}

addUser()
editBalanceById()
deleteUserById()
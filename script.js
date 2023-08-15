   
function validate(){
    const userName = document.getElementById('Uname').value
    const userPass = document.getElementById('Upass').value
    const userAge = document.getElementById('Uage').value
    const mobNum = document.getElementById('mobNum').value

    if(userName.trim() == "" || userAge.trim() == "" || userPass.trim() == "" || mobNum.trim() == ""){
        alert("missing credentials")
        return false
    }
    else if(userName == "nitish" && userPass == "123456" && userAge >= 18 && mobNum == "9876543210"){
        alert("successfully login")
        return true
    }
    else if(mobNum != "9876543210"){
        alert("wrong mobile number")
        return false
    }
    else if( userAge < 18){
        alert("you are underAged")
        return false
    }
    else{
        alert("wrong id and password")
        return false
    }
}
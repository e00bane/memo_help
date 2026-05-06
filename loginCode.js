function checkCreds(){
    //getting the data
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeID = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;
    console.log(fullName)

    //input validation

    var nameLength = fullName.length;

    if (nameLength > 20 || nameLength < 3){document.getElementById("loginStatus").innerHTML = "Invalid full name! Try again.";}
    else if(badgeID.length != 4){document.getElementById("loginStatus").innerHTML = "Invalid badgeID! Try again.";}
    else{
        document.getElementById("loginStatus").innerHTML = "Access granted, Welcome " + fullName;
        location.replace("UATSpacePage.html");
        alert("Access granted, Welcome " + fullName);
    }
}
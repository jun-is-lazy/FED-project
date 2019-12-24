function validateForm()                                    
{ 
    var name = document.forms["myRegForm"]["name"];               
    var email = document.forms["myRegForm"]["email"];
    var subject = document.forms["myRegForm"]["subject"];
    var message = document.forms["myRegForm"]["message"];  
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        name.className = "invalid";
        document.getElementById("hint-text").innerHTML = "You have one or more invalid inputs."
        return false; 
    } 

    else {
        name.className = "valid";
    }
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        email.className = "invalid";
        document.getElementById("hint-text").innerHTML = "You have one or more invalid inputs."
        return false; 
    } 

    else {
        email.className = "valid";
    }
   
    if (subject.value == "")                        
    { 
        window.alert("Please enter a subject."); 
        subject.focus(); 
        subject.className = "invalid";
        document.getElementById("hint-text").innerHTML = "You have one or more invalid inputs."
        return false; 
    } 

    else {
        subject.className = "valid";
    }
   
    if (message.value == "")                        
    { 
        window.alert("What's the point of sending a blank message?"); 
        message.focus(); 
        message.className = "invalid";
        document.getElementById("hint-text").innerHTML = "You have one or more invalid inputs."
        return false; 
    } 

    else {
        message.className = "valid";
    }
    
    return true;

}

function phonenumber(inputtxt)
{
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(inputtxt.value.match(phoneno))
     {
        document.forms["myRegForm"]["hp"].className = "valid";
	   return true;      
	 }
   else
     {
       alert("Not a valid Phone Number");
       document.forms["myRegForm"]["hp"].className = "invalid";
       document.getElementById("hint-text").innerHTML = "You have one or more invalid inputs."
	   return false;
     }
}
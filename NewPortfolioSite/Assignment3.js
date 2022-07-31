
//Function to validate form entries based on certain conditions for each entry. 
let validateForm = () => {
    
    //validate name
    if(!ValidateBlank(document.forms['myForm']['fullName'].value, 'Full Name')) return false;
    if(!ValidateFullName(document.forms['myForm']['fullName'].value, 'Full Name')) return false;
    
    //validate address
    if(!ValidateBlank(document.forms['myForm']['address'].value, 'Address')) return false; 
    if(!ValidateAddress(document.forms['myForm']['address'].value, 'Address')) return false;

    //validate city
    if(!ValidateBlank(document.forms['myForm']['city'].value, 'City')) return false; 
    if(!ValidateCity(document.forms['myForm']['city'].value, 'City')) return false; 
    
    //validate State
    if(!ValidateBlank(document.forms['myForm']['state'].value, 'State')) return false;
    if(!ValidateState(document.forms['myForm']['state'].value, 'State')) return false;
    //Validate Zip
    if(!ValidateBlank(document.forms['myForm']['zip'].value, 'Zipcode')) return false; 
    
    //validate email
    if(!ValidateBlank(document.forms['myForm']['email'].value, 'Email')) return false;
    
    //validate birthday
    if(!ValidateBlank(document.forms['myForm']['bDate'].value, 'Birthday')) return false;
    
    //validate message
    if(!ValidateBlank(document.forms['myForm']['message'].value, 'Message')) return false; 


    }
//Function to check if entered value is blank
let ValidateBlank = (val, valName) => {
    if (val == null || val == ''){
        alert('Please enter a value for this field: ' + valName)
        return false;
    }
    else{
        return true;
    }
}
//Function to check if first AND last name are present in the field
let ValidateFullName = (val, valName) => {
    let regExpName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!regExpName.test(val)){
        alert("Please enter your " + valName + "(First and Last)");
        return false; 
    }
    else {
        return true; 
    }
}
//Function to validate if address is in the right format (Number, Street Name, Street Type (ave, st, rd, etc...))    
let ValidateAddress = (val, valName) => {
    let regExpAddr = /^\w+(\s\w+){2,}/;
    if (!regExpAddr.test(val)){
        alert('Please enter the correct format for an: ' + valName);
        return false; 
    }
    else {
        return true;
    }
}
//Function to validate city of varying formats
let ValidateCity = (val, valName) => {
    let regExpCity = /^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/;
    if(!regExpCity.test(val)){
        alert('Please enter the correct format for a: ' + valName);
        return false;
    }
    else {
        return true;
    }
}
//Function to validate state (ex: NY, Fl)
let ValidateState = (val, valName) => {
    let RegExpState =  /^[a-zøæ]{2}\d{1}/;
    if(!RegExpState.test(val)){
        alert('Please Enter the correct format for: ' + valName + ' (ex: XX)' )
        return false; 
    }
    else {
        return true;
    }
}

//Function to post entries after validation to table created
/*
let postEntries = () => {
    alert('Full Name: ' + fNameEntry);
    return true;
}
*/


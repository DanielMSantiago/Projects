
//Function to validate form entries based on certain conditions for each entry. 
let validateForm = () => {
    if(!validateBlank(document.forms['myForm']['fullName'].value, 'Full Name')) return false;
    if(!validateBlank(document.forms['myForm']['address'].value, 'Address')) return false; 
    if(!validateBlank(document.forms['myForm']['city'].value, 'City')) return false; 
    if(!validateBlank(document.forms['myForm']['state'].value, 'State')) return false;
    if(!validateBlank(document.forms['myForm']['zip'].value, 'Zipcode')) return false; 
    if(!validateBlank(document.forms['myForm']['email'].value, 'Email')) return false;
    if(!validateBlank(document.forms['myForm']['bDate'].value, 'Birthday')) return false;
    if(!validateBlank(document.forms['myForm']['message'].value, 'Message')) return false; 

    if(!validateFullName(document.forms['myForm']['fullName'].value)) return false;


    }
//Function to check if entered value is blank
let validateBlank = (val, valName) => {
    if (val == null || val == ''){
        alert('Please enter a value for this field: ' + valName)
        return false;
    }
    else{
        return true;
    }
}
//Function to check if first AND last name are present in the field
let validateFullName = (val) => {
    let regExpName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!regExpName.test(val)){
        alert('Please enter your full name (First and Last)');
        return false; 
    }
    else {
        return true; 
    }
}
    

//Function to post entries after validation to table created
/*let postEntries = () => {
    alert('Full Name: ' + fNameEntry);
    return true;
}*/



let ValidateForm = () => {
    
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
    if(!ValidateZip(document.forms['myForm']['zip'].value, 'Zipcode')) return false;
    
    //validate email
    if(!ValidateBlank(document.forms['myForm']['email'].value, 'Email')) return false;
    
    //validate Phone
    if(!ValidateBlank(document.forms['myForm']['phoneNum'].value, 'Phone Number')) return false;
    if(!ValidatePhone(document.forms['myForm']['phoneNum'].value, 'Phone Number')) return false;
    
    //validate birthday
    if(!ValidateBlank(document.forms['myForm']['bDate'].value, 'Birthday')) return false;
    if(!ValidateBirthDate(document.forms['myForm']['bDate'].value, 'Birthday')) return false;
    
    //validate message
    if(!ValidateBlank(document.forms['myForm']['message'].value, 'Message')) return false; 
    
    //Asks user to validate what is entered by displaying entered date
    if(!ConfirmEntries()) return false;


    }

//Function to check if entered value is blank
let ValidateBlank = (val, valName) => {
    if (val == null || val == ''){
        alert('Please enter a value for this field: ' + valName);
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
        document.getElementById('fullName').style.backgroundColor = 'red';
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
        document.getElementById('address').style.backgroundColor = 'red';
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
        document.getElementById('city').style.backgroundColor = 'red';
        return false;
    }
    else {
        return true;
    }
}
//Function to validate state (ex: NY, Fl)
let ValidateState = (val, valName) => {
    let regExpState =  /(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])/;
    if(!regExpState.test(val)){
        alert('Please Enter the correct format for: ' + valName + ' (ex: NY, NJ, FL)' )
        document.getElementById('state').style.backgroundColor = 'red';
        return false; 
    } 
    else {
        return true;
    }
}

let ValidateZip = (val, valName) => {
    let regExpZip = /^\d{5}(?:[-\s]\d{4})?$/;
    if(!regExpZip.test(val)){
        alert('Please enter the correct format for ' + valName + '. Ex: XXXXX; XXXXX-XXXX; XXXXX XXXX');
        document.getElementById('zip').style.backgroundColor = 'red';
        return false;
    }
    else{
        return true;
    }
}

let ValidatePhone = (val, valName) => {
    let regExpPhone = /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?/img;
    if(!regExpPhone.test(val)){
        alert('Please enter the correct format for ' + valName + ' (XXX-XXX-XXXX)');
        document.getElementById('phoneNum').style.backgroundColor = 'red';
        return false;
    }
    else {
        return true;
    }
}

function getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }    
    return age;
}

let ValidateBirthDate = (val, valName) => {
    let regExpBDate = /((?:0[1-9])|(?:1[0-2]))\/((?:0[0-9])|(?:[1-2][0-9])|(?:3[0-1]))\/(\d{4})/;
    let enteredAge = getAge(val);
    if(!regExpBDate.test(val) || enteredAge < 18){
        alert('Please enter the correct date for your ' + valName + '(ex: mm/dd/yyyy). Please do not enter if you are below the age of 18.');
        document.getElementById('bDate').style.backgroundColor = 'red';
        return false;
    }
    else {
        return true;
    }
}

    //Function to display a dialog box for entries

let ConfirmEntries = () => {
    var fullName = document.forms['myForm']['fullName'].value;
    var address = document.forms['myForm']['address'].value;
    var city = document.forms['myForm']['city'].value;
    var state = document.forms['myForm']['state'].value;
    var zip = document.forms['myForm']['zip'].value;
    var email = document.forms['myForm']['email'].value;
    var phoneNum = document.forms['myForm']['phoneNum'].value;
    var bDate = document.forms['myForm']['bDate'].value;
    var message = document.forms['myForm']['message'].value;

    var confirmation = confirm('Fullname: ' + fullName + '\n' + 
    'Address: ' + address + '\n' +
    'City: ' + city + '\n' +
    'State: ' + state + '\n' +
    'Zip: ' + zip + '\n' +
    'Email: ' + email + '\n' +
    'Phone Number: ' + phoneNum + '\n' +
    'Birth Date: ' + bDate + '\n' +
    'Message: ' + message
    );

    if(confirmation == true){
        alert('Data being sent to email');
        return true;
    }

    else {
        alert('Please make the changes necessary to your liking');
        window.history.go();
    }
}
    //Function to post entries after validation to table created

/* let PostEntries = () => {

    var fullName = document.forms["myForm"]["fullName"].value;
    var address = document.forms["myForm"]["address"].value;
    var city = document.forms["myForm"]["city"].value;
    var state = document.forms["myForm"]["state"].value;
    var zip = document.forms["myForm"]["zip"].value;
    var email = document.forms["myForm"]["email"].value;
    var phoneNum = document.forms["myForm"]["phone"].value;
    var bDate = document.forms["myForm"]["bDate"].value;
    var mess = document.forms["myForm"]["message"].value;

    var table = document.getElementById("formEntries");
    //var rowCount = table.rows.length;
    var row = table.insertRow(0);

    
    row.insertCell(0).innerHTML = fullName;
    row.insertCell(1).innerHTML = address;
    row.insertCell(2).innerHTML = city;
    row.insertCell(3).innerHTML = state;
    row.insertCell(4).innerHTML = zip;
    row.insertCell(5).innerHTML = email;
    row.insertCell(6).innerHTML = phoneNum;
    row.insertCell(7).innerHTML = bDate;
    row.insertCell(8).innerHTML = mess;

} */
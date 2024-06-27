function validateForm(){

    //get form input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    //reset error message
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';

    //validate name
    if (name === ''){
        document.getElementById('nameError').innerHTML  = 'name is required';
        return false;
    }

    //validate email
    var emailreg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailreg.test(email)){
        document.getElementById('emailError').innerHTML = 'input valid email';
        return false;
    }

    //if validate passes, the form will be submitted
    alert('Form submitted successfully!');
    return true;
}
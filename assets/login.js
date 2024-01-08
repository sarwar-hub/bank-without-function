// Login form


// Add Event Listener to Redirect
document.getElementById('login').addEventListener('click', function(){

    // Get user field data
    const userEmail = document.getElementById('email').value;
    const userPassword = document.getElementById('password').value;

    // Redirect condition
    if ( userEmail == 'test@test.com' && userPassword == 'test' ) {

        window.location.href = 'dashboard.html';

    } else {
        alert('Incorrect input')
    }
})
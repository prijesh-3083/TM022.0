// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })();

  // Assume userList is an array containing registered users
const userList = ['user1', 'user2', 'user3'];

function authenticateUser(username) {
    // Check if the username exists in the userList
    if (userList.includes(username)) {
        // User is registered, grant permission to access next page
        window.location.href = 'next-page.html'; // Redirect to the next page
    } else {
        // User is not registered, redirect to register page
        window.location.href = 'register.html'; // Redirect to the register page
    }
}

// Example usage:
const loginForm = document.getElementById('login-form'); // Assuming login form has an id of 'login-form'
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value; // Assuming input field for username has an id of 'username'
    
    authenticateUser(username);
});

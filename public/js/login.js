const loginHandler = async (event) => {
    // keep from refresh
    event.preventDefault();

    // get values from username and password input
    const username = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // check if both are not blank
    if (username && password) {
        // send username and password to api for validation
        // (in userRoutes)
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // Go back to homepage
            document.location.replace('/');
        } else {
            alert('Failed to log in');
        }
    }
};

// listen for submit button being pressed
document
    .querySelector('#login-form')
    .addEventListener('submit', loginHandler);
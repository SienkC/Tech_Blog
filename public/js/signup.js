const signupHandler = async (event) => {
    // don't let refresh
    event.preventDefault();

    // get new username and password values
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // check if both have values entered
    if (username && password) {
        // post values to users api
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        // once user is created, go back to homepage
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up.');
        }
    }
};


// listen for submit button clicked for signup
document
    .querySelector('#signup-form')
    .addEventListener('submit', signupHandler);

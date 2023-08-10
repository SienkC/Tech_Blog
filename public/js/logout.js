const logout = async () => {
    // call to logout in user routes
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    // logging out ends in going to login page
    if (response.ok) {
        document.location.replace('/login');
    } 
    else {
        alert('Could not log out');
    }
};

// listen for user clicking logout
document.querySelector('#logout').addEventListener('click', logout);

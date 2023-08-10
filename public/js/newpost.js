const newPost = async () => {
    // call to logout in user routes
    const response = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    // creating post goes back to dashboard
    if (response.ok) {
        document.location.replace('/dashboard');
    } 
    else {
        alert('Could not create post');
    }
};

// listen for user clicking new post submit
document
    .querySelector('#newpost-form')
    .addEventListener('submit', newPost);
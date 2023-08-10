const newPost = async () => {
    // don't let refresh
    event.preventDefault();

    // get title and text for new post
    const title = document.querySelector('#post-title').value.trim();
    const text = document.querySelector('#post-text').value.trim();

    // call to posts
    const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, text }),
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
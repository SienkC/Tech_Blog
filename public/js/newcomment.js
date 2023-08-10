const newComment = async () => {
    // don't let refresh
    event.preventDefault();

    // get text and post id
    const text = document.querySelector('#comment-text').value.trim();
    const postId = document.querySelector('#post-title').dataset.post;

    // call to comments
    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ text, postId }),
        headers: { 'Content-Type': 'application/json' },
    });

    // creating post goes back to dashboard
    if (response.ok) {
        document.location.reload();
    } 
    else {
        alert('Could not create comment');
    }
};

// listen for user clicking new comment submit
document
    .querySelector('#add-comment')
    .addEventListener('submit', newComment);
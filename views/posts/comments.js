module.exports = () => {
    //func that shows a single ocmment
    // const singleComment = () => {
    //     return `
    //     <div class="comment" id="${comment.Id}">
    //         div.
    //     </div>
    //     `
    // };

    //exports a div containing comments
    return `
    <div class="comments">
        <form method="POST" action="/submit-comment">
            <input type="text" name="author" placeholder="Your Name">
            <textarea name="comment-text" placeholder="Leave a Comment!">
            </textarea>
            <input type="submit">
        </form>
    </div>
    `;
    
    //if no comments, add message saying 'no comments, make one!'
};
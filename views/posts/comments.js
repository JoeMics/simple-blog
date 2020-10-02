module.exports = (comment) => {
    //func that shows a single ocmment
    const singleComment = () => {
        return `
        <div class="comment" id="${comment.Id}">
            div.
        </div>
        `
    };
    //exports a div containing comments
    return `
    <div class="comments">

    </div>
    `;
    
    //if no comments, add message saying 'no comments, make one!'
};
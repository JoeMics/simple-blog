const Comments = require('../../repositories/comments');

module.exports = (blogPost) => {

    // the id of the blogPost 
    const { id } = blogPost;

    // func that shows all comments
    const allComments = async (id) => {
        const commentList = await Comments.getOne(id);
        const commentsArray = commentList.comments;

        return commentsArray.map((comment) => {
          return `
          <div class="single-comment" id="${comment.id}">
            <h2>${comment.author}</h2>
            <p>${comment.commentText}</p>
            <p>${comment.createdOn}}
          </div>
          `
        });
        // for (let comments of commentList.comments) {
        //     console.log(comments.author);
        // }
    }
    //exports a div containing comments

    allComments(id);

    return `
    <div class="comments">
        <form method="POST">
            <input type="text" name="author" placeholder="Your Name">
            <textarea name="commentBody" placeholder="Leave a Comment!">
            </textarea>
            <input type="submit">
        </form>
        <div>
        ${allComments(id)}
        </div>
    </div>
    `;
    
    //if no comments, add message saying 'no comments, make one!'
};
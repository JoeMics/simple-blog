const Comments = require('../../repositories/comments');

module.exports = async (blogPost) => {
    const { id } = blogPost;

    // func that shows all comments
    const allComments = async (id) => {

      let commentList = [];
        try {
          commentList = await Comments.getOne(id);
        } catch {
          return `
          <p>There are no comments</p>
          `;
        };

        const commentsArray = commentList.comments;

        const newComments = commentsArray.map((comment) => {
          return `
          <div class="single-comment" id="${comment.id}">
            <h2>${comment.author}</h2>
            <p>${comment.commentText}</p>
            <p>${comment.createdOn}
          </div>
          `
        });

        return newComments.join(' ');
    };

    const comments = await allComments(id);

    //for now, disable comments:
    return '<div>Comments are disabled</div>'

    //exports a div containing comments
    return `
    <div class="comments">
        <form method="POST">
            <input type="text" name="author" placeholder="Your Name">
            <textarea name="commentBody" placeholder="Leave a Comment!">
            </textarea>
            <input type="submit">
        </form>
        <div>
        ${comments}
        </div>
    </div>
    `;

    
    //if no comments, add message saying 'no comments, make one!'
};
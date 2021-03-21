const Repository = require('./repository');

class commentsRepository extends Repository {
    async createComment(postId, attrs) {
        //find post by id
        let blogPost;
        try {
            blogPost = await this.getOne(postId);
        } catch {
            //if no record of id in comments.json, create one
            blogPost = await this.create({ id: postId , comments: [] });
        }

        // make an 'object' called "comments"
        const newComment = {
            id: this.randomId(),
            createdOn: this.dateNow(),
            ...attrs
        }

        // add comment object into the comment array
        blogPost.comments.push(newComment);
        
        await this.update(postId, blogPost);
    }
}

module.exports = new commentsRepository('comments.json');
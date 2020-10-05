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

        // make an attr called "comments"
        const newComment = {
            id: this.randomId(),
            createdOn: this.dateNow(),
            ...attrs
        }
        // blogPost.comments.push(newComment);
        blogPost.comments.push(newComment);
        // console.log(blogPost);
        
        //call addComment(new method)

    }

    async addComment() {
        // see this.edit()
    }
}

module.exports = new commentsRepository('comments.json');
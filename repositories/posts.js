const Repository = require('./repository');

class postsRepository extends Repository {
    async createPost(attrs) {
        attrs.id = this.randomId();
        attrs.createdOn = this.dateNow();

        const records = await this.getAll();
        records.push(attrs);

        await this.write(records);

        return attrs;
    }

}

module.exports = new postsRepository('posts.json');

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

    async edit(id, attrs) {
        const records = await this.getAll();
        const record = await this.getOne(id);
        attrs.editedOn = this.dateNow();

        Object.assign(record, attrs);

        await this.delete(id);
        const newRecords = await this.getAll()
        newRecords.push(record);
        
        await this.write(newRecords);
    }

}

module.exports = new postsRepository('posts.json');

const fs = require('fs');
const crypto = require('crypto');

class postsRepository {
    // filename is where data will be stored
    constructor(filename){
        if (!filename) {
            throw new Error('Creating this repository requires a filename');
        }
        
        this.filename = filename;

        // if file exists, access, else write and create empty array
        try {
            fs.accessSync(this.filename);
        } catch {
            fs.writeFileSync(this.filename, '[]');
        }

    }

    randomId() {
        return crypto.randomBytes(6).toString('hex');
    }

    // get all
    async getAll() {
        return JSON.parse(
            await fs.promises.readFile(this.filename, {
                 encoding: 'utf-8' 
            })
        );
    }

    async write(records) {
        const newRecords = JSON.stringify(records, null, 4);

        try {
            await fs.promises.writeFile(
                this.filename,
                newRecords
            )
        } catch (error) {
            throw new Error(`Could not write to ${this.filename}`);
            console.log(error);
        }
    }

    // Create a post
    async create(attrs) {
        attrs.id = this.randomId();

        const records = await this.getAll();
        records.push(attrs);

        await this.write(records);

        return attrs;
    }

    // Update/edit a post


    // delete post
    async delete(id) {
        const records = this.getAll();
        const newRecords = records.filter()
        
    }

    // Find a post by id
    async getOne(id) {
        const records = await this.getAll();

        for (let record of records) {
            if (record.id === id){
                return record;
            }
        };

        throw new Error(`Could not find post with an id of ${id}`);
    }

    // Find a post by filter
}
module.exports = new postsRepository('posts.json');

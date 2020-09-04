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
                 encoding: utf-8 
            })
        );
    }

    async write(records) {
        newRecords = JSON.stringify(records, null, 4);

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

        records = await this.getAll();
        records.push(attrs);

        await this.write(records);

        return attrs;
    }

    // Update/edit a post


    // delete post

    // Find a post by id
    async getOne(id) {
        records = await this.getAll();

        // needs testing, is records an array or obj???
        for (let record in records) {
            if (record.id === id){
                return record;
            }
        };

        throw new Error(`Could not find post with an id of ${id}`);
    }

    // Find a post by filter

    // Maybe a writeAll?!?!

}
module.exports = new postsRepository('posts.json');

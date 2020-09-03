const fs = require('fs');

class postsRepository {
    // filename is where data will be stored
    constructor(filename){
        if (!filename) {
            throw new Error('Creating this repository requires a filename')
        }
        
        this.filename = filename;

        // if file exists, access, else write and create empty array
        try {
            fs.accessSync(this.filename);
        } catch {
            fs.writeFileSync(this.filename, '[]')
        }

    }

    // get all

    // Create a post

    // Update/edit a post

    // delete post

    // Find a post by id

    // Find a post by filter

    // Maybe a writeAll?!?!

}
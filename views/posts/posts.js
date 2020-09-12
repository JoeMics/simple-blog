const layout = require('../layout');


module.exports = (blogPosts) => {
    let allPosts = [];

    for (let post in blogPosts){
        allPosts +=    `
        <div class="blog-post">
            <h2>Blog post title</h2>
            <p>${post.post}</p>
            <p>${post.createdOn}</p>
        </div>
        `
    }


    return layout({
        content: allPosts
    });
}
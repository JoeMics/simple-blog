const layout = require('../layout');

module.exports = (blogPost) => {
    return layout({
        content: `
        <div class="blog-post">
            <h2>Blog post title</h2>
            <p>${blogPost.post}</p>
        </div>
        `
    });
}
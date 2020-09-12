const layout = require('../layout');


module.exports = (blogPosts) => {

    // Takes object and displays it with HTML
    const showPost = ({ blogPostText, createdOn }) => {
        return `
        <div class="blog-post">
            <h2>Blog post title</h2>
            <p>${blogPostText}</p>
            <p>${createdOn}</p>
        </div>
        `
    }

    let allPosts = [];
    if (Array.isArray(blogPosts)) {
        for (let post of blogPosts){
            allPosts += showPost(post);
        }
    } else {
        allPosts = showPost(blogPosts);
    }

    return layout({
        content: allPosts
    });
}
const layout = require('../layout');


module.exports = (blogPosts) => {

    // Takes object and displays it with HTML
    const showPost = ({ textPost, createdOn, title }) => {
        return `
        <div class="blog-post">
            <h2 class="post-title">${title}</h2>
            <p>${textPost}</p>
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
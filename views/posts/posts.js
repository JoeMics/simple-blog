const layout = require('../layout');

//Shows a list of all blog posts in site
module.exports = (blogPosts) => {

    // Takes object and displays it with HTML
    const postSnippet = ({ textPost, createdOn, title, id }) => {
        return `
        <div class="post" id="${id}">
            <a href="/posts/${id}">
            <h2 class="post__title">${title}</h2>
            <p>${textPost}</p>
            <p>${createdOn}</p>
            </a>
        </div>
        `
    }

    let allPosts = [];
    if (Array.isArray(blogPosts)) {
        for (let post of blogPosts){
            allPosts += postSnippet(post);
        }
    }
    
    return layout({
        content: allPosts
    });
}
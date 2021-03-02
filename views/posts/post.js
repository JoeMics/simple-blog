const layout = require('../layout');

module.exports = (blogPost) => {
    
    const { textPost, createdOn, title, id } = blogPost;

    const post = `
        <div class="post" id="${id}">
            <h1 class="post__title">${title}</h1>
            <div class="post__text">
                <p>${textPost}</p>
                <div class="post__text__date">
                posted ${createdOn}
                </div>
            </div>
        </div>e
        `
    
    return layout({
        content: post
    })
}
const layout = require('../layout');

module.exports = (blogPost) => {
    
    const { textPost, createdOn, title, id } = blogPost;

    const post = `
        <div class="post" id="${id}">
            <h2 class="post__title">${title}</h2>
            <div class="post__text">
                <p>${textPost}</p>
                <div class="post__text__date">
                ${createdOn}
                </div>
            </div>
        </div>
        `
    
    return layout({
        content: post
    })
}
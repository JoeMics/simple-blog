const layout = require('../layout');

module.exports = () => {
    return layout({
        content: `
            <form method="post" enctype="multipart/form-data"> 
                <label>Title:</label>
                <input type="text" size="50" name="title">
                <label>Post:</label>
                <input type="text" size="50" name="blogPostText">
                <input type="submit">
            </form>
        `
    });
}
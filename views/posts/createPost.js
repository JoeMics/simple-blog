const layout = require('../layout');

module.exports = () => {
    return layout({
        content: `
            <form method="post" enctype="multipart/form-data"> 
                <label>Type here:</label>
                <input type="text" size="50" name="blogPostText">
            </form>
        `
    });
}
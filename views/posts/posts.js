const layout = require('../layout');

module.exports = () => {
    return layout({
        content: `
        <div class="blog-post">
            <h2>Blog post title</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut neque sequi repellat quasi maxime. Molestiae incidunt inventore tenetur soluta ducimus quaerat. Quidem hic sequi perferendis ex illo ullam iusto itaque?</p>
        </div>
        `
    });
}
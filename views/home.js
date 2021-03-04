const layout = require('./layout');

module.exports = () => {

    const home = `
    <div class="newsletter">
        <div class="newsletter__img">
            <img src="https://images.unsplash.com/photo-1541298645675-6cc8e127934d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80">
        </div>
        <div class="newsletter__text">
            <div class="newsletter__description">
                <h2>Do you like stories?</h2>
                <p>Sign up for my monthly newsletter, and be the first to hear original stories!</p>
            </div>
            <form class="newsletter__form" method="POST" action="/">
                <input type="text" name="email" id="email" placeholder="Enter your e-mail address"/>
                <input type="submit"/>
            </form>
        </div>
    </div>
    `
    
    return layout({
        content: home
    })
}
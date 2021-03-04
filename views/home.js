const layout = require('./layout');

module.exports = () => {

    const home = `
    <div class="newsletter">
        <div class="newsletter__img">
            <img src="images/profile-photo.jpg">
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
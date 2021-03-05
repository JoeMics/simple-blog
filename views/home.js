const layout = require('./layout');

module.exports = () => {

    const home = `
    <div class="newsletter">
        <div class="newsletter__img">
            <img src="images/profile-photo.jpg">
        </div>
        <div class="newsletter__text">
            <div class="newsletter__description">
                <h2>Ya Like Jazz?</h2>
                <p>Sign up for my monthly newsletter, and be the first to hear original and definitely not click-bait titled posts!</p>
            </div>
            <form class="newsletter__form" method="POST" action="/">
                <input class="newsletter__form--email" type="text" name="email" id="email" placeholder="Enter your e-mail address"/>
                <button type="submit" class="newsletter__form--submit">Spam Me!</button>
            </form>
        </div>
        <div class="reviews">
            <blockquote class="reviews__review">
            Jane Doe delivers content on a heart-pounding, soul penetrating level to which no other can provide <cite> John Smith </cite>
            </blockquote>
            <blockquote class="reviews__review">
            Jane Doe delivers content on a heart-pounding, soul penetrating level to which no other can provide <cite> John Smith </cite>
            </blockquote>
            <blockquote class="reviews__review">
            Jane Doe delivers content on a heart-pounding, soul penetrating level to which no other can provide <cite> John Smith </cite>
            </blockquote>
        </div>
    </div>
    `
    
    return layout({
        content: home
    })
}
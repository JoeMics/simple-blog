const layout = require('./layout');

module.exports = () => {

    const home = `
    <div class="newsletter">
        <div class="newsletter__img">
            <img src="images/profile-photo.jpg">
        </div>
        <div class="newsletter__text">
            <div class="newsletter__description">
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus adipisci molestiae eum quas, nostrum doloribus?</p>
            </div>
            <form class="newsletter__form" method="POST" action="/">
                <input class="newsletter__form--email" type="text" name="email" id="email" placeholder="Enter your e-mail address"/>
                <button type="submit" class="newsletter__form--submit">Spam Me!</button>
            </form>
        </div>
    </div>
    <div class="reviews">
        <blockquote class="reviews__review">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et impedit culpa quaerat esse aperiam, ad totam fugiat aspernatur quo molestiae!<cite> John Smith </cite>
        </blockquote>
        <blockquote class="reviews__review">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et impedit culpa quaerat esse aperiam, ad totam fugiat aspernatur quo molestiae!<cite> John Smith </cite>
        </blockquote>
        <blockquote class="reviews__review">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et impedit culpa quaerat esse aperiam, ad totam fugiat aspernatur quo molestiae!<cite> John Smith </cite>
        </blockquote>
    </div>
    <div class="about__preview">
        <div class="about__preview__header">
            <h2>A Little About Me</h2>
        </div>
        <div class="about__preview__text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, lorem sit amet iaculis faucibus, augue orci tincidunt nisl, 
            a consectetur purus nisl ut arcu. Ut nec leo pharetra, euismod lorem et, vestibulum nisl. Etiam vel tristique enim, non aliquam magna. Nulla
            nec cursus risus. Sed dignissim ante massa, id molestie turpis condimentum quis. Morbi dolor libero, maximus id sapien sit amet, tempor mollis
             odio. Morbi eget tempus odio. Quisque lacinia, lacus non tempor tincidunt, lectus nulla commodo enim, suscipit pharetra leo ...<a href="/about">Read More</a></p>
        </div>
    </div>
    `
    
    return layout({
        content: home
    })
}
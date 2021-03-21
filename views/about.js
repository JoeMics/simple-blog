const layout = require('./layout');

module.exports = () => {

    const aboutPage = `
    <div class="about">
        <div class="about__photo">
            <img src="images/about-photo.jpg"/>
        </div>
        <div class="about__description">
            <h2 class="about__description__header">
                Who Is The One and Only Jane Doe?
            </h2>
            <div class="about__description__text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit, lorem sit amet iaculis faucibus, augue orci tincidunt nisl, a consectetur purus nisl ut arcu. Ut nec leo pharetra, euismod lorem et, vestibulum nisl. Etiam vel tristique enim, non aliquam magna. Nulla nec cursus risus. Sed dignissim ante massa, id molestie turpis condimentum quis. Morbi dolor libero, maximus id sapien sit amet, tempor mollis odio. Morbi eget tempus odio. Quisque lacinia, lacus non tempor tincidunt, lectus nulla commodo enim, suscipit pharetra leo tellus in sem. Maecenas elementum mi nec est pharetra mattis.</p>

            <p>Fusce porta ex sapien, vitae pharetra eros maximus non. Sed rhoncus metus a nisi fringilla semper. Vestibulum convallis urna quam, ac convallis ligula gravida a. Nunc at dolor ultrices orci venenatis convallis. Donec sed est nec eros maximus ultrices. Aliquam dignissim ex sed dolor tempor tincidunt. Donec a ex accumsan lorem porttitor tincidunt non sit amet lorem. Pellentesque libero enim, pulvinar eu ultricies sit amet, varius a odio. Morbi sed consectetur nisl. Integer ac urna dolor. Vivamus viverra lacus et odio iaculis elementum eu faucibus magna. Fusce aliquet id ante sit amet hendrerit. Proin et egestas orci, ac ultrices dui. Vivamus gravida nisl eget mi scelerisque ullamcorper et in quam. Nulla id molestie libero.</p>
            
            <p>Integer mi nisi, finibus quis tristique sit amet, porttitor sit amet tortor. Suspendisse potenti. Nullam mollis quis lectus vel condimentum. Curabitur tempus enim massa, ut dignissim turpis semper in. In hac habitasse platea dictumst. Sed nunc tellus, cursus non maximus feugiat, sodales mollis nibh. Morbi sem est, suscipit et diam id, consequat aliquet orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam tristique hendrerit metus, at tristique purus venenatis id.</p>
            </div>
        </div>
    </div>
    <h2 class="about__contact">
        Want to ask me something? Contact me <a href="/contact">here</a>.
    </h2>

    `

    return layout({ content: aboutPage });
}
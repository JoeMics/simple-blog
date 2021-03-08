const layout = require('./layout');

module.exports = () => {

    const aboutPage = `
    <div class="about__header">
    header
    </div>
    <div class="about__photo">
    photo
    </div>
    <div class="about__description">
    description
    </div>
    <div class="about__contact">
    contact me
    <div>
    `

    return layout({ content: aboutPage });
}
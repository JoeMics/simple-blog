const layout = require('./layout');

module.exports = () => {
    const contact =  `
    <div class="contact__container">
        <form class="contact__form" action="">
            <h1>Hi, Let's Talk</h1>
            <label>
                <input type="text" />
                <div class="label__text label__text--blurred">Name</div>
            </label>
            <label>
                <input type="text" />
                <div class="label__text label__text--blurred">Email</div>
            </label>
            <label>
                <input type="text" />
                <div class="label__text label__text--blurred">Message</div>
            </label>
            <button type="submit" class="contact__form--submit">Submit</button>
        </form>
        <div class="contact__card">
            <h2>Contact Info</h2>
            <ul class="contact__address">
                <li>5555 Street</li>
                <li>Vancouver, BC</li>
                <li>Canada</li>
            </ul>
            <p>Email: janedoe@email.com</p>
            <p>Phone: 555-5555</p>
            <p>Fax: 555-5555</p>
        </div>
    </div>

    <script src="/scripts/contact-form.js"></script>
    `;

    return layout({content: contact});
}
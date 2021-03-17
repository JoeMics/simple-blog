module.exports = ({ content }) => {
    // Layout must contain navbar, title, social media

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Test Blog</title>

        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet">
        <link href="/css/main.css" rel="stylesheet">
        <link href="/css/navbar.css" rel="stylesheet">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet">
    </head>
    <body>
        <div class="header">
            <h1><a href="/">A Simple Blog</a></h1>
        </div>
        <div class="nav">
            <div class="nav__elements">
                <div class="nav__elements__element">
                    <a class="nav__elements__element__link"href="/posts">Posts</a>
                </div>
                <div class="nav__elements__element">
                    <a class="nav__elements__element__link" href="#">Contact</a>
                </div>
                <div class="nav__elements__element">
                    <a class="nav__elements__element__link" href="/about">About</a>
                </div>
            </div>
        </div">
        <div class="main">
            ${content}
        </div>
    </body>
    <footer>
        <div class="footer__copyright">
            <p>2021 notarealbloggerorcompanyproductions All Rights Reserved</p>
        </div>
        <div class="footer__logo">
            <img src="images/profile-photo.jpg"/>
        </div>
        <div class="footer__socials">
            <ul>
                <li>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fab fa-youtube-square"></i></a>
                </li>
                <li>
                    <a href="#"><i class="fab fa-facebook-square"></a></i>
                </li>
            </ul>
        </div>
    </footer>
    </html>
    `
}
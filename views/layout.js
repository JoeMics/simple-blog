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
            <a href="/"><h1>A Simple Blog</h1></a>
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
                    <a class="nav__elements__element__link" href="/admin/create-post">About</a>
                </div>
            </div>
        </div">
        <div class="main">
            ${content}
        </div>
        </body>
    </html>
    `
}
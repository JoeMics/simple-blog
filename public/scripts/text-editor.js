window.addEventListener('load', () => {
    document.querySelector('.editor').setAttribute('contenteditable', 'true');
});

function format(command, value) {
    document.execCommand(command, false, value);
}

function setUrl() {
    const url = document.getElementById('txtUrl').value;
    const sText = document.getSelection();

    document.execCommand('insertHTML'. false, `
        <a href="${url}" target="_blank">${sText}</a>
    `);
    //format('createlink', url);
}

function parseInput() {
    console.log(document.querySelector('.editor').innerHTML);
}
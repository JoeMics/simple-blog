window.addEventListener('load', () => {
    document.querySelector('.editor-title').setAttribute('contenteditable', 'true');
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
    axios.post('/admin/create-post', {
        textPost: document.querySelector('.editor').innerHTML,
        title: document.querySelector('.editor-title').innerHTML
    })
    .then((res) => {
        location.href = '/posts';
    })
    .catch((err) => {
        console.log(err);
    });
}
document.querySelectorAll('input').forEach(elem => {
    const label = elem.nextElementSibling;

    

    elem.addEventListener('focus', () => {
        label.classList.remove('label__text--blurred');
        label.classList.add('label__text--focused');
    });

    elem.addEventListener('blur', () => {
        if(!elem.value) {
            label.classList.remove('label__text--focused');
            label.classList.add('label__text--blurred');
        }
    });
});
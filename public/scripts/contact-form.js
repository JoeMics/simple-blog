document.querySelectorAll('input').forEach(input => {
    const label = input.nextElementSibling;

    input.addEventListener('focus', () => {
        label.classList.remove('label__text--blurred');
        label.classList.add('label__text--focused');
    });

    input.addEventListener('blur', () => {
        if(!input.value) {
            label.classList.remove('label__text--focused');
            label.classList.add('label__text--blurred');
        }
    });
});
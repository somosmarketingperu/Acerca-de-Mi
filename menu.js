// Circular Menu Click Support
// Adds click toggle functionality to circular menu (hover already works via Tailwind)

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.fixed.bottom-8 button');

    if (menuButton) {
        menuButton.addEventListener('click', function () {
            this.parentElement.classList.toggle('group');
        });
    }
});

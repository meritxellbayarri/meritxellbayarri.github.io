---
layout: compress
---

document.addEventListener('DOMContentLoaded', function () {
    handleNavbars();
    handlePostExcerpt();
});

function handleNavbars() {
    var button, navbar, buttons = document.querySelectorAll('[data-collapse-toggle]');

    for (button of buttons) {
        navbar = document.getElementById(button.dataset.collapseToggle);

        if (navbar) {
            button.addEventListener('click', function () {
                navbar.classList.toggle('hidden');
            });
        }
    }
}

function handlePostExcerpt() {
    var excerpt, container = document.querySelector('[data-post-content]');

    if (!container) {
        return;
    }

    excerpt = container.querySelectorAll('p')[0];

    if (excerpt) {
        excerpt.classList.add('lead');
    }
}

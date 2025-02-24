document.addEventListener('DOMContentLoaded', () => {
    addSidebarItemEventListeners();
});

// window.onload = () => addSidebarItemEventListeners();


const addSidebarItemEventListeners = () => {
    document.querySelector('#sidebar-heading-contact').addEventListener('click', toggleSidebarItem);
    document.querySelector('#sidebar-heading-skills').addEventListener('click', toggleSidebarItem);
    document.querySelector('#sidebar-heading-languages').addEventListener('click', toggleSidebarItem);
    document.querySelector('#sidebar-heading-references').addEventListener('click', toggleSidebarItem);
}

document.addEventListener('DOMContentLoaded', addSidebarItemEventListeners);

const toggleSidebarItem = (event) => {
    if (window.innerWidth >= 768) return;

    const item = event.target.id.replace('sidebar-heading-', '');
    const headingIcon = document.querySelector(`#sidebar-heading-icon-${item}`);
    const list = document.querySelector(`#sidebar-list-${item}`);

    headingIcon.classList.toggle('bi-chevron-down');
    headingIcon.classList.toggle('bi-chevron-right');
    list.classList.toggle('hidden');
}
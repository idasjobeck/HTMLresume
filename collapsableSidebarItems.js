document.addEventListener('DOMContentLoaded', () => {
    addSidebarItemEventListeners();
});

// window.onload = () => addSidebarItemEventListeners();


const addSidebarItemEventListeners = () => {
    document.querySelector('#sidebar-heading-contact').addEventListener('click', () => toggleSidebarItem('contact'));
    document.querySelector('#sidebar-heading-skills').addEventListener('click', () => toggleSidebarItem('skills'));
    document.querySelector('#sidebar-heading-languages').addEventListener('click', () => toggleSidebarItem('languages'));
    document.querySelector('#sidebar-heading-references').addEventListener('click', () => toggleSidebarItem('references'));
}


const toggleSidebarItem = (id) => {
    
    if (window.innerWidth < 768) {
        const headingIcon = document.querySelector(`#sidebar-heading-icon-${id}`);
        const list = document.querySelector(`#sidebar-list-${id}`);
        
        headingIcon.classList.toggle('bi-chevron-down');
        headingIcon.classList.toggle('bi-chevron-right');
        list.classList.toggle('hidden');
    }
}
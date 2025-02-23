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


const resetSidebarItemsToDisplayAll = () => {
    document.querySelectorAll('.sidebar-list').forEach(list => list.style.display = 'block');
    document.querySelectorAll('.sidebar-list-subheading').forEach(subHeading => subHeading.style.display = 'block');
}


const resetSidebarItemsToDisplayNone = () => {
    document.querySelectorAll('.sidebar-heading-icon').forEach(icon => {
        if (icon.classList.contains('bi-chevron-down')) {
            icon.classList.remove('bi-chevron-down');
            icon.classList.add('bi-chevron-right');
        }
    });

    document.querySelectorAll('.sidebar-list').forEach(list => list.style.display = 'none');
    document.querySelectorAll('.sidebar-list-subheading').forEach(subHeading => subHeading.style.display = 'none');
}
document.addEventListener('DOMContentLoaded', () => {
    window.onload = () => addSidebarItemEventListeners();

    window.onresize = () => {
        if (window.innerWidth < 768) {
            resetSidebarItemsToDisplayNone();
        }
        else {
            resetSidebarItemsToDisplayAll();
        }
    }
});


const addSidebarItemEventListeners = () => {
    // const contact = document.querySelector('#sidebar-heading-contact');
    // const skills = document.querySelector('#sidebar-heading-skills');
    // const languages = document.querySelector('#sidebar-heading-languages');
    // const references = document.querySelector('#sidebar-heading-references');

    // contact.addEventListener('click', () => toggleSidebarItem('contact'));
    // skills.addEventListener('click', () => toggleSidebarItem('skills'));
    // languages.addEventListener('click', () => toggleSidebarItem('languages'));
    // references.addEventListener('click', () => toggleSidebarItem('references'));

    document.querySelector('#sidebar-heading-contact').addEventListener('click', () => toggleSidebarItem('contact'));
    document.querySelector('#sidebar-heading-skills').addEventListener('click', () => toggleSidebarItem('skills'));
    document.querySelector('#sidebar-heading-languages').addEventListener('click', () => toggleSidebarItem('languages'));
    document.querySelector('#sidebar-heading-references').addEventListener('click', () => toggleSidebarItem('references'));
}


const toggleSidebarItem = (id) => {
    const headingIcon = document.querySelector(`#sidebar-heading-icon-${id}`);

    if (id === 'skills') {
        var lists = [];
        for (var i = 1; i <= 5; i++) {
            lists.push(document.querySelector(`#sidebar-list-${id}-${i}`));
        }
        var subHeadings = [];
        for (var i = 1; i <= 5; i++) {
            subHeadings.push(document.querySelector(`#sidebar-subheading-${id}-${i}`));
        }
    }
    else {
        var list = document.querySelector(`#sidebar-list-${id}`);
    }

    if (window.innerWidth < 768) {
        if (headingIcon.classList.contains('bi-chevron-down')) {
            headingIcon.classList.remove('bi-chevron-down');
            headingIcon.classList.add('bi-chevron-right');

            if (id === 'skills') {
                lists.forEach(list => list.style.display = 'none');
                subHeadings.forEach(subHeading => subHeading.style.display = 'none');
            }
            else {
                list.style.display = 'none';
            }
        }
        else {
            headingIcon.classList.remove('bi-chevron-right');
            headingIcon.classList.add('bi-chevron-down');
            if (id === 'skills') {
                lists.forEach(list => list.style.display = 'block');
                subHeadings.forEach(subHeading => subHeading.style.display = 'block');
            }
            else {
                list.style.display = 'block';
            }
        }
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
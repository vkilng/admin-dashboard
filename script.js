const menuButton = document.querySelector('.mobile-menu-icon');
const sidebar = document.querySelector('.sidebar');

menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    // console.log('event listener 1 triggered');
})

document.addEventListener('click', (e) => {
    if (sidebar.classList.contains('show')
        && !e.target.classList.contains('sidebar')
        && e.target !== menuButton) {
        sidebar.classList.remove('show');
    }
    // console.log('event listener 2 triggered');
})
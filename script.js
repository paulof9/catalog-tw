function onToggleMenu(e) {
    const navlinks = document.querySelector('.nav-links')
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navlinks.classList.toggle('top-[10%]')
}
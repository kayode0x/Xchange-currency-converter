//mobile nav bar
document.querySelector('.burger').addEventListener('click', () => {
    const openMenu = document.querySelector('.open');
    const closeMenu = document.querySelector('.close');
    const body = document.getElementsByTagName('BODY')[0];
    const nav = document.querySelector('.mainLi');

    if (nav.style.display !== 'block') {
        body.style.overflow = 'hidden';
        openMenu.classList.remove('menuOpen')
        openMenu.classList.add('menuClose')
        closeMenu.classList.remove('menuClose')
        closeMenu.classList.add('menuOpen')
        nav.style.display = 'block';
        nav.style.animation = 'navFadeIn 1s ease forwards';
    } else {
        body.style.overflow = '';
        body.style.backgroundColor = '';
        closeMenu.classList.add('menuClose')
        closeMenu.classList.remove('menuOpen')
        openMenu.classList.add('menuOpen')
        openMenu.classList.remove('menuClose')
        nav.style.animation = 'navFadeOut .5s ease forwards';
        setTimeout(() => {
            nav.style.display = 'none';
        }, 500)
    }

});
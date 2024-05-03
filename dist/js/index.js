window.onload = () => {
    const navCloseToggler = document.querySelector('#toggle-close')
    navCloseToggler.addEventListener('click', closeNav)

    const navOpenToggler = document.querySelector('#toggle-open')
    navOpenToggler.addEventListener('click', openNav)

    headerStyleEventListener()
}

function closeNav() {
    const nav = document.querySelector('nav')
    nav.style.display = 'none'
}

function openNav() {
    const nav = document.querySelector('nav')
    nav.style.display = 'flex'
}

function headerStyleEventListener() {
    window.addEventListener('scroll', function () {
        if(!isMobile()) {
            var nav = document.querySelector('.mini-header');
            if (window.scrollY > 500) {
                nav.style.display = 'none'
            } else {
                nav.style.display = 'block'
            }
        }
    });

}

function isMobile() {
    let matches = window.matchMedia('(max-width: 1024px)').matches
    return matches
}
const menu = (() => {
    const hamburger = document.querySelector('.hamburger');
    const navLink = document.querySelector('.nav-link');
    const link = document.querySelectorAll('.nav-link > li');

    const toggleHamburger = () => {
        hamburger.classList.toggle('active');
    }

    const toggleNavLink = () => {
        navLink.classList.toggle('active-nav');
    }

    const closeNavLink = () => {
        for(let i = 0; i < link.length; i++) {
            link[i].addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLink.classList.remove('active-nav');
            })
        }
    }

        return {
            eventListener: () => {
                hamburger.addEventListener('click', () => {
                    toggleHamburger();
                    toggleNavLink();
                    closeNavLink();
                });
            }
        }
})();

menu.eventListener();
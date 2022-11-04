const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links')

    burger.addEventListener('click', ()=>{
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Burger Lines
        burger.classList.toggle('toggle');
    
    });
}

navSlide();
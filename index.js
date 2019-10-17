$('#navbar a, .btn').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            },
            800
        );
    }
});

//navigation menu icon on low resolutions

const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const navList = document.querySelector('.nav-list');
//onclick event setup
menuIcon.addEventListener('click', () => {
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    navList.style.display = 'block';
})
closeIcon.addEventListener('click', () => {
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    navList.style.display = 'none';
})
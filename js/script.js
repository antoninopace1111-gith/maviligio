document.addEventListener('DOMContentLoaded', () => {
    
    const hamburger = document.getElementById('hamburger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav ul li a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        });
    });

    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = "10px 5%";
            header.style.height = "100px";
        } else {
            header.style.padding = "0 5%";
            header.style.height = "130px";
        }
    });

    window.openModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeModal = function(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };

    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');

    if (cookieBanner && !localStorage.getItem('maviligio_cookie_accepted')) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 2000);
    }

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('maviligio_cookie_accepted', 'true');
            cookieBanner.classList.remove('show');
        });
    }

    const observerOptions = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.history-item').forEach(item => {
        observer.observe(item);
    });

    const promoButtons = document.querySelectorAll('.btn-promo');
    promoButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.innerHTML = 'Contattaci <i class="fab fa-instagram"></i>';
        });
        button.addEventListener('mouseleave', () => {
            button.innerHTML = 'Acquista Ora';
        });
        button.addEventListener('click', () => {
            window.open('https://www.instagram.com/maviligio_official', '_blank');
        });
    });

    const brandTrack = document.querySelector('.brand-track');
    if (brandTrack) {
        brandTrack.addEventListener('mouseenter', () => {
            brandTrack.style.animationPlayState = 'paused';
        });
        brandTrack.addEventListener('mouseleave', () => {
            brandTrack.style.animationPlayState = 'running';
        });
    }
});

function moveSlider(button, direction) {
    const slider = button.closest('.product-slider');
    const track = slider.querySelector('.slider-track');
    
    if (direction === 1) {
        track.style.transform = 'translateX(-50%)';
    } else {
        track.style.transform = 'translateX(0%)';
    }
}
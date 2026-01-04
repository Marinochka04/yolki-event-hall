const burger = document.querySelector('.burger');
const nav = document.querySelector('.header-nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.reviews-carousel');
    const prevBtn = document.querySelector('.reviews-navigation .prev');
    const nextBtn = document.querySelector('.reviews-navigation .next');

    const scrollAmount = 350;

    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const toggleBtn = item.querySelector('.faq-toggle');
        const answer = item.querySelector('.faq-answer');
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', function() {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.faq-answer').classList.remove('open');
                    otherItem.querySelector('.faq-toggle').classList.remove('active');
                }
            });

            answer.classList.toggle('open');
            toggleBtn.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');

    stars.forEach((star, index) => {
        star.addEventListener('click', function() {
            stars.forEach(s => s.classList.remove('active'));
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add('active');
            }
        });

        star.addEventListener('mouseover', function() {
            stars.forEach(s => s.classList.remove('hover'));
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add('hover');
            }
        });

        star.addEventListener('mouseout', function() {
            stars.forEach(s => s.classList.remove('hover'));
        });
    });
});

const hallPhotos = {
    bar: {
        title: 'Барный зал',
        photos: [
            'images/bar1.png',
            'images/bar-hall1.jpg',
            'images/bar-hall-main.jpg',
            'images/bar2.png',
            'images/bar3.png',
            'images/bar4.png',
            'images/bar5.png'
        ]
    },
    green: {
        title: 'Зелёный зал',
        photos: [
            'images/green-hall1.jpg',
            'images/green-hall2.jpg',
            'images/green-hall-main.jpg'
        ]
    },
    chalet: {
        title: 'Шале',
        photos: [
            'images/chalet-main.jpg',
            'images/chalet.png',
            'images/chalet-hall.JPG',
            'images/chalet2.png',
            'images/chalet3.png',
            'images/chalet4.png',
            'images/chalet5.png',
            'images/chalet6.png',
            'images/chalet7.png',
            'images/chalet8.png',
            'images/chalet9.png'
        ]
    }
};

document.querySelectorAll('.view-photos-btn').forEach(button => {
    button.addEventListener('click', function() {
        const hall = this.getAttribute('data-hall');
        const hallData = hallPhotos[hall];
        
        document.getElementById('modalTitle').textContent = `Фотографии - ${hallData.title}`;
        
        const photoGrid = document.getElementById('photoGrid');
        photoGrid.innerHTML = '';
        
        hallData.photos.forEach(photo => {
            const photoItem = document.createElement('div');
            photoItem.className = 'photo-item';
            photoItem.innerHTML = `<img src="${photo}" alt="${hallData.title}">`;
            photoGrid.appendChild(photoItem);
        });
        
        document.getElementById('photoModal').classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

document.querySelector('.close-modal').addEventListener('click', function() {
    document.getElementById('photoModal').classList.remove('active');
    document.body.style.overflow = '';
});

document.getElementById('photoModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
        document.body.style.overflow = '';
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.getElementById('photoModal').classList.remove('active');
        document.body.style.overflow = '';
    }
});
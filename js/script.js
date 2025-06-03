document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================
    // Навігаційне меню (гамбургер-меню)
    // ==========================================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        // Закриття меню при кліку на посилання (для мобільних)
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 992) { // Застосовувати лише для мобільних/планшетів
                    navList.classList.remove('active');
                }
            });
        });
    }

    // ==========================================================
    // Слайдер
    // ==========================================================
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.slider-nav.prev');
    const nextBtn = document.querySelector('.slider-nav.next');
    const sliderDotsContainer = document.querySelector('.slider-dots');

    let currentIndex = 0;
    let autoSlideInterval;
    const slideDuration = 5000; // 5 секунд

    function updateSlider() {
        if (sliderContainer) {
            sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateDots();
        }
    }

    function createDots() {
        if (!sliderDotsContainer) return;
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.dataset.index = index;
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
                resetAutoSlide();
            });
            sliderDotsContainer.appendChild(dot);
        });
    }

    function updateDots() {
        if (!sliderDotsContainer) return;
        document.querySelectorAll('.dot').forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function goToPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    function startAutoSlide() {
        stopAutoSlide(); // Зупиняємо попередній інтервал, якщо він існує
        autoSlideInterval = setInterval(goToNextSlide, slideDuration);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    if (slides.length > 0 && sliderContainer && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            goToPrevSlide();
            resetAutoSlide();
        });

        nextBtn.addEventListener('click', () => {
            goToNextSlide();
            resetAutoSlide();
        });

        function resetAutoSlide() {
            stopAutoSlide();
            startAutoSlide();
        }

        createDots();
        updateSlider(); // Ініціалізуємо слайдер
        startAutoSlide(); // Запускаємо автопрокрутку
    }


    // ==========================================================
    // Вивід 10 головних новин порталу
    // ==========================================================
    const newsContainer = document.getElementById('news-container');

    const newsData = [
        {
            title: "Нові зміни до Закону України «Про вищу освіту»",
            date: "2025-05-30",
            author: "Адміністрація порталу",
            image: "images/news/news1.jpg",
            excerpt: "Верховна Рада України прийняла законопроект, що вносить суттєві зміни до регулювання діяльності закладів вищої освіти..."
        },
        {
            title: "Судовий прецедент: захист прав студента при відрахуванні",
            date: "2025-05-28",
            author: "Юридичний відділ",
            image: "images/news/news2.jpg",
            excerpt: "Важливе рішення суду у справі про неправомірне відрахування студента відкриває нові можливості для захисту прав здобувачів освіти..."
        },
        {
            title: "Правові аспекти дистанційного навчання у вишах",
            date: "2025-05-25",
            author: "Експертний аналіз",
            image: "images/news/news3.jpg",
            excerpt: "Аналіз чинного законодавства щодо організації дистанційного навчання, виклики та шляхи їх вирішення..."
        },
        {
            title: "Конференція з питань інтелектуальної власності у ВНЗ",
            date: "2025-05-22",
            author: "Оргкомітет",
            image: "images/news/news4.jpg",
            excerpt: "Відбулася щорічна міжнародна конференція, присвячена захисту прав інтелектуальної власності в університетському середовищі..."
        },
        {
            title: "Регулювання академічної доброчесності: нові підходи",
            date: "2025-05-20",
            author: "Науковий огляд",
            image: "images/news/news5.jpg",
            excerpt: "Огляд світових практик та українських ініціатив у сфері забезпечення академічної доброчесності..."
        },
        {
            title: "Онлайн-консультації для абітурієнтів: юридичні поради",
            date: "2025-05-18",
            author: "Консультаційний центр",
            image: "images/news/news6.jpg",
            excerpt: "Відкрито гарячу лінію та онлайн-форму для юридичних консультацій для вступників 2025 року..."
        },
        {
            title: "Зміни у процедурі акредитації освітніх програм",
            date: "2025-05-15",
            author: "НАЗЯВО",
            image: "images/news/news7.jpg",
            excerpt: "Національне агентство із забезпечення якості вищої освіти анонсувало оновлення процедур акредитації..."
        },
        {
            title: "Міжнародна співпраця вишів: юридичні особливості",
            date: "2025-05-12",
            author: "Відділ міжнародних зв'язків",
            image: "images/news/news8.jpg",
            excerpt: "Юридичний аналіз угод про міжнародну співпрацю між українськими та зарубіжними університетами..."
        },
        {
            title: "Практикум: як захистити дипломну роботу від плагіату",
            date: "2025-05-10",
            author: "Центр правових досліджень",
            image: "images/news/news9.jpg",
            excerpt: "Корисні поради та рекомендації для студентів щодо забезпечення оригінальності своїх наукових робіт..."
        },
        {
            title: "Вебінар: податкові нюанси для викладачів-ФОП",
            date: "2025-05-08",
            author: "Бухгалтерська служба",
            image: "images/news/news10.jpg",
            excerpt: "Запрошуємо на безкоштовний вебінар, присвячений останнім змінам у податковому законодавстві для самозайнятих викладачів..."
        }
    ];

    if (newsContainer) {
        newsData.slice(0, 10).forEach(news => { // Виводимо перші 10 новин
            const newsItem = document.createElement('div');
            newsItem.classList.add('news-item');

            newsItem.innerHTML = `
                <img src="${news.image}" alt="${news.title}">
                <div class="news-content">
                    <h3>${news.title}</h3>
                    <p>${news.excerpt}</p>
                    <div class="news-meta">
                        <span>Дата: ${news.date}</span>
                        <span>Автор: ${news.author}</span>
                    </div>
                </div>
            `;
            newsContainer.appendChild(newsItem);
        });
    }

    // ==========================================================
    // Плавний скрол до секцій
    // ==========================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});

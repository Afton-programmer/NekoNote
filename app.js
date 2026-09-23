/**
 * NekoNote - Interactive App Experience Logic
 * High-performance Vanilla JavaScript ES6+
 * SEO & Exclusive Myket Integration
 */

document.addEventListener('DOMContentLoaded', () => {

  // ===================================================================
  // 1. Navbar Scroll Effect & Mobile Menu
  // ===================================================================
  const mainNavbar = document.getElementById('mainNavbar');
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Navbar glass effect on scroll
    if (scrollPos > 30) {
      mainNavbar.classList.add('scrolled');
    } else {
      mainNavbar.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollPos > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Mobile menu toggle
  if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });

    // Close menu when clicking any nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
      });
    });
  }

  // ===================================================================
  // 2. Theme Switcher (Dark / Light Mode)
  // ===================================================================
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const moonIcon = document.getElementById('moonIcon');
  const sunIcon = document.getElementById('sunIcon');

  // Check saved theme or default to dark
  const savedTheme = localStorage.getItem('nekonote-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcons(savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('nekonote-theme', nextTheme);
    updateThemeIcons(nextTheme);
  });

  function updateThemeIcons(theme) {
    if (theme === 'light') {
      moonIcon.style.display = 'none';
      sunIcon.style.display = 'block';
    } else {
      moonIcon.style.display = 'block';
      sunIcon.style.display = 'none';
    }
  }

  // ===================================================================
  // 3. Hero Phone Mockup Auto & Manual Carousel
  // ===================================================================
  const heroPhoneImg = document.getElementById('heroPhoneImg');
  const phoneDots = document.querySelectorAll('.phone-dot');
  let currentMockupIdx = 0;
  const mockupImages = [
    './image/photo_1_2026-09-23_22-22-26.jpg',
    './image/photo_11_2026-09-23_22-22-26.jpg',
    './image/photo_6_2026-09-23_22-22-26.jpg',
    './image/photo_12_2026-09-23_22-22-26.jpg',
    './image/photo_9_2026-09-23_22-22-26.jpg'
  ];

  function setMockupSlide(index) {
    if (!heroPhoneImg || !phoneDots.length) return;
    currentMockupIdx = index;
    heroPhoneImg.style.opacity = '0';

    setTimeout(() => {
      heroPhoneImg.src = mockupImages[currentMockupIdx];
      heroPhoneImg.style.opacity = '1';
    }, 200);

    phoneDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentMockupIdx);
    });
  }

  phoneDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      setMockupSlide(index);
    });
  });

  // Auto cycle every 4.5 seconds
  setInterval(() => {
    const nextIndex = (currentMockupIdx + 1) % mockupImages.length;
    setMockupSlide(nextIndex);
  }, 4500);

  // ===================================================================
  // 4. Interactive Live Demo Controls (Studio)
  // ===================================================================
  const demoRgbToggle = document.getElementById('demoRgbToggle');
  const demoGlassToggle = document.getElementById('demoGlassToggle');
  const demoNoteCard = document.getElementById('demoNoteCard');
  const colorDots = document.querySelectorAll('.color-dot');
  const accentColorName = document.getElementById('accentColorName');
  const radiusRange = document.getElementById('radiusRange');
  const radiusVal = document.getElementById('radiusVal');
  const demoInputText = document.getElementById('demoInputText');
  const demoNoteContent = document.getElementById('demoNoteContent');
  const demoTagBadge = document.getElementById('demoTagBadge');

  if (demoRgbToggle && demoNoteCard) {
    demoRgbToggle.addEventListener('change', (e) => {
      if (e.target.checked) {
        demoNoteCard.classList.add('rgb-mode');
      } else {
        demoNoteCard.classList.remove('rgb-mode');
      }
    });
  }

  if (demoGlassToggle && demoNoteCard) {
    demoGlassToggle.addEventListener('change', (e) => {
      if (e.target.checked) {
        demoNoteCard.classList.add('glass-mode');
      } else {
        demoNoteCard.classList.remove('glass-mode');
      }
    });
  }

  if (colorDots.length) {
    colorDots.forEach(dot => {
      dot.addEventListener('click', () => {
        colorDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');

        const color = dot.getAttribute('data-color');
        const name = dot.getAttribute('data-name');

        if (accentColorName) accentColorName.textContent = name;
        if (demoTagBadge) {
          demoTagBadge.style.color = color;
          demoTagBadge.style.background = color + '22';
        }
      });
    });
  }

  if (radiusRange && demoNoteCard && radiusVal) {
    radiusRange.addEventListener('input', (e) => {
      const val = e.target.value + 'px';
      demoNoteCard.style.borderRadius = val;
      radiusVal.textContent = val;
    });
  }

  if (demoInputText && demoNoteContent) {
    demoInputText.addEventListener('input', (e) => {
      demoNoteContent.textContent = e.target.value.trim() || 'برنامه‌ریزی برای موفقیت با نکو‌نوت 🚀';
    });
  }

  // ===================================================================
  // 5. Interactive Joke Studio Simulator
  // ===================================================================
  const jokeSimCard = document.getElementById('jokeSimCard');
  const jokeSimTitle = document.getElementById('jokeSimTitle');
  const jokeSimBody = document.getElementById('jokeSimBody');
  const jokeSimNewQuoteBtn = document.getElementById('jokeSimNewQuoteBtn');
  const themePillBtns = document.querySelectorAll('.theme-pill-btn[data-gradient]');

  const jokesDatabase = [
    {
      title: "فرمول بخت‌گشایی دختران جویای شوهر کشف شد!",
      body: "دخترای گل روزی ۳ وعده صبح، ظهر و شب با ریتم بخونید:<br><strong>شوهر شوهره ، شوهر قند عسله شوهر! 😂</strong>"
    },
    {
      title: "قانون جدید برنامه‌نویسی و زندگی:",
      body: "اگه کدت کار نمیکنه، نگران نباش با یکم دیباگ حل میشه...<br><strong>ولی اگه تو اولین اجرا کار کرد، سریع فرار کن که یه جای کار میلنگه! ☕</strong>"
    },
    {
      title: "راز داشتن پس‌انداز میلیاردی در سال جدید:",
      body: "۱. زود بیدار شوید.<br>۲. قهوه بنوشید.<br><strong>۳. هر بار خواستید خرید کنید، نکو‌نوت رو باز کنید و بنویسید: پول ندارم! 🐱</strong>"
    },
    {
      title: "نکته فوق علمی ادمین‌ها:",
      body: "پست طنز بدون واتر‌مارک، مثل چایی بدون قنده!<br><strong>نکونوت واترمارکت رو اتوماتیک درج میکنه تا کسی ندزده! ✨</strong>"
    }
  ];

  let currentJokeIdx = 0;

  if (themePillBtns.length && jokeSimCard) {
    themePillBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        themePillBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const gradient = btn.getAttribute('data-gradient');
        jokeSimCard.style.background = gradient;
      });
    });
  }

  if (jokeSimNewQuoteBtn && jokeSimTitle && jokeSimBody) {
    jokeSimNewQuoteBtn.addEventListener('click', () => {
      jokeSimCard.style.transform = 'scale(0.96)';
      setTimeout(() => {
        currentJokeIdx = (currentJokeIdx + 1) % jokesDatabase.length;
        const joke = jokesDatabase[currentJokeIdx];
        jokeSimTitle.textContent = joke.title;
        jokeSimBody.innerHTML = joke.body;
        jokeSimCard.style.transform = 'scale(1)';
      }, 150);
    });
  }

  // ===================================================================
  // 6. Screenshot Gallery Filter & Lightbox
  // ===================================================================
  const galleryTabBtns = document.querySelectorAll('.gallery-tab-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');

  // Filter tabs
  galleryTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      galleryTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.style.display = 'block';
          item.style.opacity = '1';
        } else {
          item.style.display = 'none';
          item.style.opacity = '0';
        }
      });
    });
  });

  // Lightbox click
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.getAttribute('data-img');
      const title = item.getAttribute('data-title');
      if (lightboxModal && lightboxImg && lightboxCaption) {
        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = title;
        lightboxModal.classList.add('active');
      }
    });
  });

  if (closeLightboxBtn && lightboxModal) {
    closeLightboxBtn.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
    });

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
      }
    });
  }

  // ===================================================================
  // 7. FAQ Accordion Interaction (SEO Rich Snippets)
  // ===================================================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other items for clean accordion effect
        faqItems.forEach(otherItem => {
          otherItem.classList.remove('active');
        });

        // Toggle clicked item
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // ===================================================================
  // 8. Donate Modal & Copy Phone Handler
  // ===================================================================
  const donateModalBtn = document.getElementById('donateModalBtn');
  const donateModal = document.getElementById('donateModal');
  const closeDonateModal = document.getElementById('closeDonateModal');
  const copyPhoneDonateBtn = document.getElementById('copyPhoneDonateBtn');

  if (donateModalBtn && donateModal) {
    donateModalBtn.addEventListener('click', () => {
      donateModal.classList.add('active');
    });
  }

  if (closeDonateModal && donateModal) {
    closeDonateModal.addEventListener('click', () => {
      donateModal.classList.remove('active');
    });

    donateModal.addEventListener('click', (e) => {
      if (e.target === donateModal) {
        donateModal.classList.remove('active');
      }
    });
  }

  if (copyPhoneDonateBtn) {
    copyPhoneDonateBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('09031247908').then(() => {
        copyPhoneDonateBtn.textContent = 'شماره با موفقیت کپی شد! ✓';
        setTimeout(() => {
          copyPhoneDonateBtn.textContent = 'کپی شماره تماس توسعه‌دهنده';
        }, 2500);
      }).catch(() => {
        alert('شماره تماس: 09031247908');
      });
    });
  }

  // ===================================================================
  // 9. Keyboard Escape Handler for All Modals
  // ===================================================================
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightboxModal) lightboxModal.classList.remove('active');
      if (donateModal) donateModal.classList.remove('active');
    }
  });

});

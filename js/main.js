// 移动端菜单切换
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
}

// 深色模式切换
const darkToggle = document.getElementById('darkToggle');
if (darkToggle) {
    if (localStorage.getItem('darkMode') === 'on') {
        document.body.classList.add('dark-mode');
        darkToggle.textContent = '☀️';
    }
    darkToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        darkToggle.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('darkMode', isDark ? 'on' : 'off');
    });
}

// 中英文切换
const langToggle = document.getElementById('langToggle');
if (langToggle) {
    let currentLang = localStorage.getItem('language') || 'zh';
    
    applyLanguage(currentLang);
    
    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'zh' ? 'en' : 'zh';
        applyLanguage(currentLang);
        localStorage.setItem('language', currentLang);
    });
    
    function applyLanguage(lang) {
        langToggle.textContent = lang === 'zh' ? 'EN' : '中';
        
        document.querySelectorAll('[data-zh]').forEach(el => {
            el.textContent = el.getAttribute('data-' + lang);
        });
        
        const title = document.querySelector('title');
        if (title && title.getAttribute('data-zh')) {
            document.title = title.getAttribute('data-' + lang);
        }
    }
}

console.log('✅ 溯源链网站加载成功！');
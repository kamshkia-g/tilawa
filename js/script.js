// سنة الفوتر
document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// فتح/إغلاق قائمة الجوال
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');
if (toggle && menu){
  toggle.addEventListener('click', () => {
    menu.style.display = (menu.style.display === 'flex' ? 'none' : 'flex');
  });
}

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
  });
},{threshold:0.12});
reveals.forEach(el=>io.observe(el));

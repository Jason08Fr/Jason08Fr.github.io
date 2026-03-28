// Lightweight interactions: smooth scroll and tiny parallax
(function(){
  // smooth scroll for nav links
  document.querySelectorAll('.nav-links a').forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });

  // small parallax effect on hero illustration
  const heroIllus = document.querySelector('.hero-illus');
  window.addEventListener('scroll', ()=>{
    const y = window.scrollY;
    if(heroIllus) heroIllus.style.transform = `translateY(${Math.min(y*0.08,30)}px)`;
  });
})();

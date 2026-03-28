document.querySelectorAll(".nav-links a").forEach(a=>{
  a.onclick = function(e){
    e.preventDefault();
    const id = a.getAttribute("href");
    const el = document.querySelector(id);
    if(el){
      window.scrollTo({top:el.offsetTop-50, behavior:"smooth"});
    }
  }
});
// Soft input focus + card animation (optional, can be removed)
document.querySelectorAll(".contact-form input, .contact-form textarea").forEach(x=>{
  x.onfocus = ()=>x.style.borderColor="#62b1b1";
  x.onblur = ()=>x.style.borderColor="#d7ebe8";
});

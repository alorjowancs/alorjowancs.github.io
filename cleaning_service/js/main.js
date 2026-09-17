document.addEventListener("DOMContentLoaded",()=>{
  const nav=document.querySelector(".navbar");
  const back=document.querySelector(".back-top");
  const year=document.querySelector("[data-year]");
  if(year) year.textContent=new Date().getFullYear();
  const onScroll=()=>{if(nav) nav.classList.toggle("scrolled",window.scrollY>20);if(back) back.classList.toggle("show",window.scrollY>500)};
  window.addEventListener("scroll",onScroll,{passive:true});onScroll();
  if(back) back.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
  if("IntersectionObserver" in window){const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}})},{threshold:.12});document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));}
  document.querySelectorAll("[data-bs-target='#quoteModal'],a[href='#quoteModal']").forEach(btn=>btn.addEventListener("click",()=>{const service=btn.dataset.service||"";const input=document.querySelector("#quoteService");if(input&&service) input.value=service;}));
  const form=document.querySelector("#quoteForm");
  if(form){form.addEventListener("submit",e=>{e.preventDefault();const data=new FormData(form);const name=data.get("name")||"";const phone=data.get("phone")||"";const service=data.get("service")||"Cleaning Service";const property=data.get("property")||"";const area=data.get("area")||"";const msg=data.get("message")||"";const ar=document.documentElement.lang==='ar';const text=ar?`مرحباً شركة الأورجوان لخدمات التنظيف، أرغب في الحصول على عرض سعر.%0A%0Aالاسم: ${encodeURIComponent(name)}%0Aالهاتف: ${encodeURIComponent(phone)}%0Aالخدمة: ${encodeURIComponent(service)}%0Aنوع العقار: ${encodeURIComponent(property)}%0Aالموقع: ${encodeURIComponent(area)}%0Aالتفاصيل: ${encodeURIComponent(msg)}`:`Hello Al Orjowan Cleaning Services, I would like a cleaning quote.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0AProperty: ${encodeURIComponent(property)}%0ALocation: ${encodeURIComponent(area)}%0ADetails: ${encodeURIComponent(msg)}`;window.open("https://wa.me/971589932621?text="+text,"_blank");const modalEl=document.querySelector('#quoteModal');if(modalEl&&window.bootstrap) bootstrap.Modal.getOrCreateInstance(modalEl).hide();form.reset();});}
  const emailForm=document.querySelector("#contactForm");if(emailForm) emailForm.addEventListener("submit",e=>{e.preventDefault();const note=document.querySelector("#formSuccess");if(note){note.classList.remove("d-none");emailForm.reset();}});
  const closeCookie=localStorage.getItem("alorjowan_cookie_note");const cookie=document.querySelector("#cookieNote");const cookieBtn=document.querySelector("#cookieBtn");if(cookie&&!closeCookie) cookie.style.display="block";if(cookieBtn) cookieBtn.addEventListener("click",()=>{localStorage.setItem("alorjowan_cookie_note","1");cookie.style.display="none"});
});

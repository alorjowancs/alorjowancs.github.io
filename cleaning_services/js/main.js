
document.addEventListener("DOMContentLoaded",()=>{
  const nav=document.querySelector(".navbar");
  const back=document.querySelector(".back-top");
  const year=document.querySelector("[data-year]");
  if(year) year.textContent=new Date().getFullYear();

  const onScroll=()=>{
    if(nav) nav.classList.toggle("scrolled",window.scrollY>20);
    if(back) back.classList.toggle("show",window.scrollY>500);
  };
  window.addEventListener("scroll",onScroll,{passive:true}); onScroll();

  if(back) back.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}})
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));

  document.querySelectorAll(".service-quote").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const service=btn.dataset.service||"Cleaning Service";
      const input=document.querySelector("#quoteService");
      if(input) input.value=service;
    });
  });

  const form=document.querySelector("#quoteForm");
  if(form){
    form.addEventListener("submit",e=>{
      e.preventDefault();
      const data=new FormData(form);
      const name=data.get("name")||"";
      const service=data.get("service")||"Cleaning Service";
      const msg=data.get("message")||"";
      const text=`Hello Al Orjowan Cleaning Services, I would like a quote.%0A%0AName: ${encodeURIComponent(name)}%0AService: ${encodeURIComponent(service)}%0AMessage: ${encodeURIComponent(msg)}`;
      window.open("https://wa.me/971589932621?text="+text,"_blank");
    });
  }

  const emailForm=document.querySelector("#contactForm");
  if(emailForm){
    emailForm.addEventListener("submit",e=>{
      e.preventDefault();
      const note=document.querySelector("#formSuccess");
      if(note){note.classList.remove("d-none");emailForm.reset();}
    });
  }

  const closeCookie=localStorage.getItem("alorjowan_cookie_note");
  const cookie=document.querySelector("#cookieNote");
  const cookieBtn=document.querySelector("#cookieBtn");
  if(cookie && !closeCookie) cookie.style.display="block";
  if(cookieBtn) cookieBtn.addEventListener("click",()=>{localStorage.setItem("alorjowan_cookie_note","1");cookie.style.display="none"});
});

/* =========================================================
   JUSTICEAI FINAL POLISHED SCRIPT
========================================================= */


/* =========================================================
   MODAL CORE
========================================================= */

const docModal   = document.getElementById("docModal");

const teamModal  = document.getElementById("teamModal");

const legalModal = document.getElementById("legalModal");

const docFrame   = document.getElementById("docFrame");


/* =========================================================
   UTILITIES
========================================================= */

function lockScroll(){

  document.body.style.overflow = "hidden";

}

function unlockScroll(){

  document.body.style.overflow = "auto";

}


/* =========================================================
   CLOSE ALL MODALS
========================================================= */

function closeAllModals(){

  document
    .querySelectorAll(".modal")
    .forEach(modal=>{

      modal.classList.remove("active");

    });

  if(docFrame){

    docFrame.src = "";

  }

  unlockScroll();

}


/* =========================================================
   DOCUMENT MODAL
========================================================= */

function openDoc(url){

  const ext =
  url.split('.').pop().toLowerCase();

  if(ext === "pdf"){

    if(docFrame){

      docFrame.src = url;

    }

    docModal?.classList.add("active");

    lockScroll();

  }

  else{

    window.open(url,"_blank");

  }

}


/* =========================================================
   TEAM MODAL
========================================================= */

function openTeam(){

  teamModal?.classList.add("active");

  lockScroll();

}


/* =========================================================
   LEGAL MODAL
========================================================= */

function openLegal(){

  legalModal?.classList.add("active");

  lockScroll();

}


/* =========================================================
   CLOSE BUTTONS
========================================================= */

document
.querySelectorAll(".close")
.forEach(btn=>{

  btn.addEventListener(
    "click",
    closeAllModals
  );

});


/* =========================================================
   OUTSIDE CLICK CLOSE
========================================================= */

window.addEventListener("click",e=>{

  if(e.target.classList.contains("modal")){

    closeAllModals();

  }

});


/* =========================================================
   ESC KEY CLOSE
========================================================= */

document.addEventListener("keydown",e=>{

  if(e.key === "Escape"){

    closeAllModals();

  }

});


/* =========================================================
   LAW TABS
========================================================= */

function showLaw(id){

  document
  .querySelectorAll(".law-content")
  .forEach(section=>{

    section.style.display = "none";

  });


  document
  .querySelectorAll(".law-btn")
  .forEach(btn=>{

    btn.classList.remove("active");

  });


  const activeSection =
  document.getElementById(id);

  if(activeSection){

    activeSection.style.display =
    "block";

  }


  const activeBtn =
  document.querySelector(

    `.law-btn[onclick*="${id}"]`

  );

  activeBtn?.classList.add("active");


  const searchInput =
  document.getElementById(
    "lawSearchInput"
  );

  if(searchInput){

    searchInput.value = "";

  }

}


/* =========================================================
   LAW SEARCH FILTER
========================================================= */

function filterLawList(query){

  const activeSection =
  document.querySelector(

    '.law-content:not([style*="display: none"])'

  );

  if(!activeSection) return;

  const q = query.toLowerCase();

  activeSection
  .querySelectorAll("li")
  .forEach(item=>{

    item.style.display =

    item.textContent
    .toLowerCase()
    .includes(q)

    ? "list-item"

    : "none";

  });

}


/* =========================================================
   NAVBAR DROPDOWNS
========================================================= */

const dropdownToggles =

document.querySelectorAll(

  ".dropdown > a"

);


dropdownToggles.forEach(toggle=>{

  toggle.addEventListener("click",e=>{

    const parent =
    toggle.parentElement;

    if(parent.classList.contains("dropdown")){

      e.preventDefault();

      document
      .querySelectorAll(".dropdown")
      .forEach(drop=>{

        if(drop !== parent){

          drop.classList.remove("active");

        }

      });

      parent.classList.toggle("active");

    }

  });

});


/* =========================================================
   CLOSE DROPDOWN OUTSIDE
========================================================= */

document.addEventListener("click",e=>{

  document
  .querySelectorAll(".dropdown")
  .forEach(dropdown=>{

    if(!dropdown.contains(e.target)){

      dropdown.classList.remove("active");

    }

  });

});


/* =========================================================
   ACTIVE NAV LINK
========================================================= */

const navLinks =
document.querySelectorAll(
  ".nav-links a"
);

navLinks.forEach(link=>{

  link.addEventListener("click",()=>{

    navLinks.forEach(l=>{

      l.classList.remove(
        "active-nav"
      );

    });

    link.classList.add(
      "active-nav"
    );

  });

});


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

  anchor.addEventListener(
    "click",
    function(e){

      const target =
      document.querySelector(

        this.getAttribute("href")

      );

      if(target){

        e.preventDefault();

        target.scrollIntoView({

          behavior:"smooth"

        });

      }

    }

  );

});


/* =========================================================
   HERO BUTTONS
========================================================= */

document
.querySelector(".hero-primary")
?.addEventListener("click",()=>{

  openLegal();

});


document
.querySelector(".hero-secondary")
?.addEventListener("click",()=>{

  window.location.href =
  "dashboard.html";

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =

document.querySelectorAll(

  ".glass-card, .card, .faq, .hero-card"

);


function revealOnScroll(){

  revealElements.forEach(el=>{

    const top =
    el.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

      el.classList.add("show");

    }

  });

}

window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();


/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load",()=>{

  const loader =
  document.getElementById("loader");

  if(loader){

    loader.style.opacity = "0";

    setTimeout(()=>{

      loader.style.display = "none";

    },1000);

  }

});


/* =========================================================
   TYPING EFFECT
========================================================= */

const typingElement =

document.getElementById(
  "typingTitle"
);

const typingText =
"JusticeAI";

let typingIndex = 0;

function typeEffect(){

  if(

    typingElement &&

    typingIndex < typingText.length

  ){

    typingElement.innerHTML +=

    typingText.charAt(
      typingIndex
    );

    typingIndex++;

    setTimeout(typeEffect,150);

  }

}

typeEffect();


/* =========================================================
   COUNTER ANIMATION
========================================================= */

const counters =
document.querySelectorAll(
  ".counter"
);

counters.forEach(counter=>{

  counter.innerText = "0";

  const updateCounter = ()=>{

    const target =
    +counter.getAttribute(
      "data-target"
    );

    const current =
    +counter.innerText;

    const increment =
    target / 120;

    if(current < target){

      counter.innerText =

      `${Math.ceil(
        current + increment
      )}`;

      setTimeout(
        updateCounter,
        20
      );

    }

    else{

      counter.innerText =
      target;

    }

  };

  updateCounter();

});


/* =========================================================
   UNIVERSE BACKGROUND
========================================================= */

const canvas =
document.getElementById(
  "universe"
);

const ctx =
canvas?.getContext("2d");


let stars  = [];

let comets = [];

let w,h;


/* =========================================================
   RESIZE
========================================================= */

function resize(){

  if(!canvas) return;

  w = canvas.width =
  window.innerWidth;

  h = canvas.height =
  window.innerHeight;

}

window.addEventListener(
  "resize",
  resize
);

resize();


/* =========================================================
   GENERATE STARS
========================================================= */

for(let i=0;i<450;i++){

  stars.push({

    x:
    Math.random()*w,

    y:
    Math.random()*h,

    z:
    Math.random()*1.5 + 0.3,

    r:
    Math.random()*1.5 + 0.3,

    opacity:
    Math.random()*0.8 + 0.2

  });

}


/* =========================================================
   CREATE COMET
========================================================= */

function createComet(){

  comets.push({

    x:
    Math.random()*w,

    y:
    -100,

    length:
    Math.random()*120 + 80,

    speed:
    Math.random()*7 + 4,

    size:
    Math.random()*2 + 1

  });

}


/* =========================================================
   RANDOM COMETS
========================================================= */

setInterval(()=>{

  if(Math.random() > 0.65){

    createComet();

  }

},3000);


/* =========================================================
   ANIMATION
========================================================= */

function animate(){

  if(!ctx) return;

  ctx.clearRect(0,0,w,h);


  /* =========================
     STARS
  ========================== */

  stars.forEach(star=>{

    star.y += star.z;

    if(star.y > h){

      star.y = 0;

      star.x =
      Math.random()*w;

    }

    ctx.beginPath();

    ctx.arc(

      star.x,

      star.y,

      star.r,

      0,

      Math.PI*2

    );

    ctx.shadowBlur = 15;

    ctx.shadowColor =
    "rgba(127,124,255,.9)";

    ctx.fillStyle =

    `rgba(180,180,255,
      ${star.opacity})`;

    ctx.fill();

  });


  /* =========================
     COMETS
  ========================== */

  comets.forEach((comet,index)=>{

    const gradient =

    ctx.createLinearGradient(

      comet.x,

      comet.y,

      comet.x - comet.length,

      comet.y - comet.length

    );

    gradient.addColorStop(

      0,

      "rgba(255,255,255,1)"

    );

    gradient.addColorStop(

      1,

      "rgba(127,124,255,0)"

    );

    ctx.beginPath();

    ctx.strokeStyle =
    gradient;

    ctx.lineWidth =
    comet.size;

    ctx.moveTo(

      comet.x,

      comet.y

    );

    ctx.lineTo(

      comet.x - comet.length,

      comet.y - comet.length

    );

    ctx.stroke();

    comet.x += comet.speed;

    comet.y += comet.speed;

    if(comet.y > h + 200){

      comets.splice(index,1);

    }

  });


  requestAnimationFrame(
    animate
  );

}

animate();


/* =========================================================
   INIT
========================================================= */

document.addEventListener(

  "DOMContentLoaded",

  ()=>{

    showLaw("education");

    document
    .getElementById(
      "lawSearchInput"
    )
    ?.addEventListener(
      "input",
      e=>{

        filterLawList(
          e.target.value
        );

      }
    );

  }

);
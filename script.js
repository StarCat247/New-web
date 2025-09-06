// progressive reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
}, { threshold: 0.12 });
reveals.forEach(r => obs.observe(r));

// 3D tilt effect for cards and service items
function tiltElement(el, event, strength = 14) {
  const rect = el.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const dx = (event.clientX - cx) / rect.width;
  const dy = (event.clientY - cy) / rect.height;
  const rx = -dy * strength;
  const ry = dx * strength;
  el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(12px)`;
  el.style.boxShadow = `0 ${18 - Math.abs(dx * 10)}px ${40 - Math.abs(dy * 10)}px rgba(2,6,23,0.65)`;
}

function resetTilt(el) {
  el.style.transform = '';
  el.style.boxShadow = '';
}

// main hero card tilt and blob parallax
(function () {
  const card = document.getElementById('tiltCard');
  if (!card) return;
  card.addEventListener('mousemove', (e) => tiltElement(card, e, 10));
  card.addEventListener('mouseleave', () => resetTilt(card));

  const blobA = document.querySelector('.blob.a');
  const blobB = document.querySelector('.blob.b');
  window.addEventListener('mousemove', (e) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const nx = (e.clientX / w - 0.5) * 20;
    const ny = (e.clientY / h - 0.5) * 12;
    if (blobA) blobA.style.transform = `translate3d(${nx}px, ${-ny}px, 0)`;
    if (blobB) blobB.style.transform = `translate3d(${-nx}px, ${ny}px, 0)`;
  });
})();

// tilt for service cards with data attribute
(function () {
  document.querySelectorAll('[data-tilt]').forEach(el => {
    el.addEventListener('mousemove', (e) => tiltElement(el, e, 8));
    el.addEventListener('mouseleave', () => resetTilt(el));
    el.addEventListener('mouseenter', () => el.style.transition = 'transform 0.08s');
  });
})();

// performance: resize event listener placeholder
window.addEventListener('resize', () => {
  // could refresh layout-based logic here
});

// Contact Form Submission (using Formspree AJAX)
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const formStatus = document.getElementById("formStatus");
    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formData
      });

      if (response.ok) {
        formStatus.innerText = "✅ Message sent successfully!";
        formStatus.style.color = "#16a34a";
        contactForm.reset();
      } else {
        formStatus.innerText = "❌ Failed to send. Try again!";
        formStatus.style.color = "#dc2626";
      }
    } catch (error) {
      formStatus.innerText = "⚠️ Error sending message.";
      formStatus.style.color = "#dc2626";
    }
  });
}

// Scroll reset on unload, disable scroll restoration and scroll to top on load
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.onbeforeunload = function() {
  window.scrollTo(0, 0);
};

window.onload = function() {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10);
};

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          entry.target.classList.remove("hidden");
        } else {
          entry.target.classList.add("hidden");
          entry.target.classList.remove("visible");
        }
      });
    }, 
    { threshold: 0.5 }
  );

  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});

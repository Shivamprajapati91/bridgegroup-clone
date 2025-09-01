// (Optional) simple stat counter effect when the stats section scrolls into view
const counters = document.querySelectorAll('.stat .num');
let counted = false;

function animateCounters(){
  if (counted) return;
  const trigger = document.querySelector('.stats');
  if (!trigger) return;

  const rect = trigger.getBoundingClientRect();
  if (rect.top < window.innerHeight - 120) {
    counted = true;
    counters.forEach(el=>{
      const target = parseInt(el.dataset.target || el.textContent.replace(/\D/g,''), 10);
      let cur = 0;
      const step = Math.max(1, Math.round(target / 120));
      const timer = setInterval(()=>{
        cur += step;
        if (cur >= target) { cur = target; clearInterval(timer); }
        el.textContent = cur.toLocaleString();
      }, 12);
    });
  }
}
window.addEventListener('scroll', animateCounters);
window.addEventListener('load', animateCounters);

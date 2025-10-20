// Basic accessible carousel for staff bios
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const dots = document.querySelectorAll('.dot');
  if (!track || !dots.length) return;
  let index = 0;

  function update(i){
    index = i;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, k) => d.setAttribute('aria-selected', k === index ? 'true' : 'false'));
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => update(i));
    dot.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); update(i); }
    });
  });

 </body>
</html>


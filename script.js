document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu(restore = false) {nav.classList.remove('open'); menu.setAttribute('aria-expanded','false'); if(restore) menu.focus();}
menu.addEventListener('click', () => {const open = menu.getAttribute('aria-expanded') !== 'true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
document.addEventListener('keydown', e => {if(e.key === 'Escape' && nav.classList.contains('open')) closeMenu(true);});
nav.addEventListener('click', e => {if(e.target.closest('a')) closeMenu();});
document.addEventListener('click', e => {if(!e.target.closest('.header')) closeMenu();});
document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener('click', () => {const target = document.querySelector(a.getAttribute('href'));if(target){target.setAttribute('tabindex','-1');target.focus({preventScroll:true});}}));
const reduced = matchMedia('(prefers-reduced-motion: reduce)');
const layers = [...document.querySelectorAll('.parallax')];
let pending = false;
function renderParallax(){pending = false;if(document.hidden)return;layers.forEach(layer=>{if(reduced.matches){layer.style.transform='';return;}const rect=layer.parentElement.getBoundingClientRect();if(rect.bottom<0||rect.top>innerHeight)return;const limit=matchMedia('(max-width:700px)').matches?22:55;const shift=Math.max(-limit,Math.min(limit,-rect.top*Number(layer.dataset.speed)));layer.style.transform=`translate3d(0,${shift}px,0)`;});}
function schedule(){if(!pending){pending=true;requestAnimationFrame(renderParallax);}}
addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);reduced.addEventListener('change',()=>{layers.forEach(layer=>layer.style.transform='');schedule();});document.addEventListener('visibilitychange',schedule);schedule();

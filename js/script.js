const $ = (id) => document.getElementById(id);
const intro = $('intro');
const openLetter = $('openLetter');
// Langsung tampilkan halaman utama; pembukaan amplop tidak lagi menghalangi foto/ucapan.
intro.hidden = true;
intro.classList.add('intro-away');
function openExperience(){intro.hidden=true;document.body.classList.remove('intro-lock');startMusic();setTimeout(()=>confetti(24),280);}
if(openLetter) openLetter.addEventListener('click',openExperience);
$('startJourney').addEventListener('click',()=>$('message').scrollIntoView({behavior:'smooth'}));
$('againBtn').addEventListener('click',()=>{window.scrollTo({top:0,behavior:'smooth'});intro.hidden=false;intro.classList.remove('intro-away');document.body.classList.add('intro-lock');});

// Reveal sections as the reader discovers them.
const revealObserver = new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');revealObserver.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

// Add selected photos to the gallery for this visit.
$('photoInput').addEventListener('change',e=>{
  const files=[...e.target.files].filter(f=>f.type.startsWith('image/')).slice(0,12);const gallery=$('gallery');if(!files.length)return;
  files.forEach((file,i)=>{const url=URL.createObjectURL(file);const card=document.createElement('article');card.className='photo-card';card.style.setProperty('--r',`${i%2===0?-2:2}deg`);const frame=document.createElement('div');frame.className='photo-frame';const img=document.createElement('img');img.src=url;img.alt='Foto kenangan tambahan';frame.append(img);const caption=document.createElement('div');caption.className='photo-caption';caption.textContent=['one more memory ♡','you look lovely ✿','a moment to keep'][i%3];card.append(frame,caption);gallery.append(card)});
});

let candle=false,blown=false;
$('cake').addEventListener('click',()=>{const cake=$('cake'),note=$('cakeNote');if(!candle){candle=true;cake.textContent='🕯️🎂';note.textContent='Lilin sudah menyala. Sekarang, buat satu permintaan…';cake.classList.add('lit');confetti(12)}else if(!blown){blown=true;cake.textContent='🍰';cake.classList.remove('lit');note.textContent='Make a wish, birthday girl! ♡';$('surpriseText').classList.remove('hidden');confetti(65)}else{cake.textContent='🎂';candle=false;blown=false;note.textContent='Kuenya nunggu kamu… tap di sini ♡';$('surpriseText').classList.add('hidden')}});
$('surpriseBtn').addEventListener('click',()=>{$('surpriseText').classList.remove('hidden');confetti(45);$('surpriseText').scrollIntoView({behavior:'smooth',block:'center'})});
function confetti(count=38){const symbols=['♡','✦','✿','✨','💗','✧'];for(let i=0;i<count;i++){const el=document.createElement('span');el.className='confetti';el.textContent=symbols[Math.floor(Math.random()*symbols.length)];el.style.left=Math.random()*100+'vw';el.style.animationDuration=(2.2+Math.random()*3)+'s';el.style.fontSize=(14+Math.random()*18)+'px';el.style.setProperty('--drift',`${(Math.random()-.5)*180}px`);document.body.append(el);setTimeout(()=>el.remove(),5600)}}

// Tiny hearts follow taps/clicks.
document.addEventListener('pointerdown',e=>{if(e.target.closest('button,label,a,input'))return;const heart=document.createElement('span');heart.className='tap-heart';heart.textContent=['♡','✧','💗'][Math.floor(Math.random()*3)];heart.style.left=e.clientX+'px';heart.style.top=e.clientY+'px';document.body.append(heart);setTimeout(()=>heart.remove(),1300)});

// Musik lokal dari file MP3 yang disertakan di website.
const music = $('birthdayMusic');
let musicOn = false;
const musicBtn = $('musicBtn');
const musicFab = $('musicFab');
function updateMusicUI(playing) {
  musicOn = playing;
  musicBtn.textContent = playing ? 'Ⅱ Hentikan musik' : '♫ Putar Beranjak Dewasa';
  musicBtn.classList.toggle('playing', playing);
  musicFab.classList.toggle('playing', playing);
  musicFab.textContent = playing ? 'Ⅱ' : '♫';
}
async function startMusic() {
  try {
    await music.play();
    updateMusicUI(true);
  } catch (error) {
    // Browser dapat memblokir autoplay audio; tombol musik tetap bisa dipakai.
    updateMusicUI(false);
    musicBtn.textContent = '♫ Ketuk untuk putar lagu';
  }
}
function stopMusic() {
  music.pause();
  updateMusicUI(false);
}
function toggleMusic() {
  if (musicOn) stopMusic(); else startMusic();
}
music.addEventListener('play', () => updateMusicUI(true));
music.addEventListener('pause', () => updateMusicUI(false));
musicBtn.addEventListener('click', toggleMusic);
musicFab.addEventListener('click', toggleMusic);
// Mencoba autoplay saat halaman dibuka. Jika browser memblokir, satu klik akan memulai musik.
startMusic();

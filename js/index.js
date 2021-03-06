const mainHeader = document.querySelector('.main-header');
const hamToggle = document.querySelectorAll('.main-header img');
const hamClosed = document.querySelector('#hamclosed');
const hamOpen = document.querySelector('#hamopen');
const nav = document.querySelector('.show-nav');
const navItems = [...document.querySelectorAll('.show-nav a')];

function burgerClick() {
  mainHeader.classList.toggle('sticky');
  hamClosed.classList.toggle('hidden');
  hamOpen.classList.toggle('hidden');
  if (nav.classList.contains('hidden')) {
    navToggle()
    TweenLite.set('.show-nav', {clearProps:"all"});
    TweenLite.from('.show-nav', 1, {height:50});
    navItems.forEach((x,i) => {
      if (i % 2 === 0) {
        TweenLite.from(x, 1.5, {x:-300, ease: Back.easeOut.config(1.8)});
      } else {
        TweenLite.from(x, 1.5, {x:300, ease: Back.easeOut.config(1.8)});
      }
    })
    
  } else {
    TweenLite.set('.show-nav', {clearProps:"all"});
    TweenMax.to('.show-nav', 1, {opacity:0 , ease:Power1.easeInOut, onComplete:navToggle});
  }
};

function navToggle() {
  nav.classList.toggle('hidden')
};

hamClosed.addEventListener('click', burgerClick);

hamOpen.addEventListener('click', burgerClick);

// Scroll Magic fade in
const controller = new ScrollMagic.Controller();

let test2 = [...document.querySelectorAll('.cta-content'),...document.querySelectorAll('.recent-content')];
// currently splicing to remove the first element. This is done to prevent buggy behavior on page load
test2.splice(0, 1);

test2.forEach(x => {
  x.classList.add('fade-in');

  const testTween = TweenMax.from(x, 0.75, {autoAlpha:0,  scale: 0.5, y:'-=200'}); //, ease: Back.easeIn.config(1.7)}) // Linear.easeNone})

  let scene = new ScrollMagic.Scene({
    triggerElement: x,
    triggerHook: 0.8,
    reverse:false
  })
  .setTween(testTween)
  .addTo(controller);
})
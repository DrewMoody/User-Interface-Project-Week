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

// SERVICES TABS
class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.item = document.querySelector(`.tab-content[data-tab="${this.data}"]`);
    this.tabItem = new TabItem(this.item);
    this.element.addEventListener('click', () => {
      this.select();
    });
  };
  select() {
    const tabs = document.querySelectorAll(`.tab`);
    tabs.forEach(tab => {
      tab.classList.remove('selected-tab');
    });
    this.element.classList.add('selected-tab');
    this.tabItem.select();
  };
};

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    const items = document.querySelectorAll('.tab-content');
    items.forEach(item => {
      item.classList.remove('show-content');
    });
    this.element.classList.add('show-content');
    TweenLite.from('.text-content h2', 1.5, {x:-300, ease: Back.easeOut.config(1.8)});
    TweenLite.from('.text-content p', 1.5, {y:200, ease: Power2.easeOut});
    TweenLite.from('.tab-content img', 1.5, {ease:Sine.easeOut, x:300});
  };
};

let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map(tab => new TabLink(tab));
const mainHeader = document.querySelector('.main-header');
const hamToggle = document.querySelectorAll('.main-header img');
const hamClosed = document.querySelector('#hamclosed');
const hamOpen = document.querySelector('#hamopen');
const nav = document.querySelector('.show-nav');

function navToggle() {
  mainHeader.classList.toggle('sticky');
  hamClosed.classList.toggle('hidden');
  hamOpen.classList.toggle('hidden');
  nav.classList.toggle('hidden');
};

hamClosed.addEventListener('click', navToggle);

hamOpen.addEventListener('click', navToggle);

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
    console.log(this);
    const items = document.querySelectorAll('.tab-content');
    items.forEach(item => {
      item.classList.remove('show-content');
    });
    this.element.classList.add('show-content');
  };
};

let tabs = document.querySelectorAll('.tab');
tabs = Array.from(tabs).map(tab => new TabLink(tab));

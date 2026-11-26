/* ============================================
   Slide Selector - shared by all slide decks
   Expects Reveal to be initialized before this script runs.
   ============================================ */

(() => {
  const container = document.getElementById('slide-selector');
  const counter = document.getElementById('slide-counter');
  const menu = document.getElementById('slide-menu');
  const slides = document.querySelectorAll('.slides > section');
  const totalSlides = slides.length;

  // Populate menu
  const items = Array.from(slides).map((slide, index) => {
    const titleEl = slide.querySelector('h1, h2, .hero-title, .section-title');
    // textContent ignores CSS text-transform, so titles keep their source casing
    const title = titleEl
      ? titleEl.textContent.replace(/\s+/g, ' ').trim()
      : `Slide ${index + 1}`;

    const li = document.createElement('li');
    li.setAttribute('role', 'none');

    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'slide-menu-item';
    item.setAttribute('role', 'menuitem');

    const number = document.createElement('span');
    number.className = 'slide-menu-number';
    number.textContent = index + 1;

    const label = document.createElement('span');
    label.textContent = title;

    item.append(number, label);
    item.addEventListener('click', () => {
      Reveal.slide(index);
      closeMenu();
    });

    li.appendChild(item);
    menu.appendChild(li);
    return item;
  });

  const currentIndex = () => Reveal.getIndices().h;

  const openMenu = () => {
    menu.hidden = false;
    container.classList.add('open');
    counter.setAttribute('aria-expanded', 'true');
    const current = items[currentIndex()];
    current.scrollIntoView({ block: 'center' });
    current.focus();
  };

  const closeMenu = (restoreFocus = false) => {
    if (menu.hidden) return;
    menu.hidden = true;
    container.classList.remove('open');
    counter.setAttribute('aria-expanded', 'false');
    if (restoreFocus) counter.focus();
    else counter.blur();
  };

  counter.addEventListener('click', () => {
    menu.hidden ? openMenu() : closeMenu();
  });

  // Close when clicking anywhere else
  document.addEventListener('click', (e) => {
    if (!container.contains(e.target)) closeMenu();
  });

  // Keep Reveal from navigating while the menu has focus
  menu.addEventListener('keydown', (e) => {
    const focused = items.indexOf(document.activeElement);
    let next = null;

    switch (e.key) {
      case 'ArrowDown': next = Math.min(focused + 1, items.length - 1); break;
      case 'ArrowUp': next = Math.max(focused - 1, 0); break;
      case 'Home': next = 0; break;
      case 'End': next = items.length - 1; break;
      case 'Escape': closeMenu(true); break;
      case 'Tab': closeMenu(); return;
      default: if (e.key !== 'Enter' && e.key !== ' ') return;
    }

    e.stopPropagation();
    if (next !== null) {
      e.preventDefault();
      items[next].focus();
    }
  });

  // Update counter
  const updateCounter = (index) => {
    counter.textContent = `${index + 1} / ${totalSlides}`;
    items.forEach((item, i) => item.setAttribute('aria-current', i === index));
  };

  Reveal.on('slidechanged', (event) => updateCounter(event.indexh));
  Reveal.on('ready', () => updateCounter(currentIndex()));
  updateCounter(currentIndex());
})();

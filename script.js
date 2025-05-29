
const overlay = document.createElement('div');
overlay.className = 'inspect-overlay';
document.body.appendChild(overlay);

const tooltip = document.createElement('div');
tooltip.className = 'inspect-tooltip';
document.body.appendChild(tooltip);

document.body.addEventListener('mousemove', (e) => {
  const target = e.target;

  const excludedClasses = ['main', 'text','intro-wrapper','intro-image'];

  if (
    target === overlay ||
    target === tooltip ||
    target === document.body ||
    target === document.documentElement ||
    excludedClasses.some(cls => target.classList.contains(cls))
  ) {
    overlay.style.display = 'none';
    tooltip.style.display = 'none';
    return;
  }

  const rect = target.getBoundingClientRect();
  overlay.style.display = 'block';
  overlay.style.width = rect.width + 'px';
  overlay.style.height = rect.height + 'px';
  overlay.style.top = rect.top + window.scrollY + 'px';
  overlay.style.left = rect.left + window.scrollX + 'px';

  const tag = target.tagName.toLowerCase();
  const id = target.id ? `#${target.id}` : '';
  const classList = target.classList.length > 0 ? '.' + [...target.classList].join('.') : '';

  tooltip.innerText = `<${tag}${id}${classList}>`;
  tooltip.style.display = 'block';
  tooltip.style.top = (rect.top + window.scrollY - 28) + 'px';
  tooltip.style.left = (rect.left + window.scrollX) + 'px';
});


  const introImage = document.querySelector('.intro-image');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 850) {
      introImage.style.opacity = '0';
    } else {
      introImage.style.opacity = '1';
    }
  });




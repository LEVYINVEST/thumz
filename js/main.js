document.querySelectorAll('.compare').forEach((compare) => {
  const range = compare.querySelector('.compare__range');

  range.addEventListener('input', () => {
    compare.style.setProperty('--pos', `${range.value}%`);
  });
});

document.querySelectorAll('.faq__question').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq__item');
    const wasOpen = item.classList.contains('is-open');

    document.querySelectorAll('.faq__item.is-open').forEach((open) => {
      open.classList.remove('is-open');
    });

    if (!wasOpen) {
      item.classList.add('is-open');
    }
  });
});

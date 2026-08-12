(() => {
  const MOUNT_PATH = '/greffe-cheveux-turquie';
  const mounted = window.location.pathname === MOUNT_PATH || window.location.pathname.startsWith(`${MOUNT_PATH}/`);
  const appPathname = mounted ? (window.location.pathname.slice(MOUNT_PATH.length) || '/') : window.location.pathname;
  const pathname = appPathname.replace(/\/$/, '') || '/';
  if (!['/a-propos', '/en/about', '/about'].includes(pathname)) return;

  const JPG_SOURCE = mounted ? 'https://cliniqeo-hair.vercel.app/cliniqeo.apropos.jpg' : '/cliniqeo.apropos.jpg';

  function isAboutImage(image) {
    if (!(image instanceof HTMLImageElement)) return false;
    const source = image.getAttribute('src') || '';
    const alt = image.getAttribute('alt') || '';

    return source.includes('IMAGE ACCEUIL CLINIQEO PARIS')
      || source.includes('cliniqeo.apropos.jpg')
      || /Équipe Cliniqeo|Cliniqeo Hair medical coordination|Accompagnement médical et coordination Cliniqeo Hair/i.test(alt);
  }

  function removeImageBlock(image) {
    const generatedSection = image.closest('#cliniqeo-about-media');
    if (generatedSection) {
      generatedSection.remove();
      return;
    }

    const legacyWrapper = image.closest('.mb-16');
    if (legacyWrapper && legacyWrapper.querySelectorAll('img').length === 1) {
      legacyWrapper.remove();
      return;
    }

    const figure = image.closest('figure');
    if (figure) {
      figure.remove();
      return;
    }

    image.remove();
  }

  function deduplicateAboutImage() {
    const images = Array.from(document.querySelectorAll('img')).filter(isAboutImage);
    if (!images.length) return;

    let preferred = images.find((image) =>
      image.closest('#cliniqeo-about-media') && (image.getAttribute('src') || '').includes('cliniqeo.apropos.jpg'),
    );

    preferred ||= images.find((image) => (image.getAttribute('src') || '').includes('cliniqeo.apropos.jpg'));
    preferred ||= images[0];

    preferred.src = JPG_SOURCE;
    preferred.alt = pathname.startsWith('/en')
      ? 'Cliniqeo Hair medical coordination and patient support'
      : 'Accompagnement médical et coordination Cliniqeo Hair';
    preferred.loading = 'lazy';
    preferred.decoding = 'async';

    images.forEach((image) => {
      if (image !== preferred) removeImageBlock(image);
    });
  }

  let scheduled = false;
  const scheduleDeduplication = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(() => {
      scheduled = false;
      deduplicateAboutImage();
    });
  };

  const observer = new MutationObserver(scheduleDeduplication);
  observer.observe(document.documentElement, { childList: true, subtree: true });

  document.addEventListener('DOMContentLoaded', scheduleDeduplication, { once: true });
  window.addEventListener('load', scheduleDeduplication, { once: true });
  scheduleDeduplication();

  window.setTimeout(() => {
    deduplicateAboutImage();
    observer.disconnect();
  }, 5000);
})();

(() => {
  if ((window.location.pathname.replace(/\/$/, '') || '/') !== '/') return;

  const applyHomepageGalleryPlacement = () => {
    const heading = Array.from(document.querySelectorAll('h2')).find((item) =>
      /Photos Avant Après Greffe de Cheveux Turquie/i.test(item.textContent || ''),
    );
    const section = heading?.closest('section');
    if (!heading || !section) return false;

    Array.from(section.querySelectorAll('p')).forEach((paragraph) => {
      if (/Résultats naturels et durables obtenus par nos patients/i.test(paragraph.textContent || '')) {
        paragraph.remove();
      }
    });

    const generatedGallery = document.getElementById('cliniqeo-home-results-gallery');
    const generatedGrid = generatedGallery?.querySelector('.cliniqeo-results-grid');
    if (!generatedGallery || !generatedGrid) return false;

    const legacyGrid = Array.from(section.querySelectorAll('div')).find((element) => {
      const directCards = Array.from(element.children).filter((child) =>
        child.querySelector('img[src*="greffe cheveux turquie avant"]'),
      );
      return directCards.length >= 6;
    });

    if (!legacyGrid) return false;

    const galleryWrapper = document.createElement('div');
    galleryWrapper.id = 'cliniqeo-home-results-gallery';
    galleryWrapper.style.padding = '0';
    galleryWrapper.style.background = 'transparent';
    galleryWrapper.append(generatedGrid);

    legacyGrid.replaceWith(galleryWrapper);
    generatedGallery.remove();
    return true;
  };

  if (applyHomepageGalleryPlacement()) return;

  const root = document.getElementById('root');
  if (!root) return;

  const observer = new MutationObserver(() => {
    if (applyHomepageGalleryPlacement()) observer.disconnect();
  });

  observer.observe(root, { childList: true, subtree: true });
  window.setTimeout(() => observer.disconnect(), 5000);
})();

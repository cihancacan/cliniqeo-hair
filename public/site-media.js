(() => {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  const isEnglish = pathname.startsWith('/en');

  const media = {
    about: '/cliniqeo.apropos.jpg',
    photoGuide: '/exemple.photos.pour.greffe.capillaire.turquie.jpg',
    results: Array.from({ length: 6 }, (_, index) => `/greffe.cheveux.avant.apres${index + 1}.jpg`),
  };

  const beforeAfterPaths = new Set([
    '/greffe-cheveux/avant-apres',
    '/greffe-cheveux-turquie-avant-apres',
    '/en/before-after',
    '/en/hair-transplant-turkey-before-after',
  ]);

  const copy = isEnglish
    ? {
        guideAlt: 'Example of the photographs required for a hair transplant assessment',
        guideCaption: 'Use this guide to frame the front, top and donor-area photographs clearly.',
        guideOptional:
          'Photos are optional at this stage. You can submit the form now and send them later via WhatsApp or email.',
        aboutAlt: 'Cliniqeo Hair medical coordination and patient support',
        aboutCaption: 'Cliniqeo Hair coordinates each stage of the treatment journey with its partner medical teams.',
        galleryTitle: 'Illustrated before-and-after examples',
        homeGalleryTitle: 'More before-and-after hair transplant results',
        galleryIntro:
          'These images are visual illustrations showing different hair-loss patterns and possible styling outcomes. They are not photographs of real patients and do not guarantee an individual medical result.',
        cardTitles: [
          'Frontal hairline recession',
          'Diffuse frontal thinning',
          'Advanced top-area thinning',
          'Curly and Afro-textured hair',
          'Diffuse thinning on straight hair',
          'Frontal and vertex hair loss',
        ],
        cardCaption: 'Illustrative example — individual results vary',
      }
    : {
        guideAlt: 'Exemple des photographies nécessaires pour un diagnostic de greffe capillaire',
        guideCaption: 'Utilisez ce guide pour cadrer clairement les photos de face, du dessus et de la zone donneuse.',
        guideOptional: '',
        aboutAlt: 'Accompagnement médical et coordination Cliniqeo Hair',
        aboutCaption: 'Cliniqeo Hair coordonne chaque étape du parcours avec ses équipes médicales partenaires.',
        galleryTitle: 'Exemples visuels Avant / Après',
        homeGalleryTitle: 'Plus de résultats Avant / Après',
        galleryIntro:
          'Ces images sont des illustrations montrant différents profils de calvitie et des rendus capillaires possibles. Elles ne représentent pas de vrais patients et ne garantissent pas un résultat médical individuel.',
        cardTitles: [
          'Recul de la ligne frontale',
          'Éclaircissement frontal diffus',
          'Calvitie avancée sur le dessus',
          'Cheveux bouclés et texture afro',
          'Éclaircissement diffus sur cheveux lisses',
          'Calvitie frontale et vertex',
        ],
        cardCaption: 'Exemple d’illustration — les résultats varient selon chaque patient',
      };

  function installStyles() {
    if (document.getElementById('cliniqeo-site-media-styles')) return;

    const style = document.createElement('style');
    style.id = 'cliniqeo-site-media-styles';
    style.textContent = `
      .cliniqeo-media-figure {
        margin: 0;
      }
      .cliniqeo-media-figure img {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 16px;
        box-shadow: 0 18px 45px rgba(34, 70, 113, 0.14);
      }
      .cliniqeo-media-figure figcaption {
        margin-top: 12px;
        color: #64748b;
        font-size: 0.9rem;
        line-height: 1.55;
        text-align: center;
      }
      #cliniqeo-photo-guide-note {
        margin: 12px 0 24px;
        padding: 12px 14px;
        border: 1px solid #bfdbfe;
        border-radius: 12px;
        background: #eff6ff;
        color: #334155;
        font-size: 0.95rem;
        font-weight: 600;
        line-height: 1.55;
      }
      #cliniqeo-about-media {
        padding: 56px 16px 8px;
        background: #fff;
      }
      #cliniqeo-about-media .cliniqeo-about-media-inner {
        max-width: 1120px;
        margin: 0 auto;
      }
      #cliniqeo-photo-guide {
        margin: 0 0 12px;
      }
      #cliniqeo-results-gallery,
      #cliniqeo-home-results-gallery {
        padding: 64px 16px;
        background: #fff;
      }
      #cliniqeo-home-results-gallery {
        padding-top: 20px;
      }
      #cliniqeo-results-gallery .cliniqeo-results-inner,
      #cliniqeo-home-results-gallery .cliniqeo-results-inner {
        max-width: 1280px;
        margin: 0 auto;
      }
      #cliniqeo-results-gallery .cliniqeo-results-heading,
      #cliniqeo-home-results-gallery .cliniqeo-results-heading {
        max-width: 850px;
        margin: 0 auto 36px;
        text-align: center;
      }
      #cliniqeo-results-gallery h2,
      #cliniqeo-home-results-gallery h2 {
        margin: 0 0 16px;
        color: #224671;
        font-size: clamp(2rem, 4vw, 2.7rem);
        line-height: 1.15;
        font-weight: 700;
      }
      #cliniqeo-results-gallery .cliniqeo-results-disclaimer {
        margin: 0;
        padding: 16px 18px;
        border: 1px solid #bfdbfe;
        border-radius: 14px;
        background: #eff6ff;
        color: #475569;
        font-size: 1rem;
        line-height: 1.65;
      }
      #cliniqeo-results-gallery .cliniqeo-results-grid,
      #cliniqeo-home-results-gallery .cliniqeo-results-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 26px;
      }
      #cliniqeo-results-gallery .cliniqeo-result-card,
      #cliniqeo-home-results-gallery .cliniqeo-result-card {
        overflow: hidden;
        border: 1px solid #e2e8f0;
        border-radius: 18px;
        background: #fff;
        box-shadow: 0 14px 34px rgba(34, 70, 113, 0.11);
      }
      #cliniqeo-results-gallery .cliniqeo-result-card img,
      #cliniqeo-home-results-gallery .cliniqeo-result-card img {
        display: block;
        width: 100%;
        height: auto;
        aspect-ratio: 4 / 3;
        object-fit: cover;
        background: #eaf3ff;
      }
      #cliniqeo-results-gallery .cliniqeo-result-copy,
      #cliniqeo-home-results-gallery .cliniqeo-result-copy {
        padding: 18px 20px 20px;
      }
      #cliniqeo-results-gallery .cliniqeo-result-copy h3,
      #cliniqeo-home-results-gallery .cliniqeo-result-copy h3 {
        margin: 0 0 8px;
        color: #224671;
        font-size: 1.08rem;
        font-weight: 700;
      }
      #cliniqeo-home-results-gallery .cliniqeo-result-copy h3 {
        margin-bottom: 0;
      }
      #cliniqeo-results-gallery .cliniqeo-result-copy p {
        margin: 0;
        color: #64748b;
        font-size: 0.88rem;
        line-height: 1.55;
      }
      @media (max-width: 980px) {
        #cliniqeo-results-gallery .cliniqeo-results-grid,
        #cliniqeo-home-results-gallery .cliniqeo-results-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }
      @media (max-width: 640px) {
        #cliniqeo-about-media,
        #cliniqeo-results-gallery,
        #cliniqeo-home-results-gallery {
          padding-left: 12px;
          padding-right: 12px;
        }
        #cliniqeo-results-gallery,
        #cliniqeo-home-results-gallery {
          padding-top: 38px;
          padding-bottom: 38px;
        }
        #cliniqeo-home-results-gallery {
          padding-top: 12px;
        }
        #cliniqeo-results-gallery .cliniqeo-results-heading,
        #cliniqeo-home-results-gallery .cliniqeo-results-heading {
          margin-bottom: 22px;
        }
        #cliniqeo-results-gallery h2,
        #cliniqeo-home-results-gallery h2 {
          font-size: 1.65rem;
        }
        #cliniqeo-results-gallery .cliniqeo-results-grid,
        #cliniqeo-home-results-gallery .cliniqeo-results-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }
        #cliniqeo-results-gallery .cliniqeo-result-card,
        #cliniqeo-home-results-gallery .cliniqeo-result-card {
          border-radius: 12px;
        }
        #cliniqeo-results-gallery .cliniqeo-result-copy,
        #cliniqeo-home-results-gallery .cliniqeo-result-copy {
          padding: 10px 9px 12px;
        }
        #cliniqeo-results-gallery .cliniqeo-result-copy h3,
        #cliniqeo-home-results-gallery .cliniqeo-result-copy h3 {
          margin-bottom: 5px;
          font-size: 0.78rem;
          line-height: 1.3;
        }
        #cliniqeo-results-gallery .cliniqeo-result-copy p {
          font-size: 0.68rem;
          line-height: 1.4;
        }
        #cliniqeo-results-gallery .cliniqeo-results-disclaimer {
          padding: 12px;
          font-size: 0.82rem;
        }
      }
    `;
    document.head.append(style);
  }

  function buildFigure(id, src, alt, caption) {
    const figure = document.createElement('figure');
    figure.id = id;
    figure.className = 'cliniqeo-media-figure';

    const image = document.createElement('img');
    image.src = src;
    image.alt = alt;
    image.loading = 'lazy';
    image.decoding = 'async';
    figure.append(image);

    if (caption) {
      const figcaption = document.createElement('figcaption');
      figcaption.textContent = caption;
      figure.append(figcaption);
    }

    return figure;
  }

  function stylePhotoGuide(image) {
    image.src = media.photoGuide;
    image.alt = copy.guideAlt;
    image.loading = 'lazy';
    image.decoding = 'async';
    image.style.width = '100%';
    image.style.height = 'auto';
    image.style.borderRadius = '16px';
    image.style.boxShadow = '0 18px 45px rgba(34, 70, 113, 0.14)';
  }

  function removeDuplicatePhotoGuides(form, primaryImage) {
    const candidates = Array.from(form.querySelectorAll('img')).filter((image) => {
      const source = image.getAttribute('src') || '';
      const alt = image.getAttribute('alt') || '';
      return (
        /exemple\.photos\.pour\.greffe\.capillaire\.turquie/i.test(source) ||
        /greffe[ ._-]*capillaire[ ._-]*turquie/i.test(source) ||
        /photos nécessaires|photographs required|photographs for a hair transplant/i.test(alt)
      );
    });

    candidates.forEach((image) => {
      if (image === primaryImage) return;
      const generatedFigure = image.closest('#cliniqeo-photo-guide');
      if (generatedFigure) {
        generatedFigure.remove();
      } else {
        image.remove();
      }
    });
  }

  function ensureEnglishOptionalNote(anchor) {
    if (!isEnglish || !copy.guideOptional) return;

    document.querySelectorAll('input[type="file"]').forEach((input) => {
      input.required = false;
      input.removeAttribute('required');
      input.setAttribute('aria-required', 'false');
    });

    let note = document.getElementById('cliniqeo-photo-guide-note');
    if (!note) {
      note = document.createElement('p');
      note.id = 'cliniqeo-photo-guide-note';
      note.textContent = copy.guideOptional;
      anchor.insertAdjacentElement('afterend', note);
    }
  }

  function enhanceContactPhotoGuide() {
    if (!['/contact', '/en/contact'].includes(pathname)) return;

    const form = document.querySelector('form');
    if (!form) return;

    const labels = Array.from(form.querySelectorAll('p, label, h2, h3, h4'));
    const uploadHeading = labels.find((element) => {
      const text = element.textContent || '';
      return /Photographs for the assessment|Photos pour le diagnostic/i.test(text);
    });

    if (isEnglish && uploadHeading && !/optional/i.test(uploadHeading.textContent || '')) {
      uploadHeading.textContent = `${(uploadHeading.textContent || '').trim()} (optional)`;
    }

    const guideCandidates = Array.from(form.querySelectorAll('img')).filter((image) => {
      const source = image.getAttribute('src') || '';
      const alt = image.getAttribute('alt') || '';
      return (
        /exemple\.photos\.pour\.greffe\.capillaire\.turquie/i.test(source) ||
        /greffe[ ._-]*capillaire[ ._-]*turquie/i.test(source) ||
        /photos nécessaires|photographs required|photographs for a hair transplant/i.test(alt)
      );
    });

    if (guideCandidates.length > 0) {
      const primaryImage =
        guideCandidates.find((image) => !image.closest('#cliniqeo-photo-guide')) || guideCandidates[0];
      stylePhotoGuide(primaryImage);
      removeDuplicatePhotoGuides(form, primaryImage);
      const anchor = primaryImage.closest('figure') || primaryImage;
      ensureEnglishOptionalNote(anchor);
      return;
    }

    if (document.getElementById('cliniqeo-photo-guide')) return;

    const photoBlock = uploadHeading?.parentElement;
    if (!photoBlock || !uploadHeading) return;

    const figure = buildFigure('cliniqeo-photo-guide', media.photoGuide, copy.guideAlt, copy.guideCaption);
    uploadHeading.insertAdjacentElement('afterend', figure);
    ensureEnglishOptionalNote(figure);
  }

  function enhanceAboutPage() {
    if (!['/a-propos', '/en/about'].includes(pathname)) return;

    const existingImage =
      document.querySelector('img[src*="IMAGE ACCEUIL CLINIQEO PARIS"]') ||
      document.querySelector('img[alt="Équipe Cliniqeo"]');

    if (existingImage instanceof HTMLImageElement) {
      existingImage.src = media.about;
      existingImage.alt = copy.aboutAlt;
      existingImage.loading = 'lazy';
      existingImage.decoding = 'async';
      existingImage.style.width = '100%';
      existingImage.style.height = 'auto';
      existingImage.style.objectFit = 'cover';
      return;
    }

    if (document.getElementById('cliniqeo-about-media')) return;

    const page = document.querySelector('main > div');
    const hero = page?.querySelector(':scope > section');
    if (!page || !hero) return;

    const section = document.createElement('section');
    section.id = 'cliniqeo-about-media';
    section.innerHTML = '<div class="cliniqeo-about-media-inner"></div>';
    section
      .querySelector('.cliniqeo-about-media-inner')
      ?.append(buildFigure('cliniqeo-about-figure', media.about, copy.aboutAlt, copy.aboutCaption));
    hero.insertAdjacentElement('afterend', section);
  }

  function createResultsGallery({ home = false } = {}) {
    const section = document.createElement('section');
    section.id = home ? 'cliniqeo-home-results-gallery' : 'cliniqeo-results-gallery';

    const inner = document.createElement('div');
    inner.className = 'cliniqeo-results-inner';

    const heading = document.createElement('div');
    heading.className = 'cliniqeo-results-heading';

    const title = document.createElement('h2');
    title.textContent = home ? copy.homeGalleryTitle : copy.galleryTitle;
    heading.append(title);

    if (!home) {
      const intro = document.createElement('p');
      intro.className = 'cliniqeo-results-disclaimer';
      intro.textContent = copy.galleryIntro;
      heading.append(intro);
    }

    const grid = document.createElement('div');
    grid.className = 'cliniqeo-results-grid';

    media.results.forEach((src, index) => {
      const card = document.createElement('article');
      card.className = 'cliniqeo-result-card';

      const image = document.createElement('img');
      image.src = src;
      image.loading = index < 2 ? 'eager' : 'lazy';
      image.decoding = 'async';
      image.alt = home
        ? isEnglish
          ? `Hair transplant before-and-after result ${index + 1}: ${copy.cardTitles[index]}`
          : `Résultat avant après greffe de cheveux ${index + 1} : ${copy.cardTitles[index]}`
        : isEnglish
          ? `Illustrated hair transplant before-and-after example ${index + 1}: ${copy.cardTitles[index]}`
          : `Exemple visuel avant après greffe de cheveux ${index + 1} : ${copy.cardTitles[index]}`;

      const cardCopy = document.createElement('div');
      cardCopy.className = 'cliniqeo-result-copy';

      const cardTitle = document.createElement('h3');
      cardTitle.textContent = copy.cardTitles[index];
      cardCopy.append(cardTitle);

      if (!home) {
        const cardCaption = document.createElement('p');
        cardCaption.textContent = copy.cardCaption;
        cardCopy.append(cardCaption);
      }

      card.append(image, cardCopy);
      grid.append(card);
    });

    inner.append(heading, grid);
    section.append(inner);
    return section;
  }

  function enhanceHomepageResults() {
    if (!['/', '/en'].includes(pathname)) return;
    if (document.getElementById('cliniqeo-home-results-gallery')) return;

    const gallery = createResultsGallery({ home: true });
    const headings = Array.from(document.querySelectorAll('h2'));

    if (pathname === '/') {
      const existingResultsHeading = headings.find((heading) =>
        /Photos Avant Après Greffe de Cheveux Turquie/i.test(heading.textContent || ''),
      );
      const existingResultsSection = existingResultsHeading?.closest('section');
      if (!existingResultsSection) return;
      existingResultsSection.insertAdjacentElement('afterend', gallery);
      return;
    }

    const prioritiesHeading = headings.find((heading) =>
      /What UK and US patients commonly prioritise/i.test(heading.textContent || ''),
    );
    const prioritiesSection = prioritiesHeading?.closest('section');
    if (prioritiesSection) {
      prioritiesSection.insertAdjacentElement('beforebegin', gallery);
    }
  }

  function enhanceBeforeAfterPages() {
    if (!beforeAfterPaths.has(pathname)) return;
    if (document.getElementById('cliniqeo-results-gallery')) return;

    const gallery = createResultsGallery();
    const headings = Array.from(document.querySelectorAll('h2'));
    const legacyHeading = headings.find((heading) =>
      /Résultats Authentiques de Nos Patients|Authentic Patient Results/i.test(heading.textContent || ''),
    );
    const legacySection = legacyHeading?.closest('section');

    if (legacySection) {
      legacySection.replaceWith(gallery);
    } else {
      const page = document.querySelector('main > div');
      const hero = page?.querySelector(':scope > section');
      if (!page || !hero) return;
      hero.insertAdjacentElement('afterend', gallery);
    }

    if (pathname === '/greffe-cheveux/avant-apres') {
      const hero = document.querySelector('main > div > section');
      const paragraph = hero?.querySelector('p');
      if (paragraph) {
        paragraph.textContent =
          'Découvrez plusieurs exemples visuels illustrant différents degrés de calvitie et styles de restauration capillaire.';
      }
    }
  }

  function enhanceMedia() {
    installStyles();
    enhanceContactPhotoGuide();
    enhanceAboutPage();
    enhanceHomepageResults();
    enhanceBeforeAfterPages();
  }

  const root = document.getElementById('root');
  const observer = new MutationObserver(enhanceMedia);
  if (root) observer.observe(root, { childList: true, subtree: true });

  document.addEventListener('DOMContentLoaded', enhanceMedia, { once: true });
  window.addEventListener('load', enhanceMedia, { once: true });
  requestAnimationFrame(enhanceMedia);
})();

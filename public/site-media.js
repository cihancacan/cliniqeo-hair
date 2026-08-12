(() => {
  const MOUNT_PATH = '/greffe-cheveux-turquie';
  const mounted = window.location.pathname === MOUNT_PATH || window.location.pathname.startsWith(`${MOUNT_PATH}/`);
  const appPathname = mounted ? (window.location.pathname.slice(MOUNT_PATH.length) || '/') : window.location.pathname;
  const pathname = appPathname.replace(/\/$/, '') || '/';
  const assetUrl = (path) => mounted ? `https://cliniqeo-hair.vercel.app${path}` : path;
  const isEnglish = pathname.startsWith('/en');
  const media = {
    about: assetUrl('/cliniqeo.apropos.jpg'),
    photoGuide: assetUrl('/exemple.photos.pour.greffe.capillaire.turquie.jpg'),
    results: Array.from({ length: 6 }, (_, index) => assetUrl(`/greffe.cheveux.avant.apres${index + 1}.jpg`)),
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
        guideOptional: 'Photos are optional at this stage. You can submit the form now and send them later via WhatsApp or email.',
        aboutAlt: 'Cliniqeo Hair medical coordination and patient support',
        aboutCaption: 'Cliniqeo Hair coordinates each stage of the treatment journey with its partner medical teams.',
        galleryTitle: 'Illustrated before-and-after examples',
        homeGalleryTitle: 'More before-and-after hair transplant results',
        galleryIntro: 'These images are visual illustrations showing different hair-loss patterns and possible styling outcomes. They are not photographs of real patients and do not guarantee an individual medical result.',
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
        galleryIntro: 'Ces images sont des illustrations montrant différents profils de calvitie et des rendus capillaires possibles. Elles ne représentent pas de vrais patients et ne garantissent pas un résultat médical individuel.',
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
      .cliniqeo-media-figure{margin:0}.cliniqeo-media-figure img{display:block;width:100%;height:auto;border-radius:16px;box-shadow:0 18px 45px rgba(34,70,113,.14)}
      .cliniqeo-media-figure figcaption{margin-top:12px;color:#64748b;font-size:.9rem;line-height:1.55;text-align:center}
      #cliniqeo-photo-guide{margin:0 0 12px}#cliniqeo-photo-guide-note{margin:12px 0 24px;padding:12px 14px;border:1px solid #bfdbfe;border-radius:12px;background:#eff6ff;color:#334155;font-size:.95rem;font-weight:600;line-height:1.55}
      #cliniqeo-about-media{padding:56px 16px 8px;background:#fff}#cliniqeo-about-media .cliniqeo-about-media-inner{max-width:1120px;margin:0 auto}
      #cliniqeo-results-gallery,#cliniqeo-home-results-gallery{padding:64px 16px;background:#fff}#cliniqeo-home-results-gallery{padding-top:20px}
      #cliniqeo-results-gallery .cliniqeo-results-inner,#cliniqeo-home-results-gallery .cliniqeo-results-inner{max-width:1280px;margin:0 auto}
      #cliniqeo-results-gallery .cliniqeo-results-heading,#cliniqeo-home-results-gallery .cliniqeo-results-heading{max-width:850px;margin:0 auto 36px;text-align:center}
      #cliniqeo-results-gallery h2,#cliniqeo-home-results-gallery h2{margin:0 0 16px;color:#224671;font-size:clamp(2rem,4vw,2.7rem);line-height:1.15;font-weight:700}
      #cliniqeo-results-gallery .cliniqeo-results-disclaimer{margin:0;padding:16px 18px;border:1px solid #bfdbfe;border-radius:14px;background:#eff6ff;color:#475569;font-size:1rem;line-height:1.65}
      #cliniqeo-results-gallery .cliniqeo-results-grid,#cliniqeo-home-results-gallery .cliniqeo-results-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:26px}
      #cliniqeo-results-gallery .cliniqeo-result-card,#cliniqeo-home-results-gallery .cliniqeo-result-card{overflow:hidden;border:1px solid #e2e8f0;border-radius:18px;background:#fff;box-shadow:0 14px 34px rgba(34,70,113,.11);content-visibility:auto;contain-intrinsic-size:400px 360px}
      #cliniqeo-results-gallery .cliniqeo-result-card img,#cliniqeo-home-results-gallery .cliniqeo-result-card img{display:block;width:100%;height:auto;aspect-ratio:4/3;object-fit:cover;background:#eaf3ff}
      #cliniqeo-results-gallery .cliniqeo-result-copy,#cliniqeo-home-results-gallery .cliniqeo-result-copy{padding:18px 20px 20px}
      #cliniqeo-results-gallery .cliniqeo-result-copy h3,#cliniqeo-home-results-gallery .cliniqeo-result-copy h3{margin:0 0 8px;color:#224671;font-size:1.08rem;font-weight:700}#cliniqeo-home-results-gallery .cliniqeo-result-copy h3{margin-bottom:0}
      #cliniqeo-results-gallery .cliniqeo-result-copy p{margin:0;color:#64748b;font-size:.88rem;line-height:1.55}
      @media(max-width:980px){#cliniqeo-results-gallery .cliniqeo-results-grid,#cliniqeo-home-results-gallery .cliniqeo-results-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
      @media(max-width:640px){
        #cliniqeo-about-media,#cliniqeo-results-gallery,#cliniqeo-home-results-gallery{padding-left:12px;padding-right:12px}
        #cliniqeo-results-gallery,#cliniqeo-home-results-gallery{padding-top:38px;padding-bottom:38px}#cliniqeo-home-results-gallery{padding-top:12px}
        #cliniqeo-results-gallery .cliniqeo-results-heading,#cliniqeo-home-results-gallery .cliniqeo-results-heading{margin-bottom:22px}
        #cliniqeo-results-gallery h2,#cliniqeo-home-results-gallery h2{font-size:1.65rem}
        #cliniqeo-results-gallery .cliniqeo-results-grid,#cliniqeo-home-results-gallery .cliniqeo-results-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
        #cliniqeo-results-gallery .cliniqeo-result-card,#cliniqeo-home-results-gallery .cliniqeo-result-card{border-radius:12px;contain-intrinsic-size:180px 175px}
        #cliniqeo-results-gallery .cliniqeo-result-copy,#cliniqeo-home-results-gallery .cliniqeo-result-copy{padding:10px 9px 12px}
        #cliniqeo-results-gallery .cliniqeo-result-copy h3,#cliniqeo-home-results-gallery .cliniqeo-result-copy h3{margin-bottom:5px;font-size:.78rem;line-height:1.3}
        #cliniqeo-results-gallery .cliniqeo-result-copy p{font-size:.68rem;line-height:1.4}#cliniqeo-results-gallery .cliniqeo-results-disclaimer{padding:12px;font-size:.82rem}
      }
    `;
    document.head.append(style);
  }

  function configureImage(image, { src, alt, priority = 'low', width, height }) {
    image.src = src;
    image.alt = alt;
    image.loading = priority === 'high' ? 'eager' : 'lazy';
    image.decoding = 'async';
    image.fetchPriority = priority;
    if (width) image.width = width;
    if (height) image.height = height;
  }

  function buildFigure(id, src, alt, caption) {
    const figure = document.createElement('figure');
    figure.id = id;
    figure.className = 'cliniqeo-media-figure';
    const image = document.createElement('img');
    configureImage(image, { src, alt, priority: 'low' });
    figure.append(image);
    if (caption) {
      const figcaption = document.createElement('figcaption');
      figcaption.textContent = caption;
      figure.append(figcaption);
    }
    return figure;
  }

  function isPhotoGuide(image) {
    const source = image.getAttribute('src') || '';
    const alt = image.getAttribute('alt') || '';
    return /exemple\.photos\.pour\.greffe\.capillaire\.turquie|greffe[ ._-]*capillaire[ ._-]*turquie/i.test(source)
      || /photos nécessaires|photographs required|photographs for a hair transplant/i.test(alt);
  }

  function ensureEnglishOptionalNote(anchor) {
    if (!isEnglish || !copy.guideOptional) return;
    document.querySelectorAll('input[type="file"]').forEach((input) => {
      input.required = false;
      input.removeAttribute('required');
      input.setAttribute('aria-required', 'false');
    });
    if (document.getElementById('cliniqeo-photo-guide-note')) return;
    const note = document.createElement('p');
    note.id = 'cliniqeo-photo-guide-note';
    note.textContent = copy.guideOptional;
    anchor.insertAdjacentElement('afterend', note);
  }

  function enhanceContactPhotoGuide() {
    if (!['/contact', '/en/contact'].includes(pathname)) return;
    const form = document.querySelector('form');
    if (!form) return;

    const uploadHeading = Array.from(form.querySelectorAll('p,label,h2,h3,h4')).find((element) =>
      /Photographs for the assessment|Photos pour le diagnostic/i.test(element.textContent || ''),
    );
    if (isEnglish && uploadHeading && !/optional/i.test(uploadHeading.textContent || '')) {
      uploadHeading.textContent = `${(uploadHeading.textContent || '').trim()} (optional)`;
    }

    const guides = Array.from(form.querySelectorAll('img')).filter(isPhotoGuide);
    if (guides.length) {
      const primary = guides.find((image) => !image.closest('#cliniqeo-photo-guide')) || guides[0];
      configureImage(primary, { src: media.photoGuide, alt: copy.guideAlt, priority: 'low' });
      primary.style.width = '100%';
      primary.style.height = 'auto';
      primary.style.borderRadius = '16px';
      primary.style.boxShadow = '0 18px 45px rgba(34,70,113,.14)';
      guides.forEach((image) => {
        if (image === primary) return;
        const generated = image.closest('#cliniqeo-photo-guide');
        (generated || image).remove();
      });
      ensureEnglishOptionalNote(primary.closest('figure') || primary);
      return;
    }

    if (!uploadHeading || document.getElementById('cliniqeo-photo-guide')) return;
    const figure = buildFigure('cliniqeo-photo-guide', media.photoGuide, copy.guideAlt, copy.guideCaption);
    uploadHeading.insertAdjacentElement('afterend', figure);
    ensureEnglishOptionalNote(figure);
  }

  function enhanceAboutPage() {
    if (!['/a-propos', '/en/about'].includes(pathname)) return;
    const existing = document.querySelector('img[src*="IMAGE ACCEUIL CLINIQEO PARIS"],img[alt="Équipe Cliniqeo"]');
    if (existing instanceof HTMLImageElement) {
      configureImage(existing, { src: media.about, alt: copy.aboutAlt, priority: 'low' });
      existing.style.width = '100%';
      existing.style.height = 'auto';
      existing.style.objectFit = 'cover';
      return;
    }
    if (document.getElementById('cliniqeo-about-media')) return;
    const page = document.querySelector('main > div');
    const hero = page?.querySelector(':scope > section');
    if (!page || !hero) return;
    const section = document.createElement('section');
    section.id = 'cliniqeo-about-media';
    section.innerHTML = '<div class="cliniqeo-about-media-inner"></div>';
    section.querySelector('.cliniqeo-about-media-inner')?.append(buildFigure('cliniqeo-about-figure', media.about, copy.aboutAlt, copy.aboutCaption));
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
      const alt = home
        ? isEnglish
          ? `Hair transplant before-and-after result ${index + 1}: ${copy.cardTitles[index]}`
          : `Résultat avant après greffe de cheveux ${index + 1} : ${copy.cardTitles[index]}`
        : isEnglish
          ? `Illustrated hair transplant before-and-after example ${index + 1}: ${copy.cardTitles[index]}`
          : `Exemple visuel avant après greffe de cheveux ${index + 1} : ${copy.cardTitles[index]}`;
      configureImage(image, {
        src,
        alt,
        priority: !home && index === 0 ? 'high' : 'low',
        width: 1448,
        height: 1086,
      });

      const cardCopy = document.createElement('div');
      cardCopy.className = 'cliniqeo-result-copy';
      const cardTitle = document.createElement('h3');
      cardTitle.textContent = copy.cardTitles[index];
      cardCopy.append(cardTitle);
      if (!home) {
        const caption = document.createElement('p');
        caption.textContent = copy.cardCaption;
        cardCopy.append(caption);
      }
      card.append(image, cardCopy);
      grid.append(card);
    });
    inner.append(heading, grid);
    section.append(inner);
    return section;
  }

  function enhanceHomepageResults() {
    if (!['/', '/en'].includes(pathname) || document.getElementById('cliniqeo-home-results-gallery')) return;
    const headings = Array.from(document.querySelectorAll('h2'));
    const gallery = createResultsGallery({ home: true });
    if (pathname === '/') {
      const heading = headings.find((item) => /Photos Avant Après Greffe de Cheveux Turquie/i.test(item.textContent || ''));
      const section = heading?.closest('section');
      if (section) section.insertAdjacentElement('afterend', gallery);
      return;
    }
    const heading = headings.find((item) => /What UK and US patients commonly prioritise/i.test(item.textContent || ''));
    heading?.closest('section')?.insertAdjacentElement('beforebegin', gallery);
  }

  function enhanceBeforeAfterPages() {
    if (!beforeAfterPaths.has(pathname) || document.getElementById('cliniqeo-results-gallery')) return;
    const gallery = createResultsGallery();
    const legacyHeading = Array.from(document.querySelectorAll('h2')).find((heading) =>
      /Résultats Authentiques de Nos Patients|Authentic Patient Results/i.test(heading.textContent || ''),
    );
    const legacySection = legacyHeading?.closest('section');
    if (legacySection) legacySection.replaceWith(gallery);
    else {
      const page = document.querySelector('main > div');
      const hero = page?.querySelector(':scope > section');
      if (hero) hero.insertAdjacentElement('afterend', gallery);
    }
    if (pathname === '/greffe-cheveux/avant-apres') {
      const paragraph = document.querySelector('main > div > section p');
      if (paragraph) paragraph.textContent = 'Découvrez plusieurs exemples visuels illustrant différents degrés de calvitie et styles de restauration capillaire.';
    }
  }

  function enhanceMedia() {
    installStyles();
    enhanceContactPhotoGuide();
    enhanceAboutPage();
    enhanceHomepageResults();
    enhanceBeforeAfterPages();
  }

  let frame = 0;
  let stopTimer = 0;
  const schedule = () => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      enhanceMedia();
      if (document.querySelector('main > div')) {
        clearTimeout(stopTimer);
        stopTimer = setTimeout(() => {
          enhanceMedia();
          observer.disconnect();
        }, 1200);
      }
    });
  };

  const root = document.getElementById('root');
  const observer = new MutationObserver(schedule);
  if (root) observer.observe(root, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', schedule, { once: true });
  window.addEventListener('load', schedule, { once: true });
  schedule();
  setTimeout(() => {
    schedule();
    observer.disconnect();
  }, 5000);
})();

import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Headphones,
  HeartHandshake,
  Plane,
  Smile,
  Sparkles,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import {
  DENTAL_EN_BASE,
  DENTAL_FR_BASE,
  HAIR_EN_BASE,
  HAIR_FR_BASE,
  PUBLIC_ORIGIN,
} from '../config/siteRoutes';

const PortalHomePage = () => {
  const { pathname } = useLocation();
  const isEnglish = pathname === '/en';

  const copy = isEnglish
    ? {
        lang: 'en' as const,
        title: 'Dental treatment and hair transplant in Turkey',
        description: 'Choose your Cliniqeo care pathway in Turkey: dental treatment or hair transplant, with English-speaking coordination before, during and after travel.',
        eyebrow: 'YOUR PROJECT, OUR COORDINATION',
        heading: 'Two areas of expertise. One standard of support.',
        intro: 'Choose the pathway that matches your project. Cliniqeo coordinates your journey before, during and after treatment in Turkey.',
        dentalTitle: 'DENTAL TREATMENT IN TURKEY',
        dentalText: 'Dental implants, veneers, crowns and full-mouth rehabilitation.',
        dentalCta: 'Explore dental treatment',
        hairTitle: 'HAIR TRANSPLANT IN TURKEY',
        hairText: 'FUE, DHI and a personalised hair assessment.',
        hairCta: 'Explore hair transplant',
        benefits: ['English-speaking coordination', 'Organised travel', 'Initial assessment', 'Personalised follow-up'],
        processTitle: 'Support from first contact to follow-up',
        processText: 'Cliniqeo is a coordination agency. Medical assessments and procedures are carried out by partner healthcare professionals and clinics in Turkey.',
        steps: [
          ['Share your project', 'Explain your goals and provide the information required for an initial orientation.'],
          ['Receive a clear plan', 'Review the proposed treatment, responsible medical provider, quotation and included services.'],
          ['Travel with coordination', 'Appointments, practical arrangements and on-site communication are organised in advance.'],
          ['Continue follow-up', 'Receive written instructions and remain in contact after returning home.'],
        ],
      }
    : {
        lang: 'fr' as const,
        title: 'Soins dentaires et greffe de cheveux en Turquie',
        description: 'Choisissez votre parcours Cliniqeo en Turquie : soins dentaires ou greffe de cheveux, avec accompagnement francophone avant, pendant et après le séjour.',
        eyebrow: 'VOTRE PROJET, NOTRE ACCOMPAGNEMENT',
        heading: 'Deux expertises. Un seul niveau d’exigence.',
        intro: 'Choisissez le parcours qui correspond à votre projet. Cliniqeo vous accompagne avant, pendant et après votre traitement en Turquie.',
        dentalTitle: 'SOINS DENTAIRES EN TURQUIE',
        dentalText: 'Implants, facettes, couronnes et réhabilitation complète.',
        dentalCta: 'Découvrir le dentaire',
        hairTitle: 'GREFFE DE CHEVEUX EN TURQUIE',
        hairText: 'FUE, DHI et diagnostic capillaire personnalisé.',
        hairCta: 'Découvrir la greffe de cheveux',
        benefits: ['Accompagnement francophone', 'Séjour organisé', 'Première évaluation', 'Suivi personnalisé'],
        processTitle: 'Un accompagnement de A à Z',
        processText: 'Cliniqeo est une agence d’accompagnement et d’organisation. Les diagnostics et actes médicaux sont réalisés par les professionnels de santé et cliniques partenaires en Turquie.',
        steps: [
          ['Présentez votre projet', 'Expliquez vos attentes et transmettez les éléments nécessaires à une première orientation.'],
          ['Recevez un plan clair', 'Consultez le traitement proposé, le professionnel responsable, le devis et les prestations incluses.'],
          ['Voyagez accompagné', 'Les rendez-vous, l’organisation pratique et la communication sur place sont préparés à l’avance.'],
          ['Poursuivez le suivi', 'Recevez des consignes écrites et restez accompagné après votre retour.'],
        ],
      };

  const dentalPath = isEnglish ? DENTAL_EN_BASE : DENTAL_FR_BASE;
  const hairPath = isEnglish ? HAIR_EN_BASE : HAIR_FR_BASE;
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${PUBLIC_ORIGIN}/#organization`,
      name: 'Cliniqeo',
      url: PUBLIC_ORIGIN,
      email: 'info@cliniqeo.com',
      description: copy.processText,
      areaServed: ['France', 'United Kingdom', 'United States', 'Türkiye'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${PUBLIC_ORIGIN}/#website`,
      name: 'Cliniqeo',
      url: PUBLIC_ORIGIN,
      inLanguage: copy.lang,
      publisher: { '@id': `${PUBLIC_ORIGIN}/#organization` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: isEnglish ? 'Cliniqeo care pathways' : 'Parcours de soins Cliniqeo',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: copy.dentalTitle, url: `${PUBLIC_ORIGIN}${dentalPath}` },
        { '@type': 'ListItem', position: 2, name: copy.hairTitle, url: `${PUBLIC_ORIGIN}${hairPath}` },
      ],
    },
  ];

  const benefitIcons = [Headphones, Plane, BadgeCheck, HeartHandshake];

  return (
    <div className="pt-20 bg-white">
      <SEOHead
        title={copy.title}
        description={copy.description}
        path={isEnglish ? '/en' : '/'}
        lang={copy.lang}
        siteName="Cliniqeo"
        contentType="website"
        canonicalizeHair={false}
        alternates={[
          { lang: 'fr', path: '/' },
          { lang: 'en', path: '/en' },
          { lang: 'x-default', path: '/' },
        ]}
        schema={schema}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#f7fbff] via-white to-[#f3f8fc] py-14 md:py-20">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <p className="mb-4 text-sm font-extrabold tracking-[0.14em] text-[#08a9b5]">{copy.eyebrow}</p>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-[#10284d] md:text-6xl">{copy.heading}</h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">{copy.intro}</p>
          </div>

          <div id="expertises" className="grid gap-7 lg:grid-cols-2">
            <article className="group overflow-hidden rounded-[2rem] border border-cyan-100 bg-white shadow-xl shadow-cyan-950/5 transition-transform duration-300 hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden md:h-72">
                <img src="/cliniqeo.apropos.jpg" alt={isEnglish ? 'Cliniqeo dental treatment coordination team' : 'Équipe d’accompagnement Cliniqeo pour les soins dentaires'} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06a7b1]/80 via-transparent to-transparent" />
              </div>
              <div className="relative bg-gradient-to-br from-[#0bb5bc] to-[#049da8] px-7 pb-8 pt-10 text-white md:px-10">
                <div className="absolute -top-8 left-8 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#06a7b1] shadow-lg"><Smile size={31} /></div>
                <h2 className="mb-3 text-2xl font-extrabold md:text-3xl">{copy.dentalTitle}</h2>
                <p className="mb-7 text-lg text-cyan-50">{copy.dentalText}</p>
                <Link to={dentalPath} className="inline-flex items-center rounded-xl bg-white px-6 py-3.5 font-bold text-[#087f88] transition-colors hover:bg-cyan-50">
                  {copy.dentalCta}<ArrowRight className="ml-2" size={19} />
                </Link>
              </div>
            </article>

            <article className="group overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-xl shadow-blue-950/10 transition-transform duration-300 hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden md:h-72">
                <img src="/home.cliniqeo.hair.jpg" alt={isEnglish ? 'Hair assessment coordinated by Cliniqeo Hair' : 'Évaluation capillaire accompagnée par Cliniqeo Hair'} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102f5c]/80 via-transparent to-transparent" />
              </div>
              <div className="relative bg-gradient-to-br from-[#082d59] to-[#0e3c72] px-7 pb-8 pt-10 text-white md:px-10">
                <div className="absolute -top-8 left-8 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#2f6bfc] shadow-lg"><Sparkles size={30} /></div>
                <h2 className="mb-3 text-2xl font-extrabold md:text-3xl">{copy.hairTitle}</h2>
                <p className="mb-7 text-lg text-blue-100">{copy.hairText}</p>
                <Link to={hairPath} className="inline-flex items-center rounded-xl bg-[#4a9dff] px-6 py-3.5 font-bold text-white transition-colors hover:bg-[#6EC1E4] hover:text-[#10284d]">
                  {copy.hairCta}<ArrowRight className="ml-2" size={19} />
                </Link>
              </div>
            </article>
          </div>

          <div className="mt-8 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg sm:grid-cols-2 lg:grid-cols-4">
            {copy.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index];
              return (
                <div key={benefit} className="flex items-center gap-3 border-b border-slate-100 px-6 py-5 last:border-0 sm:border-r lg:border-b-0">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#edf7ff] text-[#224671]"><Icon size={21} /></span>
                  <span className="font-semibold text-[#224671]">{benefit}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="parcours" className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="mb-5 text-4xl font-bold text-[#10284d] md:text-5xl">{copy.processTitle}</h2>
            <p className="text-lg leading-relaxed text-slate-600">{copy.processText}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {copy.steps.map(([title, text], index) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#224671] text-lg font-extrabold text-white">{index + 1}</div>
                <h3 className="mb-3 text-xl font-bold text-[#224671]">{title}</h3>
                <p className="leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to={dentalPath} className="inline-flex items-center justify-center rounded-xl bg-[#08a9b5] px-7 py-4 font-bold text-white hover:bg-[#087d87]">
              <CalendarCheck className="mr-2" size={20} />
              {isEnglish ? 'Request a dental assessment' : 'Évaluer mon projet dentaire'}
            </Link>
            <Link to={hairPath} className="inline-flex items-center justify-center rounded-xl bg-[#224671] px-7 py-4 font-bold text-white hover:bg-[#2f6bfc]">
              <Sparkles className="mr-2" size={20} />
              {isEnglish ? 'Request a hair assessment' : 'Évaluer mon projet capillaire'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortalHomePage;

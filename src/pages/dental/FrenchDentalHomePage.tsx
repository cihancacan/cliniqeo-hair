import { ArrowRight, CheckCircle, HeartHandshake, Languages, Plane, ShieldCheck } from 'lucide-react';
import LocalLeadForm from '../../components/LocalLeadForm';
import SEOHead from '../../components/SEOHead';
import { DENTAL_FR_BASE, PUBLIC_ORIGIN } from '../../config/siteRoutes';

const treatments = [
  ['Implants dentaires', 'Remplacer une ou plusieurs dents absentes après examen clinique et analyse radiographique.'],
  ['Facettes dentaires', 'Étudier la préparation, le matériau, la teinte, l’occlusion et l’entretien avant toute décision.'],
  ['Couronnes et bridges', 'Restaurer les dents abîmées ou absentes avec un plan fondé sur la santé dentaire et gingivale.'],
  ['Réhabilitation complète', 'Coordonner les soins lorsque plusieurs dents, l’occlusion ou les deux arcades doivent être traitées.'],
];

const FrenchDentalHomePage = () => {
  const title = 'Soins dentaires en Turquie : implants, facettes et couronnes';
  const description = 'Préparez vos soins dentaires en Turquie avec un plan écrit : implants, facettes, couronnes, devis détaillé, organisation du séjour et suivi francophone.';
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Accompagnement pour soins dentaires en Turquie',
      description,
      url: `${PUBLIC_ORIGIN}${DENTAL_FR_BASE}`,
      provider: { '@type': 'Organization', '@id': `${PUBLIC_ORIGIN}/#organization`, name: 'Cliniqeo', url: PUBLIC_ORIGIN },
      areaServed: 'France',
      serviceType: 'Organisation de parcours de soins dentaires en Turquie',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Cliniqeo', item: PUBLIC_ORIGIN },
        { '@type': 'ListItem', position: 2, name: 'Soins dentaires en Turquie', item: `${PUBLIC_ORIGIN}${DENTAL_FR_BASE}` },
      ],
    },
  ];

  return (
    <div className="bg-white pt-20">
      <SEOHead
        title={title}
        description={description}
        path={DENTAL_FR_BASE}
        lang="fr"
        siteName="Cliniqeo Dental"
        contentType="website"
        canonicalizeHair={false}
        schema={schema}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#063f56] via-[#087d87] to-[#0bb5bc] py-20 text-white md:py-28">
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-5 text-sm font-extrabold tracking-[0.14em] text-cyan-100">ACCOMPAGNEMENT DENTAIRE EN TURQUIE</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">Soins dentaires en Turquie avec un plan clair et détaillé</h1>
            <p className="mb-8 text-xl leading-relaxed text-cyan-50">Comparez implants, facettes, couronnes et solutions de restauration avec un devis écrit, des responsabilités médicales identifiées et un accompagnement francophone.</p>
            <a href="#evaluation-dentaire" className="inline-flex items-center rounded-xl bg-white px-7 py-4 font-bold text-[#087d87] hover:bg-cyan-50">
              Demander une évaluation gratuite <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl">
            <img src="/cliniqeo.apropos.jpg" alt="Équipe francophone d’accompagnement Cliniqeo" className="h-[420px] w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      <section id="traitements" className="scroll-mt-24 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-5 text-4xl font-bold text-[#10284d]">Des traitements étudiés après évaluation</h2>
            <p className="text-lg text-slate-600">L’étude à distance fournit une première orientation. Le chirurgien-dentiste confirme le diagnostic et le plan définitif après l’examen clinique et l’imagerie nécessaires.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {treatments.map(([name, text]) => (
              <article key={name} className="rounded-2xl border border-cyan-100 bg-[#f7feff] p-7">
                <CheckCircle className="mb-4 text-[#08a9b5]" size={28} />
                <h3 className="mb-3 text-2xl font-bold text-[#10284d]">{name}</h3>
                <p className="leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-7 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {[
            [ShieldCheck, 'Responsabilités médicales expliquées', 'La proposition identifie le praticien, les actes envisagés, les matériaux, les alternatives et les limites.'],
            [Languages, 'Coordination francophone', 'Les échanges pratiques sont coordonnés avant le départ, pendant les rendez-vous et après le retour.'],
            [Plane, 'Séjour adapté aux soins', 'Le programme tient compte des examens, des étapes de laboratoire, des essayages, des contrôles et des délais nécessaires.'],
          ].map(([Icon, heading, text]) => {
            const CardIcon = Icon as typeof ShieldCheck;
            return (
              <article key={heading as string} className="rounded-2xl bg-white p-7 shadow-sm">
                <CardIcon className="mb-5 text-[#08a9b5]" size={30} />
                <h2 className="mb-3 text-xl font-bold text-[#10284d]">{heading as string}</h2>
                <p className="leading-relaxed text-slate-600">{text as string}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section id="evaluation-dentaire" className="scroll-mt-24 bg-gradient-to-br from-cyan-50 to-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-center gap-3 text-[#087d87]"><HeartHandshake size={26} /><span className="font-bold">Première orientation sans engagement</span></div>
          <LocalLeadForm lang="fr" cityLabel="France" pagePath={DENTAL_FR_BASE} service="dental" />
        </div>
      </section>
    </div>
  );
};

export default FrenchDentalHomePage;

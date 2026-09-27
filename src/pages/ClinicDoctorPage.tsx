import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ExternalLink,
  FileCheck2,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Stethoscope,
  X,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { getHairAssetUrl } from '../config/hostedPath';

type Language = 'fr' | 'en';

type TileProps = {
  index: number;
  className?: string;
  label?: string;
};

const ATLAS_PATH = '/clinic/clinic-doctor-atlas.webp';
const TILE_POSITIONS = [
  '0% 0%',
  '50% 0%',
  '100% 0%',
  '0% 50%',
  '50% 50%',
  '100% 50%',
  '0% 100%',
  '50% 100%',
  '100% 100%',
];

function AtlasTile({ index, className = '', label }: TileProps) {
  return (
    <div
      role={label ? 'img' : undefined}
      aria-label={label}
      className={`bg-no-repeat bg-cover ${className}`}
      style={{
        backgroundImage: `url("${getHairAssetUrl(ATLAS_PATH)}")`,
        backgroundSize: '300% 300%',
        backgroundPosition: TILE_POSITIONS[index],
      }}
    />
  );
}

export default function ClinicDoctorPage({ lang }: { lang: Language }) {
  const isFr = lang === 'fr';
  const [certificate, setCertificate] = useState<7 | 8 | null>(null);

  const pagePath = isFr ? '/clinique-medecin' : '/en/clinic-doctor';
  const alternatePath = isFr ? '/en/clinic-doctor' : '/clinique-medecin';
  const contactPath = isFr ? '/contact' : '/en/contact';

  const copy = isFr
    ? {
        eyebrow: 'Clinique partenaire & médecin',
        title: 'Votre environnement médical à Istanbul, en toute transparence',
        intro:
          'Découvrez l’établissement partenaire où s’organise le parcours capillaire, le Dr Ersun Çobanoğlu, les espaces de prise en charge et les autorisations officielles de tourisme international de santé.',
        primaryCta: 'Faire étudier mon dossier',
        secondaryCta: 'Découvrir la clinique',
        trustLocation: 'Beşiktaş · Istanbul',
        trustPermit: 'Autorisation officielle de tourisme de santé',
        trustSupport: 'Coordination Cliniqeo en français',
        clinicEyebrow: 'L’établissement partenaire',
        clinicTitle: 'Özel Oktay Tüney Polikliniği',
        clinicText:
          'La clinique est située à Beşiktaş, au cœur d’Istanbul. Elle accueille des patients internationaux et propose notamment les techniques FUE, DHI et Sapphire FUE, avec un parcours défini après évaluation médicale.',
        address: 'Dikilitaş, Ayazmaderesi Cd No:6/1, 34349 Beşiktaş / İstanbul',
        galleryTitle: 'Découvrez les espaces',
        galleryIntro:
          'Accueil, salle d’attente, espaces de préparation et salles dédiées aux différentes étapes du parcours capillaire.',
        gallery: ['Façade de la clinique', 'Accueil', 'Salle d’attente', 'Salle d’intervention', 'Bloc de traitement', 'Espace de lavage'],
        clinicPermitTitle: 'Autorisation de tourisme international de santé',
        clinicPermitText:
          'Le document présenté est délivré sous l’autorité du Ministère de la Santé de la République de Türkiye à l’Özel Oktay Tüney Polikliniği.',
        enlarge: 'Agrandir le certificat',
        doctorEyebrow: 'Votre médecin',
        doctorTitle: 'Dr Ersun Çobanoğlu',
        doctorRole: 'Médecin · Esthétique médicale',
        doctorIntro:
          'Le Dr Ersun Çobanoğlu est diplômé de la Faculté de médecine de l’Université de Trakya. Il exerce dans le domaine de l’esthétique médicale après un parcours hospitalier public puis privé en Turquie.',
        doctorFacts: [
          'Diplômé de la Faculté de médecine de l’Université de Trakya en 1992.',
          'Expérience hospitalière à Elazığ, Sivas et Bursa entre 1992 et 2005.',
          'A exercé ensuite à l’Hôpital Acıbadem de Bursa.',
          'Programme de certification en esthétique médicale approuvé par le Ministère turc de la Santé en 2005.',
          'Participe à l’évaluation médicale et au parcours de prise en charge au sein de l’établissement partenaire.',
        ],
        officialProfile: 'Voir la fiche officielle du médecin',
        doctorPermitTitle: 'Autorisation officielle du Dr Ersun Çobanoğlu',
        doctorPermitText:
          'International Health Tourism Authorization Certificate — Dr. Ersun Çobanoğlu Muayenehanesi — certificat ST-3917.',
        rolesTitle: 'Qui fait quoi ?',
        rolesCliniqeoTitle: 'Cliniqeo',
        rolesCliniqeo:
          'Cliniqeo organise et coordonne votre parcours, votre séjour, les transferts et les échanges avant, pendant et après votre venue.',
        rolesMedicalTitle: 'Équipe médicale partenaire',
        rolesMedical:
          'L’évaluation médicale, l’indication, le protocole, le nombre de greffons et les actes sont définis sous la responsabilité des professionnels de santé qui vous prennent en charge.',
        finalTitle: 'Vous souhaitez savoir si une greffe FUE ou DHI est adaptée à votre situation ?',
        finalText:
          'Envoyez votre demande pour recevoir une première orientation personnalisée avant d’organiser votre déplacement à Istanbul.',
        finalCta: 'Demander mon évaluation',
        close: 'Fermer',
      }
    : {
        eyebrow: 'Partner clinic & doctor',
        title: 'Meet the medical environment behind your treatment journey',
        intro:
          'Discover the partner facility in Istanbul, Dr Ersun Çobanoğlu, the treatment spaces and the official international health-tourism authorisations.',
        primaryCta: 'Request my assessment',
        secondaryCta: 'Explore the clinic',
        trustLocation: 'Beşiktaş · Istanbul',
        trustPermit: 'Official health-tourism authorisation',
        trustSupport: 'English-speaking Cliniqeo coordination',
        clinicEyebrow: 'Partner facility',
        clinicTitle: 'Özel Oktay Tüney Polikliniği',
        clinicText:
          'The clinic is located in Beşiktaş, central Istanbul. It welcomes international patients and offers FUE, DHI and Sapphire FUE techniques, with the final pathway confirmed after medical assessment.',
        address: 'Dikilitaş, Ayazmaderesi Cd No:6/1, 34349 Beşiktaş / İstanbul',
        galleryTitle: 'Explore the facility',
        galleryIntro:
          'Reception, waiting areas, preparation spaces and dedicated rooms used throughout the hair-restoration pathway.',
        gallery: ['Clinic exterior', 'Reception', 'Waiting area', 'Treatment room', 'Clinical treatment room', 'Hair-washing area'],
        clinicPermitTitle: 'International health-tourism authorisation',
        clinicPermitText:
          'The displayed certificate is issued under the authority of the Republic of Türkiye Ministry of Health to Özel Oktay Tüney Polikliniği.',
        enlarge: 'Enlarge certificate',
        doctorEyebrow: 'Your doctor',
        doctorTitle: 'Dr Ersun Çobanoğlu',
        doctorRole: 'Physician · Medical aesthetics',
        doctorIntro:
          'Dr Ersun Çobanoğlu graduated from Trakya University Faculty of Medicine and has worked in medical aesthetics following a career in public and private healthcare in Türkiye.',
        doctorFacts: [
          'Graduated from Trakya University Faculty of Medicine in 1992.',
          'Worked in state hospitals in Elazığ, Sivas and Bursa between 1992 and 2005.',
          'Later worked at Acıbadem Hospital in Bursa.',
          'Completed a Turkish Ministry of Health-approved Medical Aesthetics certification programme in 2005.',
          'Contributes to medical assessment and the care pathway at the partner facility.',
        ],
        officialProfile: 'View the doctor’s official profile',
        doctorPermitTitle: 'Official authorisation for Dr Ersun Çobanoğlu',
        doctorPermitText:
          'International Health Tourism Authorization Certificate — Dr. Ersun Çobanoğlu Muayenehanesi — certificate ST-3917.',
        rolesTitle: 'Who is responsible for what?',
        rolesCliniqeoTitle: 'Cliniqeo',
        rolesCliniqeo:
          'Cliniqeo coordinates your journey, stay, scheduled transfers and communication before, during and after your visit.',
        rolesMedicalTitle: 'Partner medical team',
        rolesMedical:
          'Medical assessment, indication, treatment protocol, graft count and procedures remain under the responsibility of the healthcare professionals treating you.',
        finalTitle: 'Would you like to know whether FUE or DHI may be suitable for your case?',
        finalText:
          'Send your request for personalised initial guidance before arranging your trip to Istanbul.',
        finalCta: 'Request my assessment',
        close: 'Close',
      };

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
      name: 'Özel Oktay Tüney Polikliniği',
      url: 'https://oktaytuney.com/',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Dikilitaş, Ayazmaderesi Cd No:6/1',
        postalCode: '34349',
        addressLocality: 'Beşiktaş',
        addressRegion: 'İstanbul',
        addressCountry: 'TR',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Physician',
      name: 'Dr Ersun Çobanoğlu',
      jobTitle: isFr ? 'Médecin en esthétique médicale' : 'Medical Aesthetics Physician',
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Trakya University Faculty of Medicine',
      },
      affiliation: {
        '@type': 'MedicalClinic',
        name: 'Özel Oktay Tüney Polikliniği',
      },
      sameAs: ['https://oktaytuney.com/tr/doktorlarimiz/ersun-cobanoglu'],
    },
  ];

  return (
    <div className="pt-20 bg-white">
      <SEOHead
        title={
          isFr
            ? 'Clinique partenaire & Dr Ersun Çobanoğlu à Istanbul | Cliniqeo Hair'
            : 'Partner Clinic & Dr Ersun Çobanoğlu in Istanbul | Cliniqeo Hair'
        }
        description={
          isFr
            ? 'Découvrez l’Özel Oktay Tüney Polikliniği à Beşiktaş, le Dr Ersun Çobanoğlu, les espaces de prise en charge et les autorisations officielles de tourisme de santé.'
            : 'Discover Özel Oktay Tüney Polikliniği in Beşiktaş, Dr Ersun Çobanoğlu, the treatment spaces and official international health-tourism authorisations.'
        }
        path={pagePath}
        lang={lang}
        alternates={[
          { lang: 'fr', path: '/clinique-medecin' },
          { lang: 'en', path: '/en/clinic-doctor' },
          { lang: 'x-default', path: '/clinique-medecin' },
        ]}
        schema={schema}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#173a63] to-[#224671] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#2f6bfc] blur-3xl" />
          <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-[#6EC1E4] blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold mb-6">
                <ShieldCheck size={18} className="text-[#6EC1E4]" />
                {copy.eyebrow}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{copy.title}</h1>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-3xl">{copy.intro}</p>
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Link
                  to={contactPath}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2f6bfc] px-7 py-4 font-bold text-white hover:bg-[#245be0] transition-colors"
                >
                  {copy.primaryCta} <ArrowRight size={19} />
                </Link>
                <a
                  href="#clinic"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-7 py-4 font-bold text-white hover:bg-white/15 transition-colors"
                >
                  {copy.secondaryCta}
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-3 shadow-2xl">
              <AtlasTile
                index={6}
                label={copy.doctorTitle}
                className="aspect-[4/3] rounded-[1.45rem]"
              />
              <div className="px-3 pt-4 pb-2">
                <p className="text-xl font-bold">{copy.doctorTitle}</p>
                <p className="text-sm text-blue-100">{copy.doctorRole}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid md:grid-cols-3 gap-4">
          {[
            [MapPin, copy.trustLocation],
            [FileCheck2, copy.trustPermit],
            [ShieldCheck, copy.trustSupport],
          ].map(([Icon, text]) => {
            const TrustIcon = Icon as typeof MapPin;
            return (
              <div key={text as string} className="flex items-center gap-3 text-[#224671] font-semibold">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                  <TrustIcon size={20} className="text-[#2f6bfc]" />
                </span>
                <span>{text as string}</span>
              </div>
            );
          })}
        </div>
      </section>

      <section id="clinic" className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-10 items-center mb-14">
            <AtlasTile
              index={0}
              label={copy.gallery[0]}
              className="aspect-[4/3] rounded-3xl shadow-xl border border-slate-200"
            />
            <div>
              <div className="inline-flex items-center gap-2 text-[#2f6bfc] font-bold mb-3">
                <Building2 size={20} /> {copy.clinicEyebrow}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#224671] mb-5">{copy.clinicTitle}</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">{copy.clinicText}</p>
              <div className="rounded-2xl bg-white border border-slate-200 p-5 flex items-start gap-3">
                <MapPin className="text-[#2f6bfc] mt-1 flex-shrink-0" size={22} />
                <div>
                  <p className="font-bold text-[#224671]">Istanbul · Beşiktaş</p>
                  <p className="text-slate-600 mt-1">{copy.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-3xl font-bold text-[#224671] mb-3">{copy.galleryTitle}</h3>
            <p className="text-lg text-slate-600 max-w-3xl">{copy.galleryIntro}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5].map((index) => (
              <figure key={index} className="overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm">
                <AtlasTile index={index} label={copy.gallery[index]} className="aspect-[4/3]" />
                <figcaption className="px-5 py-4 font-semibold text-[#224671]">{copy.gallery[index]}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-10">
            <button
              type="button"
              onClick={() => setCertificate(8)}
              className="group text-left"
              aria-label={copy.enlarge}
            >
              <AtlasTile
                index={8}
                label={copy.clinicPermitTitle}
                className="aspect-[4/3] rounded-2xl border border-slate-200 shadow-md group-hover:shadow-xl transition-shadow"
              />
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#2f6bfc]">
                {copy.enlarge} <ExternalLink size={15} />
              </span>
            </button>
            <div>
              <div className="inline-flex items-center gap-2 text-[#2f6bfc] font-bold mb-3">
                <Award size={20} /> {copy.trustPermit}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#224671] mb-5">{copy.clinicPermitTitle}</h2>
              <p className="text-lg text-slate-700 leading-relaxed">{copy.clinicPermitText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#eef5ff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-10 lg:gap-14 items-center">
            <AtlasTile
              index={6}
              label={copy.doctorTitle}
              className="aspect-[4/3] rounded-3xl border border-blue-100 shadow-xl"
            />
            <div>
              <div className="inline-flex items-center gap-2 text-[#2f6bfc] font-bold mb-3">
                <Stethoscope size={20} /> {copy.doctorEyebrow}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#224671]">{copy.doctorTitle}</h2>
              <p className="text-lg font-semibold text-[#2f6bfc] mt-2 mb-6">{copy.doctorRole}</p>
              <p className="text-lg text-slate-700 leading-relaxed mb-7">{copy.doctorIntro}</p>

              <div className="space-y-3">
                {copy.doctorFacts.map((fact, index) => (
                  <div key={fact} className="flex items-start gap-3">
                    {index === 0 ? (
                      <GraduationCap className="mt-0.5 text-[#2f6bfc] flex-shrink-0" size={21} />
                    ) : (
                      <CheckCircle2 className="mt-0.5 text-[#2f6bfc] flex-shrink-0" size={21} />
                    )}
                    <span className="text-slate-700">{fact}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://oktaytuney.com/tr/doktorlarimiz/ersun-cobanoglu"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 font-bold text-[#2f6bfc] hover:text-[#224671]"
              >
                {copy.officialProfile} <ExternalLink size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[#2f6bfc] font-bold mb-3">
                <FileCheck2 size={20} /> {copy.trustPermit}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#224671] mb-5">{copy.doctorPermitTitle}</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-5">{copy.doctorPermitText}</p>
              <button
                type="button"
                onClick={() => setCertificate(7)}
                className="inline-flex items-center gap-2 rounded-xl bg-[#224671] px-5 py-3 font-bold text-white hover:bg-[#173a63]"
              >
                {copy.enlarge} <ExternalLink size={16} />
              </button>
            </div>
            <button type="button" onClick={() => setCertificate(7)} aria-label={copy.enlarge}>
              <AtlasTile
                index={7}
                label={copy.doctorPermitTitle}
                className="aspect-[4/3] rounded-2xl border border-slate-200 shadow-lg"
              />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">{copy.rolesTitle}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <ShieldCheck className="text-[#6EC1E4] mb-5" size={34} />
              <h3 className="text-2xl font-bold mb-3">{copy.rolesCliniqeoTitle}</h3>
              <p className="text-slate-300 leading-relaxed">{copy.rolesCliniqeo}</p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <Stethoscope className="text-[#6EC1E4] mb-5" size={34} />
              <h3 className="text-2xl font-bold mb-3">{copy.rolesMedicalTitle}</h3>
              <p className="text-slate-300 leading-relaxed">{copy.rolesMedical}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-[#224671] to-[#2f6bfc] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-5">{copy.finalTitle}</h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">{copy.finalText}</p>
          <Link
            to={contactPath}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-[#224671] hover:bg-blue-50"
          >
            {copy.finalCta} <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      {certificate !== null && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={copy.enlarge}
          onClick={() => setCertificate(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setCertificate(null)}
              className="absolute -top-12 right-0 inline-flex items-center gap-2 text-white font-semibold"
            >
              <X size={22} /> {copy.close}
            </button>
            <AtlasTile
              index={certificate}
              label={certificate === 7 ? copy.doctorPermitTitle : copy.clinicPermitTitle}
              className="aspect-[4/3] rounded-2xl bg-white shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

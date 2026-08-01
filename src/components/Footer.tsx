import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Linkedin, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  const isFr = language === 'fr';
  const guidesPath = isFr ? '/guides-greffe-cheveux' : '/en/hair-transplant-guides';

  const quickLinks = [
    { href: '/', fr: 'Accueil', en: 'Home' },
    { href: '/techniques', fr: 'Techniques FUE et DHI', en: 'FUE and DHI techniques' },
    { href: '/tarifs', fr: 'Tarifs', en: 'Prices' },
    { href: '/turquie', fr: 'Pourquoi la Turquie', en: 'Why Turkey' },
    { href: '/faq', fr: 'Questions fréquentes', en: 'Frequently asked questions' },
    { href: '/contact', fr: 'Contact', en: 'Contact' },
  ];

  return (
    <footer className="bg-[#224671] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-baseline mb-4">
              <span className="text-2xl font-bold text-white lowercase">cliniqeo</span>
              <span className="text-base font-semibold text-[#6EC1E4] ml-1 uppercase">Hair</span>
            </div>
            <p className="text-gray-300 mb-5 leading-relaxed">
              {isFr
                ? 'Organisation de séjours pour greffe de cheveux en Turquie, avec accompagnement francophone avant, pendant et après le traitement.'
                : 'Hair transplant travel coordination in Turkey, with English-speaking support before, during and after treatment.'}
            </p>

            <p className="text-sm font-semibold text-gray-300 mb-3">{isFr ? 'Suivez-nous' : 'Follow us'}</p>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.instagram.com/cliniqeo" target="_blank" rel="noopener noreferrer" className="bg-[#2f6bfc] hover:bg-[#E4405F] p-2 rounded-lg transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="https://www.tiktok.com/@cliniqeo" target="_blank" rel="noopener noreferrer" className="bg-[#2f6bfc] hover:bg-black p-2 rounded-lg transition-colors" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
              </a>
              <a href="https://twitter.com/cliniqeo" target="_blank" rel="noopener noreferrer" className="bg-[#2f6bfc] hover:bg-black p-2 rounded-lg transition-colors" aria-label="X">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/cliniqeo" target="_blank" rel="noopener noreferrer" className="bg-[#2f6bfc] hover:bg-[#0A66C2] p-2 rounded-lg transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="https://wa.me/33756872961" target="_blank" rel="noopener noreferrer" className="bg-[#2f6bfc] hover:bg-[#25D366] p-2 rounded-lg transition-colors" aria-label="WhatsApp"><Phone size={20} /></a>
              <a href="mailto:info@cliniqeo.com" className="bg-[#2f6bfc] hover:bg-[#6EC1E4] p-2 rounded-lg transition-colors" aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">{isFr ? 'Liens rapides' : 'Quick links'}</h2>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-gray-300 hover:text-[#6EC1E4] transition-colors">
                    {isFr ? item.fr : item.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">{isFr ? 'Contact' : 'Contact'}</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3"><Phone className="mt-1 text-[#6EC1E4]" size={20} /><a href="tel:0188842222" className="text-gray-300 hover:text-white">01 88 84 22 22</a></li>
              <li className="flex items-start gap-3"><Mail className="mt-1 text-[#6EC1E4]" size={20} /><a href="mailto:info@cliniqeo.com" className="text-gray-300 hover:text-white">info@cliniqeo.com</a></li>
              <li className="flex items-start gap-3"><MapPin className="mt-1 text-[#6EC1E4]" size={20} /><span className="text-gray-300">Paris, France<br />Istanbul, Türkiye</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-9 pt-7 text-center">
          <p className="text-gray-400 text-sm max-w-4xl mx-auto mb-4">
            {isFr
              ? "Cliniqeo est une agence d’accompagnement et d’organisation. Les diagnostics et actes médicaux sont réalisés par les professionnels de santé et cliniques partenaires en Turquie."
              : 'Cliniqeo is a care coordination agency. Medical assessments and procedures are performed by partner healthcare professionals and clinics in Turkey.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-gray-400">
            <span>© 2026 <span className="lowercase">cliniqeo</span> <span className="uppercase text-[#6EC1E4]">Hair</span>. {isFr ? 'Tous droits réservés.' : 'All rights reserved.'}</span>
            <span aria-hidden="true">•</span>
            <Link to={guidesPath} className="inline-flex items-center gap-1.5 hover:text-[#6EC1E4] transition-colors">
              <BookOpen size={14} /> {isFr ? 'Guides' : 'Guides'}
            </Link>
            <span aria-hidden="true">•</span>
            <a href="https://cliniqeo.com" className="hover:text-[#6EC1E4] transition-colors">
              {isFr ? 'Site principal Cliniqeo' : 'Cliniqeo main website'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

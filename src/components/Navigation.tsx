import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, PhoneCall, Globe, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

type Lang = 'fr' | 'en';

const routePairs: Array<[string, string]> = [
  ['/greffe-de-cheveux-turquie', '/hair-transplant-turkey'],
  ['/prix-greffe-de-cheveux-turquie', '/turkey-hair-transplant-cost'],
  ['/greffe-de-cheveux-fue-turquie', '/fue-hair-transplant-turkey'],
  ['/greffe-de-cheveux-dhi-turquie', '/dhi-hair-transplant-turkey'],
  ['/greffe-cheveux-istanbul', '/en/hair-transplant-istanbul'],
  ['/greffe-cheveux-turquie-tout-compris', '/en/all-inclusive-hair-transplant-turkey'],
  ['/greffe-cheveux-turquie-avis', '/en/hair-transplant-turkey-reviews'],
  ['/greffe-cheveux-turquie-avant-apres', '/en/hair-transplant-turkey-before-after'],
  ['/greffe-cheveux-femme-turquie', '/en/female-hair-transplant-turkey'],
  ['/greffe-cheveux-afro-turquie', '/en/afro-hair-transplant-turkey'],
  ['/greffe-barbe-turquie', '/en/beard-transplant-turkey'],
  ['/nombre-greffons-greffe-cheveux', '/en/hair-transplant-graft-count'],
  ['/greffe-cheveux-turquie-risques', '/en/hair-transplant-turkey-risks'],
  ['/apres-greffe-cheveux-mois-par-mois', '/en/hair-transplant-recovery-timeline'],
  ['/fue-saphir-turquie', '/en/sapphire-fue-hair-transplant-turkey'],
  ['/dhi-ou-fue', '/en/dhi-vs-fue-hair-transplant'],
  ['/greffe-cheveux-sans-rasage-turquie', '/en/no-shave-hair-transplant-turkey'],
  ['/douleur-greffe-cheveux-anesthesie', '/en/hair-transplant-pain-anesthesia'],
  ['/zone-donneuse-greffe-cheveux', '/en/hair-transplant-donor-area'],
  ['/reparer-greffe-cheveux-ratee', '/en/hair-transplant-repair-turkey'],
  ['/soins-apres-greffe-cheveux', '/en/hair-transplant-aftercare'],
  ['/greffe-ligne-frontale-turquie', '/en/hairline-transplant-turkey'],
  ['/greffe-vertex-turquie', '/en/crown-hair-transplant-turkey'],
  ['/greffe-sourcils-turquie', '/en/eyebrow-transplant-turkey'],
  ['/greffe-cheveux-cicatrice', '/en/hair-transplant-on-scar'],
  ['/deuxieme-greffe-cheveux-turquie', '/en/second-hair-transplant-turkey'],
  ['/guides-greffe-cheveux', '/en/hair-transplant-guides'],
];

const englishRootRoutes = new Set([
  '/hair-transplant-turkey', '/turkey-hair-transplant', '/hair-transplant-in-turkey',
  '/best-hair-transplant-turkey', '/fue-hair-transplant-turkey', '/dhi-hair-transplant-turkey',
  '/turkey-hair-transplant-cost', '/hair-transplant-turkey-cost', '/hair-transplant-turkey-price',
  '/turkey-hair-transplant-prices', '/how-much-hair-transplant-turkey', '/hair-transplant-turkey-reviews',
]);

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const detected: Lang = location.pathname.startsWith('/en/') || englishRootRoutes.has(location.pathname) ? 'en' : 'fr';
    if (detected !== language) setLanguage(detected);
  }, [location.pathname, language, setLanguage]);

  const switchLanguage = (target: Lang) => {
    setLanguage(target);
    setIsLangMenuOpen(false);
    setIsMenuOpen(false);

    const pair = routePairs.find(([fr, en]) => fr === location.pathname || en === location.pathname);
    if (pair) {
      navigate(target === 'fr' ? pair[0] : pair[1]);
      return;
    }

    if (target === 'fr' && location.pathname.startsWith('/en/')) navigate('/');
    if (target === 'en' && !location.pathname.startsWith('/en/')) navigate('/hair-transplant-turkey');
  };

  const menuItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.techniques'), href: '/techniques' },
    { label: t('nav.pricing'), href: '/tarifs' },
    { label: t('nav.why_turkey'), href: '/turquie' },
    { label: t('nav.about'), href: '/a-propos' },
    { label: t('nav.faq'), href: '/faq' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  const languages = [
    { code: 'fr' as const, label: 'Français', flag: '🇫🇷' },
    { code: 'en' as const, label: 'English', flag: '🇬🇧' },
  ];

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-baseline" aria-label="Cliniqeo Hair">
              <span className="text-2xl font-bold text-[#224671] lowercase">cliniqeo</span>
              <span className="text-base font-semibold text-[#2f6bfc] ml-1 uppercase">Hair</span>
            </Link>

            <div className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item) => (
                <Link key={item.href} to={item.href} className={`text-[#224671] hover:text-[#2f6bfc] transition-colors font-medium ${location.pathname === item.href ? 'text-[#2f6bfc] font-bold' : ''}`}>
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:0188842222" className="flex items-center space-x-2 text-[#224671] hover:text-[#2f6bfc]">
                <PhoneCall size={20} className="text-[#2f6bfc]" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">{language === 'fr' ? 'Numéro gratuit' : 'Free number'}</div>
                  <div className="text-base font-semibold">01 88 84 22 22</div>
                </div>
              </a>

              <div className="relative">
                <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="flex items-center space-x-2 text-[#224671] px-3 py-2 rounded-lg hover:bg-gray-50" aria-label="Language">
                  <Globe size={20} />
                  <span>{languages.find((item) => item.code === language)?.flag}</span>
                </button>
                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    {languages.map((item) => (
                      <button key={item.code} onClick={() => switchLanguage(item.code)} className={`w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-3 ${language === item.code ? 'bg-blue-50 text-[#2f6bfc] font-semibold' : 'text-gray-700'}`}>
                        <span className="text-xl">{item.flag}</span><span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/contact" className="bg-[#2f6bfc] text-white px-6 py-3 rounded-lg hover:bg-[#224671] font-semibold">
                {language === 'fr' ? 'Diagnostic gratuit' : 'Free assessment'}
              </Link>
            </div>

            <div className="lg:hidden flex items-center space-x-2">
              <a href="tel:0188842222" className="flex items-center space-x-1 text-[#224671]">
                <PhoneCall size={18} className="text-[#2f6bfc]" />
                <div className="text-left"><div className="text-xs text-gray-500">{language === 'fr' ? 'Gratuit' : 'Free'}</div><div className="text-sm font-semibold">01 88 84 22 22</div></div>
              </a>
              <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="text-[#224671] p-2" aria-label="Language"><Globe size={24} /></button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#224671]" aria-label="Menu">{isMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              {menuItems.map((item) => (
                <Link key={item.href} to={item.href} className="block text-[#224671] hover:text-[#2f6bfc] font-medium py-2" onClick={() => setIsMenuOpen(false)}>{item.label}</Link>
              ))}
              <Link to="/contact" className="block bg-[#2f6bfc] text-white px-6 py-3 rounded-lg font-semibold text-center" onClick={() => setIsMenuOpen(false)}>
                {language === 'fr' ? 'Diagnostic gratuit' : 'Free assessment'}
              </Link>
            </div>
          </div>
        )}

        {isLangMenuOpen && (
          <div className="lg:hidden absolute top-20 right-4 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
            {languages.map((item) => (
              <button key={item.code} onClick={() => switchLanguage(item.code)} className={`w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center space-x-3 ${language === item.code ? 'bg-blue-50 text-[#2f6bfc] font-semibold' : 'text-gray-700'}`}>
                <span className="text-xl">{item.flag}</span><span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </nav>

      <a href="https://cliniqeo.com" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 left-6 bg-[#224671] text-white p-4 rounded-full shadow-lg hover:bg-[#2f6bfc] z-40 group" title={language === 'fr' ? 'Découvrez nos soins dentaires' : 'Discover our dental care'}>
        <ArrowLeft size={24} className="group-hover:scale-110 transition-transform" />
      </a>
    </>
  );
};

export default Navigation;

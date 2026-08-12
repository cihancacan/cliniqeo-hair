import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, Globe, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  getAlternateRoute,
  getLocalizedContactPath,
  getLocalizedHomePath,
  getNavigationItems,
  getSiteLanguage,
  type SiteLanguage,
} from '../config/localizedRoutes';
import { getWhatsAppUrl, WHATSAPP_DISPLAY } from '../config/contact';
import { DENTAL_EN_BASE, DENTAL_FR_BASE, isPortalPath } from '../config/siteRoutes';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const isPortal = isPortalPath(location.pathname);
  const isDental = location.pathname === DENTAL_EN_BASE || location.pathname.startsWith(`${DENTAL_EN_BASE}/`);

  useEffect(() => {
    const detected = getSiteLanguage(location.pathname);
    if (detected !== language) setLanguage(detected);
  }, [location.pathname, language, setLanguage]);

  const switchLanguage = (target: SiteLanguage) => {
    const destination = isPortal
      ? target === 'en' ? '/en' : '/'
      : isDental
        ? target === 'en' ? DENTAL_EN_BASE : DENTAL_FR_BASE
        : getAlternateRoute(location.pathname, target);
    setLanguage(target);
    setIsLangMenuOpen(false);
    setIsMenuOpen(false);
    window.location.assign(destination);
  };

  const menuItems = isPortal
    ? [
        { label: language === 'fr' ? 'Nos expertises' : 'Our expertise', href: '#expertises' },
        { label: language === 'fr' ? 'Votre parcours' : 'Your journey', href: '#parcours' },
      ]
    : isDental
      ? [
          { label: 'Dental Turkey', href: DENTAL_EN_BASE },
          { label: 'UK guides', href: `${DENTAL_EN_BASE}/uk/cities` },
          { label: 'US guides', href: `${DENTAL_EN_BASE}/us/cities` },
        ]
      : getNavigationItems(language).map((item) => ({ label: t(item.key), href: item.href }));
  const contactPath = isPortal
    ? '#expertises'
    : isDental
      ? `${DENTAL_EN_BASE}#dental-assessment`
      : getLocalizedContactPath(language);
  const homePath = isPortal ? (language === 'en' ? '/en' : '/') : isDental ? DENTAL_EN_BASE : getLocalizedHomePath(language);
  const whatsappUrl = getWhatsAppUrl(language);

  const languages = [
    { code: 'fr' as const, label: 'Français', flag: '🇫🇷' },
    { code: 'en' as const, label: 'English', flag: '🇬🇧' },
  ];

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to={homePath} className="flex items-baseline" aria-label={isPortal ? 'Cliniqeo' : isDental ? 'Cliniqeo Dental' : 'Cliniqeo Hair'}>
              <span className="text-2xl font-bold text-[#224671] lowercase">cliniqeo</span>
              {!isPortal && <span className={`text-base font-semibold ml-1 uppercase ${isDental ? 'text-[#08a9b5]' : 'text-[#2f6bfc]'}`}>{isDental ? 'Dental' : 'Hair'}</span>}
            </Link>

            <div className="hidden lg:flex items-center space-x-6">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-[#224671] hover:text-[#2f6bfc] transition-colors font-medium ${location.pathname === item.href ? 'text-[#2f6bfc] font-bold' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-[#224671] hover:text-[#25D366]"
                aria-label={language === 'fr' ? `Appeler via WhatsApp au ${WHATSAPP_DISPLAY}` : `Call via WhatsApp at ${WHATSAPP_DISPLAY}`}
              >
                <PhoneCall size={20} className="text-[#25D366]" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">{language === 'fr' ? 'Appel via WhatsApp' : 'WhatsApp call only'}</div>
                  <div className="text-base font-semibold">{WHATSAPP_DISPLAY}</div>
                </div>
              </a>

              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center space-x-2 text-[#224671] px-3 py-2 rounded-lg hover:bg-gray-50"
                  aria-label={language === 'fr' ? 'Choisir la langue' : 'Choose language'}
                >
                  <Globe size={20} />
                  <span>{languages.find((item) => item.code === language)?.flag}</span>
                </button>
                {isLangMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    {languages.map((item) => (
                      <button
                        key={item.code}
                        onClick={() => switchLanguage(item.code)}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-3 ${language === item.code ? 'bg-blue-50 text-[#2f6bfc] font-semibold' : 'text-gray-700'}`}
                      >
                        <span className="text-xl">{item.flag}</span>
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link to={contactPath} className="bg-[#2f6bfc] text-white px-6 py-3 rounded-lg hover:bg-[#224671] font-semibold">
                {isPortal ? language === 'fr' ? 'Choisir mon parcours' : 'Choose my pathway' : language === 'fr' ? 'Diagnostic gratuit' : 'Free assessment'}
              </Link>
            </div>

            <div className="lg:hidden flex items-center space-x-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-[#224671]"
                aria-label={language === 'fr' ? 'Appeler via WhatsApp' : 'Call via WhatsApp'}
              >
                <PhoneCall size={18} className="text-[#25D366]" />
                <div className="text-left">
                  <div className="text-xs text-gray-500">WhatsApp</div>
                  <div className="text-xs font-semibold">{WHATSAPP_DISPLAY}</div>
                </div>
              </a>
              <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="text-[#224671] p-2" aria-label={language === 'fr' ? 'Langue' : 'Language'}>
                <Globe size={24} />
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#224671]" aria-label="Menu">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              {menuItems.map((item) => (
                <Link key={item.href} to={item.href} className="block text-[#224671] hover:text-[#2f6bfc] font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#25D366] text-white px-6 py-3 rounded-lg font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {language === 'fr' ? 'Appeler via WhatsApp' : 'Call via WhatsApp'}
              </a>
              <Link to={contactPath} className="block bg-[#2f6bfc] text-white px-6 py-3 rounded-lg font-semibold text-center" onClick={() => setIsMenuOpen(false)}>
                {isPortal ? language === 'fr' ? 'Choisir mon parcours' : 'Choose my pathway' : language === 'fr' ? 'Diagnostic gratuit' : 'Free assessment'}
              </Link>
            </div>
          </div>
        )}

        {isLangMenuOpen && (
          <div className="lg:hidden absolute top-20 right-4 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
            {languages.map((item) => (
              <button
                key={item.code}
                onClick={() => switchLanguage(item.code)}
                className={`w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center space-x-3 ${language === item.code ? 'bg-blue-50 text-[#2f6bfc] font-semibold' : 'text-gray-700'}`}
              >
                <span className="text-xl">{item.flag}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </nav>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-105 transition-transform z-40"
        title={language === 'fr' ? `Appeler via WhatsApp : ${WHATSAPP_DISPLAY}` : `Call via WhatsApp: ${WHATSAPP_DISPLAY}`}
        aria-label={language === 'fr' ? 'Appeler Cliniqeo via WhatsApp' : 'Call Cliniqeo via WhatsApp'}
      >
        <MessageCircle size={26} />
      </a>
    </>
  );
};

export default Navigation;

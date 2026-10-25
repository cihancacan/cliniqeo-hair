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
import { getPhoneUrl, getWhatsAppUrl, WHATSAPP_DISPLAY } from '../config/contactCore';
import { isEnglishMountedHairPath, mountHairPathForLanguage } from '../config/hostedPath';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const detected = isEnglishMountedHairPath() ? 'en' : getSiteLanguage(location.pathname);
    if (detected !== language) setLanguage(detected);
  }, [location.pathname, language, setLanguage]);

  const switchLanguage = (target: SiteLanguage) => {
    const destination = getAlternateRoute(location.pathname, target);
    setLanguage(target);
    setIsLangMenuOpen(false);
    setIsMenuOpen(false);
    window.location.assign(mountHairPathForLanguage(destination, target));
  };

  const menuItems = getNavigationItems(language).filter((item) => item.key !== 'nav.home').map((item) => ({
    label: t(item.key),
    href: item.href,
  }));
  const desktopMenuItems = menuItems.filter((item) => {
    const hiddenDesktopPaths = language === 'fr'
      ? ['/turquie', '/faq']
      : ['/en/why-turkey', '/en/faq'];
    return !hiddenDesktopPaths.includes(item.href);
  });
  const contactPath = getLocalizedContactPath(language);
  const homePath = getLocalizedHomePath(language);
  const whatsappUrl = getWhatsAppUrl(language);
  const phoneUrl = getPhoneUrl();

  const languages = [
    { code: 'fr' as const, label: 'Français', flag: '🇫🇷' },
    { code: 'en' as const, label: 'English', flag: '🇬🇧' },
  ];

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to={homePath} className="flex shrink-0 items-baseline" aria-label="Cliniqeo Hair">
              <span className="text-[17px] sm:text-2xl font-bold text-[#224671] lowercase">cliniqeo</span>
              <span className="text-[11px] sm:text-base font-semibold text-[#2f6bfc] ml-1 uppercase">Hair</span>
            </Link>

            <div className="hidden lg:flex items-center space-x-4">
              {desktopMenuItems.map((item) => (
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
              <a href={phoneUrl} className="flex items-center gap-2 rounded-lg px-2 py-2 text-[#224671] hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2f6bfc]" aria-label={language === 'fr' ? 'Appeler Cliniqeo Hair par téléphone' : 'Call Cliniqeo Hair by phone'}>
                <PhoneCall size={20} className="text-[#2f6bfc]" aria-hidden="true" />
                <span className="text-left">
                  <span className="block text-xs text-gray-500">{language === 'fr' ? 'Appel classique' : 'Phone call'}</span>
                  <span className="block text-sm font-semibold">{WHATSAPP_DISPLAY}</span>
                </span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 rounded-lg px-3 py-2 font-semibold text-[#176a42] hover:bg-green-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#176a42]" aria-label={language === 'fr' ? 'Écrire sur WhatsApp' : 'Message on WhatsApp'}>
                <MessageCircle size={20} aria-hidden="true" />
                <span>WhatsApp</span>
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
                {language === 'fr' ? 'Diagnostic gratuit' : 'Free assessment'}
              </Link>
            </div>

            <div className="lg:hidden flex shrink-0 items-center gap-0.5">
              <a
                href={phoneUrl}
                className="inline-flex min-w-0 items-center gap-1 rounded-lg px-0.5 py-1 text-[#224671] hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2f6bfc]"
                aria-label={language === 'fr' ? `Appeler le numéro français ${WHATSAPP_DISPLAY}` : `Call the French phone number ${WHATSAPP_DISPLAY}`}
                title={WHATSAPP_DISPLAY}
              >
                <PhoneCall size={18} className="shrink-0 text-[#2f6bfc]" aria-hidden="true" />
                <span className="text-left leading-tight">
                  <span className="block text-[10px] text-slate-600">🇫🇷 France</span>
                  <span className="block whitespace-nowrap text-[10px] font-semibold tracking-tight">{WHATSAPP_DISPLAY}</span>
                </span>
              </a>
              <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="text-[#224671] p-1.5" aria-label={language === 'fr' ? 'Langue' : 'Language'}>
                <Globe size={21} />
              </button>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#224671] p-1" aria-label="Menu">
                {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
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
              <div className="grid grid-cols-2 gap-2">
                <a href={phoneUrl} onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2 rounded-lg border border-[#2f6bfc] px-3 py-3 font-semibold text-[#224671]" aria-label={language === 'fr' ? 'Appeler par téléphone' : 'Phone call'}>
                  <PhoneCall size={18} aria-hidden="true" />{language === 'fr' ? 'Appeler' : 'Call'}
                </a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2 rounded-lg bg-[#176a42] px-3 py-3 font-semibold text-white">
                  <MessageCircle size={18} aria-hidden="true" />WhatsApp
                </a>
              </div>
              <Link to={contactPath} className="block bg-[#2f6bfc] text-white px-6 py-3 rounded-lg font-semibold text-center" onClick={() => setIsMenuOpen(false)}>
                {language === 'fr' ? 'Diagnostic gratuit' : 'Free assessment'}
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
        title={language === 'fr' ? `Écrire sur WhatsApp : ${WHATSAPP_DISPLAY}` : `Message on WhatsApp: ${WHATSAPP_DISPLAY}`}
        aria-label={language === 'fr' ? 'Écrire à Cliniqeo Hair sur WhatsApp' : 'Message Cliniqeo Hair on WhatsApp'}
      >
        <MessageCircle size={26} />
      </a>
    </>
  );
};

export default Navigation;

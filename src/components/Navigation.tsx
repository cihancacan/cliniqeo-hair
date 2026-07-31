import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, Globe, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.techniques'), href: '/techniques' },
    { label: t('nav.pricing'), href: '/tarifs' },
    { label: t('nav.why_turkey'), href: '/turquie' },
    { label: t('nav.about'), href: '/a-propos' },
    { label: t('nav.faq'), href: '/faq' },
    { label: language === 'fr' ? 'Guides' : 'Guides', href: language === 'fr' ? '/guides-greffe-cheveux' : '/en/hair-transplant-guides' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  const languages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
  ];

  return (
    <>
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <div className="flex items-baseline">
                  <span className="text-2xl font-bold text-[#224671] lowercase">cliniqeo</span>
                  <span className="text-base font-semibold text-[#2f6bfc] ml-1 uppercase">Hair</span>
                </div>
              </Link>
            </div>

          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-[#224671] hover:text-[#2f6bfc] transition-colors duration-300 font-medium ${
                  location.pathname === item.href ? 'text-[#2f6bfc] font-bold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:0188842222"
              className="flex items-center space-x-2 text-[#224671] hover:text-[#2f6bfc] transition-colors duration-300"
            >
              <PhoneCall size={20} className="text-[#2f6bfc]" />
              <div className="text-left">
                <div className="text-xs text-gray-500">{language === 'fr' ? 'Numéro gratuit' : 'Free number'}</div>
                <div className="text-base font-semibold text-[#224671]">01 88 84 22 22</div>
              </div>
            </a>

            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 text-[#224671] hover:text-[#2f6bfc] transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-gray-50"
              >
                <Globe size={20} />
                <span className="font-medium">{languages.find(l => l.code === language)?.flag}</span>
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code as 'fr' | 'en');
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center space-x-3 ${
                        language === lang.code ? 'bg-blue-50 text-[#2f6bfc] font-semibold' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="bg-[#2f6bfc] text-white px-6 py-3 rounded-lg hover:bg-[#224671] transition-all duration-300 font-semibold"
            >
              {language === 'fr' ? 'Diagnostic Gratuit' : 'Free Diagnosis'}
            </Link>
          </div>

          <div className="lg:hidden flex items-center space-x-2">
            <a
              href="tel:0188842222"
              className="flex items-center space-x-1 text-[#224671] hover:text-[#2f6bfc] transition-colors duration-300"
            >
              <PhoneCall size={18} className="text-[#2f6bfc]" />
              <div className="text-left">
                <div className="text-xs text-gray-500">{language === 'fr' ? 'Gratuit' : 'Free'}</div>
                <div className="text-sm font-semibold text-[#224671]">01 88 84 22 22</div>
              </div>
            </a>

            <button
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="text-[#224671] p-2"
            >
              <Globe size={24} />
            </button>

            <button
              className="text-[#224671]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`block text-[#224671] hover:text-[#2f6bfc] transition-colors duration-300 font-medium py-2 ${
                  location.pathname === item.href ? 'text-[#2f6bfc] font-bold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block bg-[#2f6bfc] text-white px-6 py-3 rounded-lg hover:bg-[#224671] transition-all duration-300 font-semibold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {language === 'fr' ? 'Diagnostic Gratuit' : 'Free Diagnosis'}
            </Link>
          </div>
        </div>
      )}

      {isLangMenuOpen && (
        <div className="lg:hidden absolute top-20 right-4 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code as 'fr' | 'en');
                setIsLangMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 hover:bg-gray-50 flex items-center space-x-3 ${
                language === lang.code ? 'bg-blue-50 text-[#2f6bfc] font-semibold' : 'text-gray-700'
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
      </nav>

      <a
        href="https://cliniqeo.com"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-[#224671] text-white p-4 rounded-full shadow-lg hover:bg-[#2f6bfc] transition-all duration-300 z-40 group"
        title={language === 'fr' ? 'Découvrez nos soins dentaires' : 'Discover our dental care'}
      >
        <ArrowLeft size={24} className="group-hover:scale-110 transition-transform duration-300" />
      </a>
    </>
  );
};

export default Navigation;

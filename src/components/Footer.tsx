import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronDown, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <footer className="bg-[#224671] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-baseline mb-4">
              <span className="text-2xl font-bold text-white lowercase">cliniqeo</span>
              <span className="text-base font-semibold text-[#2f6bfc] ml-1 uppercase">Hair</span>
            </div>
            <p className="text-gray-300 mb-4">
              Greffe de cheveux en Turquie avec accompagnement français.
              Techniques FUE & DHI, résultats naturels garantis.
            </p>
            <div className="mb-6">
              <h5 className="text-sm font-semibold text-gray-300 mb-3">Suivez-nous</h5>
              <div className="flex space-x-3">
                <a
                  href="https://www.instagram.com/cliniqeo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2f6bfc] hover:bg-[#E4405F] p-2 rounded-lg transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.tiktok.com/@cliniqeo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2f6bfc] hover:bg-black p-2 rounded-lg transition-colors duration-300"
                  aria-label="TikTok"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/cliniqeo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2f6bfc] hover:bg-black p-2 rounded-lg transition-colors duration-300"
                  aria-label="X (Twitter)"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/cliniqeo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2f6bfc] hover:bg-[#0A66C2] p-2 rounded-lg transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            <div className="flex space-x-3">
              <a
                href="https://wa.me/33756872961"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2f6bfc] hover:bg-[#25D366] p-2 rounded-lg transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <Phone size={20} />
              </a>
              <a
                href="mailto:info@cliniqeo.com"
                className="bg-[#2f6bfc] hover:bg-[#6EC1E4] p-2 rounded-lg transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#6EC1E4] transition-colors duration-300">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/techniques" className="text-gray-300 hover:text-[#6EC1E4] transition-colors duration-300">
                  Techniques FUE & DHI
                </Link>
              </li>
              <li>
                <Link to="/tarifs" className="text-gray-300 hover:text-[#6EC1E4] transition-colors duration-300">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link to="/turquie" className="text-gray-300 hover:text-[#6EC1E4] transition-colors duration-300">
                  Pourquoi la Turquie
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-[#6EC1E4] transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#6EC1E4] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="mt-1 text-[#6EC1E4]" size={20} />
                <span className="text-gray-300">01 88 84 22 22</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="mt-1 text-[#6EC1E4]" size={20} />
                <span className="text-gray-300">info@cliniqeo.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="mt-1 text-[#6EC1E4]" size={20} />
                <span className="text-gray-300">
                  Paris, France<br />
                  Istanbul, Turquie
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">
              Cliniqeo est une agence française d'accompagnement médical. Les actes médicaux sont réalisés exclusivement par nos cliniques partenaires certifiées en Turquie.
            </p>
            <div className="relative inline-block">
              <p className="text-gray-400 text-sm">
                © 2025 <span className="lowercase">cliniqeo</span> <span className="uppercase text-[#2f6bfc]">Hair</span>. Tous droits réservés.
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="ml-2 inline-flex items-center hover:text-[#6EC1E4] transition-colors"
                >
                  Nos Services
                  <ChevronDown className={`ml-1 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} size={16} />
                </button>
              </p>
              {isMenuOpen && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white rounded-lg shadow-2xl p-4 w-screen max-w-4xl z-50 border border-gray-200">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-left text-sm">
                    <Link to="/greffe-de-cheveux-turquie" className="text-gray-700 hover:text-[#2f6bfc] transition-colors p-2 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>
                      Greffe de cheveux Turquie
                    </Link>
                    <Link to="/greffe-de-cheveux-fue-turquie" className="text-gray-700 hover:text-[#2f6bfc] transition-colors p-2 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>
                      Greffe de cheveux FUE Turquie
                    </Link>
                    <Link to="/greffe-de-cheveux-dhi-turquie" className="text-gray-700 hover:text-[#2f6bfc] transition-colors p-2 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>
                      Greffe de cheveux DHI Turquie
                    </Link>
                    <Link to="/greffe-de-barbe-turquie" className="text-gray-700 hover:text-[#2f6bfc] transition-colors p-2 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>
                      Greffe de barbe Turquie
                    </Link>
                    <Link to="/implant-capillaire-turquie" className="text-gray-700 hover:text-[#2f6bfc] transition-colors p-2 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>
                      Implant capillaire Turquie
                    </Link>
                    <Link to="/implant-cheveux-turquie" className="text-gray-700 hover:text-[#2f6bfc] transition-colors p-2 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>
                      Implant cheveux Turquie
                    </Link>
                    <Link to="/meilleure-clinique-greffe-cheveux-turquie" className="text-gray-700 hover:text-[#2f6bfc] transition-colors p-2 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>
                      Meilleure clinique greffe cheveux
                    </Link>
                    <Link to="/meilleure-clinique-implant-cheveux-turquie" className="text-gray-700 hover:text-[#2f6bfc] transition-colors p-2 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>
                      Meilleure clinique implant cheveux
                    </Link>
                    <Link to="/meilleure-clinique-implant-capillaire-turquie" className="text-gray-700 hover:text-[#2f6bfc] transition-colors p-2 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>
                      Meilleure clinique implant capillaire
                    </Link>
                    <Link to="/greffe-cheveux-prix-turquie" className="text-gray-700 hover:text-[#2f6bfc] transition-colors p-2 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>
                      Greffe cheveux prix Turquie
                    </Link>
                    <Link to="/prix-greffe-de-cheveux-turquie" className="text-gray-700 hover:text-[#2f6bfc] transition-colors p-2 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>
                      Prix greffe de cheveux Turquie
                    </Link>
                    <Link to="/prix-implant-capillaire-turquie" className="text-gray-700 hover:text-[#2f6bfc] transition-colors p-2 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>
                      Prix implant capillaire Turquie
                    </Link>
                    <Link to="/implant-cheveux-turquie-prix" className="text-gray-700 hover:text-[#2f6bfc] transition-colors p-2 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>
                      Implant cheveux Turquie prix
                    </Link>
                    <Link to="/greffe-de-cheveux-turquie-prix-tout-compris" className="text-gray-700 hover:text-[#2f6bfc] transition-colors p-2 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>
                      Greffe cheveux prix tout compris
                    </Link>
                    <Link to="/greffe-de-cheveux-turquie-avis" className="text-gray-700 hover:text-[#2f6bfc] transition-colors p-2 hover:bg-gray-50 rounded" onClick={() => setIsMenuOpen(false)}>
                      Greffe de cheveux Turquie avis
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <a
                href="https://cliniqeo.com"
                className="text-white hover:text-[#6EC1E4] transition-colors duration-300 inline-flex items-center font-semibold"
              >
                ← Retour au site principal Cliniqeo
              </a>
              <br />
              <a
                href="https://cliniqeo.com"
                className="text-[#6EC1E4] hover:text-white transition-colors duration-300 text-sm"
              >
                Découvrez aussi nos soins dentaires en Turquie
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

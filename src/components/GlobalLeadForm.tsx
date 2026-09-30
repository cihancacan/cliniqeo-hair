import { useLanguage } from '../contexts/LanguageContext';
import SimpleLeadForm from './SimpleLeadForm';

export default function GlobalLeadForm() {
  const { language } = useLanguage();
  const isFr = language === 'fr';

  return (
    <section className="bg-slate-50 border-t border-slate-200 py-14 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-7">
          <p className="text-sm font-bold tracking-[0.14em] text-[#2f6bfc] mb-2">{isFr ? 'DIAGNOSTIC GRATUIT' : 'FREE ASSESSMENT'}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#224671]">{isFr ? 'Une question ? Demandez votre diagnostic' : 'Have a question? Request your assessment'}</h2>
        </div>
        <SimpleLeadForm language={language} />
      </div>
    </section>
  );
}

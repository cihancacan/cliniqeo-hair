import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import BeforeAfterGallery from '../../components/BeforeAfterGallery';
import { isEnglishMountedHairPath } from '../../config/hostedPath';

export default function EnglishBeforeAfterPage() {
  const contactPath = isEnglishMountedHairPath() ? '/contact' : '/en/contact';

  return (
    <div className="pt-20 bg-white">
      <SEOHead
        title="Hair Transplant Turkey Before & After Results | Cliniqeo Hair"
        description="View real hair transplant before-and-after patient results from our medical partner in Istanbul and learn how to compare outcomes realistically."
        path="/en/hair-transplant-turkey-before-after"
        lang="en"
        alternates={[
          { lang: 'en', path: '/en/hair-transplant-turkey-before-after' },
          { lang: 'fr', path: '/greffe-cheveux/avant-apres' },
          { lang: 'x-default', path: '/greffe-cheveux/avant-apres' },
        ]}
      />

      <section className="bg-gradient-to-br from-[#224671] via-[#2f6bfc] to-[#6EC1E4] text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-100 font-semibold mb-5">
            <ShieldCheck size={22} /> Real patient results
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Hair Transplant Before & After Results in Turkey
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 max-w-4xl leading-relaxed mb-8">
            Browse real before-and-after photographs from patients treated by our medical partner in Istanbul.
          </p>
          <Link
            to={contactPath}
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-[#224671] hover:bg-blue-50 transition-colors"
          >
            Request a free assessment
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <BeforeAfterGallery
        limit={20}
        eagerCount={4}
        showCta={false}
        heading="Real Patient Results"
        intro="Different hair-loss patterns, donor areas and treatment plans produce different outcomes. The photographs below show real examples."
        className="py-16 md:py-20 bg-white"
      />

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#224671] mb-4">
              How to assess a hair transplant result
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A useful comparison looks beyond the hairline alone and takes the donor area, density and timing into account.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              ['Result timing', 'Hair density and calibre continue to mature over many months. Crown areas can take longer than the frontal zone.'],
              ['Donor-area preservation', 'A natural recipient result should not come at the expense of excessive extraction from the donor area.'],
              ['Individual variation', 'Hair calibre, curl, colour contrast, donor density and the size of the treated area all affect the final appearance.'],
            ].map(([title, text]) => (
              <article key={title} className="bg-white border border-slate-200 rounded-xl p-7 shadow-sm">
                <CheckCircle className="text-[#2f6bfc] mb-4" size={26} />
                <h3 className="text-xl font-bold text-[#224671] mb-3">{title}</h3>
                <p className="text-slate-700 leading-relaxed">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#224671] to-[#2f6bfc] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">See what may be realistic for your case</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Send your photos for an initial review of your donor area, priority zones and possible graft range.
          </p>
          <Link
            to={contactPath}
            className="inline-flex items-center justify-center rounded-xl bg-white px-9 py-4 text-lg font-bold text-[#224671] hover:bg-blue-50 transition-colors"
          >
            Request my assessment
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getHairAssetUrl, isEnglishMountedHairPath } from '../config/hostedPath';

interface BeforeAfterGalleryProps {
  limit?: number;
  showCta?: boolean;
  heading?: string;
  intro?: string;
  className?: string;
}

export default function BeforeAfterGallery({
  limit = 8,
  showCta = true,
  heading = 'Hair Transplant Before & After Results',
  intro = 'Real patient results from our medical partner in Istanbul.',
  className = 'py-20 bg-white',
}: BeforeAfterGalleryProps) {
  const moreResultsPath = isEnglishMountedHairPath()
    ? '/hair-transplant-turkey-before-after'
    : '/en/hair-transplant-turkey-before-after';

  const count = Math.max(1, Math.min(limit, 20));
  const results = Array.from({ length: count }, (_, index) => index + 1);

  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(heading || intro) && (
          <div className="text-center mb-12">
            {heading && (
              <h2 className="text-4xl md:text-5xl font-bold text-[#224671] mb-5">
                {heading}
              </h2>
            )}
            {intro && (
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                {intro}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {results.map((number) => (
            <figure
              key={number}
              className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={getHairAssetUrl(`/greffe_cheveux_turquie_hair_transplant_turkey_${number}.jpg`)}
                alt={`Hair transplant Turkey before and after result - patient ${number}`}
                className="block w-full h-auto"
                loading={number <= 4 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </figure>
          ))}
        </div>

        {showCta && (
          <div className="text-center mt-10">
            <Link
              to={moreResultsPath}
              className="inline-flex items-center justify-center rounded-xl bg-[#2f6bfc] px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-[#224671] transition-colors"
            >
              View more results
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

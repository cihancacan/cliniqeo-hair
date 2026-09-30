import { Link } from 'react-router-dom';
import { ArrowRight, Building2, MapPin, ShieldCheck, Stethoscope } from 'lucide-react';
import { getHairAssetUrl, isEnglishMountedHairPath } from '../config/hostedPath';

export default function EnglishClinicDoctorTeaser() {
  const clinicDoctorPath = isEnglishMountedHairPath() ? '/clinic-doctor' : '/en/clinic-doctor';

  return (
    <section className="bg-white py-16 md:py-20" aria-labelledby="english-clinic-doctor-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center">
          <div>
            <p className="text-sm font-bold tracking-[0.14em] text-[#2f6bfc] mb-3">WHERE &amp; WITH WHOM</p>
            <h2 id="english-clinic-doctor-title" className="text-4xl md:text-5xl font-bold text-[#224671] leading-tight mb-6">
              Know where you’ll be treated — and by whom
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-7">
              Your treatment journey is organised with our partner facility in Beşiktaş, Istanbul. Meet the clinic,
              Dr Ersun Çobanoğlu and the medical environment before you decide to travel.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 mb-8">
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                <Building2 className="text-[#2f6bfc] mb-2" size={24} />
                <p className="font-bold text-[#224671]">Partner clinic</p>
                <p className="text-sm text-slate-600 mt-1">Beşiktaş, Istanbul</p>
              </div>
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                <Stethoscope className="text-[#2f6bfc] mb-2" size={24} />
                <p className="font-bold text-[#224671]">Named physician</p>
                <p className="text-sm text-slate-600 mt-1">Dr Ersun Çobanoğlu</p>
              </div>
              <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                <ShieldCheck className="text-[#2f6bfc] mb-2" size={24} />
                <p className="font-bold text-[#224671]">Transparent pathway</p>
                <p className="text-sm text-slate-600 mt-1">Clinic, doctor and authorisations</p>
              </div>
            </div>

            <Link
              to={clinicDoctorPath}
              className="inline-flex items-center justify-center rounded-xl bg-[#224671] px-7 py-4 font-bold text-white hover:bg-[#2f6bfc] transition-colors"
            >
              Meet the clinic &amp; doctor
              <ArrowRight className="ml-2" size={19} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
              <img
                src={getHairAssetUrl('/clinique_greffe_cheveux_turquie.jpg')}
                alt="Cliniqeo Hair partner clinic in Istanbul"
                className="block aspect-[4/5] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="p-4">
                <p className="font-bold text-[#224671]">OKTAY TUNEY CLINIC</p>
                <p className="mt-1 flex items-center gap-1 text-sm text-slate-600"><MapPin size={14} /> Beşiktaş, Istanbul</p>
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img
                src={getHairAssetUrl('/Dr_Ersun_Cobanoglu.jpg')}
                alt="Dr Ersun Çobanoğlu"
                className="block aspect-[4/5] w-full object-contain"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="p-4">
                <p className="font-bold text-[#224671]">Dr Ersun Çobanoğlu</p>
                <p className="mt-1 text-sm text-slate-600">Physician · Medical aesthetics</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

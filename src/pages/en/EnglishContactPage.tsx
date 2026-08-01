import { useState } from 'react';
import { CheckCircle, Mail, MapPin, Phone, Send, Upload } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import SEOHead from '../../components/SEOHead';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

type PhotoType = 'front' | 'top' | 'back';

const initialForm = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  age: '',
  message: '',
};

const initialPhotos: Record<PhotoType, File | null> = {
  front: null,
  top: null,
  back: null,
};

export default function EnglishContactPage() {
  const [formData, setFormData] = useState(initialForm);
  const [photos, setPhotos] = useState(initialPhotos);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const photoUrls = {
        photo_front_url: null as string | null,
        photo_top_url: null as string | null,
        photo_donor_url: null as string | null,
      };

      const uploads: Promise<void>[] = [];
      const uploadPhoto = (type: PhotoType, databaseField: keyof typeof photoUrls) => {
        const photo = photos[type];
        if (!photo) return;

        const safeName = photo.name.replace(/[^a-zA-Z0-9._-]/g, '-');
        const fileName = `${Date.now()}_${type}_${safeName}`;
        uploads.push(
          supabase.storage
            .from('diagnostic-photos')
            .upload(fileName, photo)
            .then(({ data, error: uploadError }) => {
              if (uploadError) throw uploadError;
              photoUrls[databaseField] = data.path;
            }),
        );
      };

      uploadPhoto('front', 'photo_front_url');
      uploadPhoto('top', 'photo_top_url');
      uploadPhoto('back', 'photo_donor_url');
      await Promise.all(uploads);

      const { error: submitError } = await supabase.from('diagnostic_requests').insert([
        {
          first_name: formData.first_name,
          last_name: formData.last_name,
          email: formData.email,
          phone: formData.phone,
          age: formData.age ? Number.parseInt(formData.age, 10) : null,
          message: `[English request] ${formData.message}`.trim(),
          status: 'pending',
          ...photoUrls,
        },
      ]);

      if (submitError) throw submitError;

      setIsSuccess(true);
      setFormData(initialForm);
      setPhotos(initialPhotos);
    } catch (submitError) {
      console.error('Error submitting English assessment form:', submitError);
      setError('We could not send your request. Please try again or contact us on WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const photoFields: Array<{ type: PhotoType; label: string; help: string }> = [
    { type: 'front', label: 'Front view', help: 'Hairline and temples' },
    { type: 'top', label: 'Top view', help: 'Mid-scalp and crown' },
    { type: 'back', label: 'Donor area', help: 'Back and sides' },
  ];

  return (
    <div className="pt-20 bg-white">
      <SEOHead
        title="Free Hair Transplant Assessment | Cliniqeo Hair"
        description="Send your information and scalp photographs for a free initial hair transplant assessment and personalised quotation within 24 hours."
        path="/en/contact"
        lang="en"
        alternates={[
          { lang: 'en', path: '/en/contact' },
          { lang: 'fr', path: '/contact' },
          { lang: 'x-default', path: '/contact' },
        ]}
      />

      <section className="bg-gradient-to-br from-[#224671] via-[#2f6bfc] to-[#6EC1E4] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Free hair transplant assessment</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-50">
            Send your details and photographs for an initial review and a personalised quotation within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#224671] mb-7">How the assessment works</h2>
            <div className="space-y-5">
              {[
                ['1', 'Complete the form', 'Tell us about your hair loss, medical history and treatment goals.'],
                ['2', 'Add three clear photographs', 'Include the front, top and donor area. Additional side views can be sent later by WhatsApp.'],
                ['3', 'Receive an initial review', 'The team reviews donor capacity, priority areas and a provisional graft range.'],
                ['4', 'Confirm the plan on site', 'The partner medical team performs the final examination and confirms the procedure before treatment.'],
              ].map(([number, title, text]) => (
                <div key={number} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#2f6bfc] text-white font-bold flex items-center justify-center flex-shrink-0">{number}</div>
                  <div>
                    <h3 className="text-xl font-bold text-[#224671] mb-1">{title}</h3>
                    <p className="text-slate-700 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 rounded-xl p-7 mt-10">
              <h2 className="text-2xl font-bold text-[#224671] mb-5">Contact Cliniqeo Hair</h2>
              <div className="space-y-4 text-slate-700">
                <div className="flex items-start gap-3"><Phone className="text-[#2f6bfc] mt-1" size={21} /><div><strong>Telephone</strong><br /><a href="tel:0188842222">+33 1 88 84 22 22</a></div></div>
                <div className="flex items-start gap-3"><Mail className="text-[#2f6bfc] mt-1" size={21} /><div><strong>Email</strong><br /><a href="mailto:info@cliniqeo.com">info@cliniqeo.com</a></div></div>
                <div className="flex items-start gap-3"><MapPin className="text-[#2f6bfc] mt-1" size={21} /><div><strong>Locations</strong><br />Paris, France<br />Istanbul, Türkiye</div></div>
              </div>
              <a
                href="https://wa.me/33756872961"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-6 bg-green-500 text-white text-center px-6 py-4 rounded-lg font-bold hover:bg-green-600"
              >
                Contact us on WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-6 md:p-8">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="text-green-600" size={42} />
                </div>
                <h2 className="text-3xl font-bold text-[#224671] mb-4">Request sent</h2>
                <p className="text-lg text-slate-700 mb-7">Your assessment request has been received. Our team will contact you within 24 hours.</p>
                <button onClick={() => setIsSuccess(false)} className="bg-[#2f6bfc] text-white px-7 py-3 rounded-lg font-bold hover:bg-[#224671]">
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-3xl font-bold text-[#224671] mb-2">Assessment form</h2>
                <p className="text-slate-600 mb-6">Fields marked with * are required.</p>

                <div className="grid md:grid-cols-2 gap-5">
                  <label className="font-semibold text-[#224671]">First name *
                    <input type="text" required value={formData.first_name} onChange={(event) => setFormData({ ...formData, first_name: event.target.value })} className="mt-2 w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none" />
                  </label>
                  <label className="font-semibold text-[#224671]">Last name *
                    <input type="text" required value={formData.last_name} onChange={(event) => setFormData({ ...formData, last_name: event.target.value })} className="mt-2 w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none" />
                  </label>
                </div>

                <label className="block font-semibold text-[#224671]">Email *
                  <input type="email" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} className="mt-2 w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none" />
                </label>

                <div className="grid md:grid-cols-2 gap-5">
                  <label className="font-semibold text-[#224671]">Telephone *
                    <input type="tel" required value={formData.phone} onChange={(event) => setFormData({ ...formData, phone: event.target.value })} className="mt-2 w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none" />
                  </label>
                  <label className="font-semibold text-[#224671]">Age
                    <input type="number" min="18" max="99" value={formData.age} onChange={(event) => setFormData({ ...formData, age: event.target.value })} className="mt-2 w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none" />
                  </label>
                </div>

                <label className="block font-semibold text-[#224671]">Describe your situation
                  <textarea rows={5} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="Hair-loss pattern, previous treatments, expectations and questions..." className="mt-2 w-full px-4 py-3 border-2 border-slate-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none resize-none" />
                </label>

                <div>
                  <p className="font-semibold text-[#224671] mb-3">Photographs for the assessment</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {photoFields.map((field) => (
                      <label key={field.type} className="border-2 border-dashed border-slate-300 rounded-lg p-4 text-center cursor-pointer hover:border-[#2f6bfc] bg-white">
                        <Upload className="mx-auto text-[#2f6bfc] mb-2" size={24} />
                        <span className="block font-bold text-[#224671]">{field.label}</span>
                        <span className="block text-xs text-slate-500 mt-1">{photos[field.type]?.name ?? field.help}</span>
                        <input type="file" accept="image/*" capture="environment" className="hidden" onChange={(event) => setPhotos({ ...photos, [field.type]: event.target.files?.[0] ?? null })} />
                      </label>
                    ))}
                  </div>
                </div>

                {error && <div className="bg-red-100 border border-red-300 text-red-700 p-4 rounded-lg">{error}</div>}

                <button type="submit" disabled={isSubmitting} className="w-full bg-[#2f6bfc] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#224671] flex items-center justify-center disabled:opacity-60">
                  {isSubmitting ? 'Sending...' : <><span>Send my request</span><Send className="ml-2" size={20} /></>}
                </button>

                <p className="text-xs text-slate-500 text-center">Your information is used only to process your assessment request and is not shared with advertisers.</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

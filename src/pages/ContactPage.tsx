import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Upload, X } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { getHairAssetUrl } from '../config/hostedPath';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    age: '',
    message: '',
  });

  const [photos, setPhotos] = useState<{
    front: File | null;
    top: File | null;
    back: File | null;
  }>({
    front: null,
    top: null,
    back: null,
  });

  const [photoPreview, setPhotoPreview] = useState<{
    front: string | null;
    top: string | null;
    back: string | null;
  }>({
    front: null,
    top: null,
    back: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = (type: 'front' | 'top' | 'back', file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(prev => ({
          ...prev,
          [type]: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
      setPhotos(prev => ({
        ...prev,
        [type]: file,
      }));
    } else {
      setPhotoPreview(prev => ({
        ...prev,
        [type]: null,
      }));
      setPhotos(prev => ({
        ...prev,
        [type]: null,
      }));
    }
  };

  const removePhoto = (type: 'front' | 'top' | 'back') => {
    handlePhotoChange(type, null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const photoUrls = {
        photo_front_url: null as string | null,
        photo_top_url: null as string | null,
        photo_donor_url: null as string | null,
      };

      if (photos.front || photos.top || photos.back) {
        const uploadPromises = [];

        if (photos.front) {
          const fileName = `${Date.now()}_front_${photos.front.name}`;
          uploadPromises.push(
            supabase.storage
              .from('diagnostic-photos')
              .upload(fileName, photos.front)
              .then(({ data, error }) => {
                if (error) throw error;
                photoUrls.photo_front_url = data.path;
              })
          );
        }

        if (photos.top) {
          const fileName = `${Date.now()}_top_${photos.top.name}`;
          uploadPromises.push(
            supabase.storage
              .from('diagnostic-photos')
              .upload(fileName, photos.top)
              .then(({ data, error }) => {
                if (error) throw error;
                photoUrls.photo_top_url = data.path;
              })
          );
        }

        if (photos.back) {
          const fileName = `${Date.now()}_back_${photos.back.name}`;
          uploadPromises.push(
            supabase.storage
              .from('diagnostic-photos')
              .upload(fileName, photos.back)
              .then(({ data, error }) => {
                if (error) throw error;
                photoUrls.photo_donor_url = data.path;
              })
          );
        }

        await Promise.all(uploadPromises);
      }

      const { error: submitError } = await supabase
        .from('diagnostic_requests')
        .insert([
          {
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            phone: formData.phone,
            age: formData.age ? parseInt(formData.age) : null,
            message: formData.message,
            status: 'pending',
            ...photoUrls,
          },
        ]);

      if (submitError) throw submitError;

      setIsSuccess(true);
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        age: '',
        message: '',
      });
      setPhotos({
        front: null,
        top: null,
        back: null,
      });
      setPhotoPreview({
        front: null,
        top: null,
        back: null,
      });
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Diagnostic Capillaire Gratuit
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Obtenez une analyse personnalisée de votre cas et un devis détaillé en moins de 24 heures
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-[#224671] mb-6">
                Comment ça marche ?
              </h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-[#2f6bfc] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4 font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#224671] mb-2">
                      Remplissez le formulaire
                    </h3>
                    <p className="text-gray-700">
                      Indiquez vos coordonnées et décrivez votre situation capillaire.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#2f6bfc] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4 font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#224671] mb-2">
                      Envoyez vos photos
                    </h3>
                    <p className="text-gray-700">
                      4 photos nécessaires : face (0°), profil gauche/droit (45°), dessus (90°), zone donneuse arrière.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#2f6bfc] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4 font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#224671] mb-2">
                      Recevez votre diagnostic
                    </h3>
                    <p className="text-gray-700">
                      Notre équipe médicale analyse votre cas et vous envoie un diagnostic détaillé avec estimation du nombre de greffons et devis personnalisé sous 24h.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#2f6bfc] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4 font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#224671] mb-2">
                      Planifiez votre séjour
                    </h3>
                    <p className="text-gray-700">
                      Si vous êtes satisfait du diagnostic, nous organisons ensemble votre séjour médical en Turquie.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f3f3f3] p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-[#224671] mb-4">
                  Coordonnées Cliniqeo Hair
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="text-[#2f6bfc] mr-4 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-[#224671] mb-1">Téléphone</h4>
                      <p className="text-gray-700">+33 1 88 84 22 22</p>
                      <p className="text-gray-600 text-sm">Lundi - Vendredi : 9h - 19h</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="text-[#2f6bfc] mr-4 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-[#224671] mb-1">Email</h4>
                      <p className="text-gray-700">info@cliniqeo.com</p>
                      <p className="text-gray-600 text-sm">Réponse sous 24h</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-[#2f6bfc] mr-4 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold text-[#224671] mb-1">Localisation</h4>
                      <p className="text-gray-700">Paris, France</p>
                      <p className="text-gray-700">Istanbul, Turquie (Cliniques partenaires)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t-2 border-gray-300">
                  <a
                    href="https://wa.me/33756872961"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-500 text-white text-center px-6 py-4 rounded-lg font-bold hover:bg-green-600 transition-all duration-300"
                  >
                    Contacter sur WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#f3f3f3] p-8 rounded-xl">
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-500" size={48} />
                  </div>
                  <h3 className="text-3xl font-bold text-[#224671] mb-4">
                    Demande envoyée !
                  </h3>
                  <p className="text-xl text-gray-700 mb-6">
                    Votre demande de diagnostic a bien été reçue. Notre équipe médicale va l'analyser et vous répondra sous 24 heures.
                  </p>
                  <p className="text-gray-600 mb-8">
                    Vérifiez votre boîte email (et vos spams) pour notre réponse.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="bg-[#2f6bfc] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#224671] transition-all duration-300"
                  >
                    Faire une nouvelle demande
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-[#224671] mb-6">
                    Formulaire de Diagnostic Gratuit
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="first_name" className="block text-[#224671] font-bold mb-2">
                          Prénom *
                        </label>
                        <input
                          type="text"
                          id="first_name"
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="last_name" className="block text-[#224671] font-bold mb-2">
                          Nom *
                        </label>
                        <input
                          type="text"
                          id="last_name"
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-[#224671] font-bold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-[#224671] font-bold mb-2">
                          Téléphone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+33 6 12 34 56 78"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="age" className="block text-[#224671] font-bold mb-2">
                          Âge
                        </label>
                        <input
                          type="number"
                          id="age"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          min="18"
                          max="99"
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-[#224671] font-bold mb-2">
                        Décrivez votre situation
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Décrivez votre situation capillaire, vos attentes, questions..."
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#2f6bfc] focus:outline-none transition-colors resize-none"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-[#224671] font-bold mb-4">
                        Photos pour le diagnostic (optionnel)
                      </label>

                      <div className="mb-4">
                        <img
                          src={getHairAssetUrl('/greffe capillaire turquie.png')}
                          alt="Guide des photos nécessaires pour le diagnostic capillaire"
                          className="w-full rounded-lg shadow-md"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-2 md:gap-4">
                        <div>
                          <label className="block text-xs md:text-sm font-bold text-[#224671] mb-1 md:mb-2">
                            Face
                          </label>
                          <div className="relative">
                            {photoPreview.front ? (
                              <div className="relative">
                                <img
                                  src={photoPreview.front}
                                  alt="Photo de face"
                                  className="w-full h-24 md:h-48 object-cover rounded-lg border-2 border-[#2f6bfc]"
                                />
                                <button
                                  type="button"
                                  onClick={() => removePhoto('front')}
                                  className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                                >
                                  <X size={12} />
                                </button>
                              </div>
                            ) : (
                              <label className="flex flex-col items-center justify-center w-full h-24 md:h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#2f6bfc] transition-colors bg-gray-50 hover:bg-gray-100">
                                <Upload className="text-gray-400 mb-1" size={20} />
                                <span className="text-xs text-gray-600 px-1 text-center">Ajouter</span>
                                <input
                                  type="file"
                                  accept="image/*"
                                  capture="environment"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) handlePhotoChange('front', file);
                                  }}
                                  className="hidden"
                                />
                              </label>
                            )}
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs md:text-sm font-bold text-[#224671] mb-1 md:mb-2">
                            Dessus
                          </label>
                          <div className="relative">
                            {photoPreview.top ? (
                              <div className="relative">
                                <img
                                  src={photoPreview.top}
                                  alt="Photo du dessus"
                                  className="w-full h-24 md:h-48 object-cover rounded-lg border-2 border-[#2f6bfc]"
                                />
                                <button
                                  type="button"
                                  onClick={() => removePhoto('top')}
                                  className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                                >
                                  <X size={12} />
                                </button>
                              </div>
                            ) : (
                              <label className="flex flex-col items-center justify-center w-full h-24 md:h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#2f6bfc] transition-colors bg-gray-50 hover:bg-gray-100">
                                <Upload className="text-gray-400 mb-1" size={20} />
                                <span className="text-xs text-gray-600 px-1 text-center">Ajouter</span>
                                <input
                                  type="file"
                                  accept="image/*"
                                  capture="environment"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) handlePhotoChange('top', file);
                                  }}
                                  className="hidden"
                                />
                              </label>
                            )}
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs md:text-sm font-bold text-[#224671] mb-1 md:mb-2">
                            Arrière
                          </label>
                          <div className="relative">
                            {photoPreview.back ? (
                              <div className="relative">
                                <img
                                  src={photoPreview.back}
                                  alt="Photo arrière"
                                  className="w-full h-24 md:h-48 object-cover rounded-lg border-2 border-[#2f6bfc]"
                                />
                                <button
                                  type="button"
                                  onClick={() => removePhoto('back')}
                                  className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                                >
                                  <X size={12} />
                                </button>
                              </div>
                            ) : (
                              <label className="flex flex-col items-center justify-center w-full h-24 md:h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#2f6bfc] transition-colors bg-gray-50 hover:bg-gray-100">
                                <Upload className="text-gray-400 mb-1" size={20} />
                                <span className="text-xs text-gray-600 px-1 text-center">Ajouter</span>
                                <input
                                  type="file"
                                  accept="image/*"
                                  capture="environment"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) handlePhotoChange('back', file);
                                  }}
                                  className="hidden"
                                />
                              </label>
                            )}
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mt-3">
                        Vous pouvez ajouter vos photos maintenant ou nous les envoyer plus tard par email ou WhatsApp.
                      </p>
                    </div>

                    {error && (
                      <div className="bg-red-100 border-2 border-red-400 text-red-700 px-4 py-3 rounded-lg">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#2f6bfc] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#224671] transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        'Envoi en cours...'
                      ) : (
                        <>
                          Envoyer ma demande
                          <Send className="ml-2" size={20} />
                        </>
                      )}
                    </button>

                    <p className="text-sm text-gray-600 text-center">
                      * Champs obligatoires. Vos données sont sécurisées et ne seront jamais partagées.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#f3f3f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#224671] mb-6">
              Pourquoi faire un diagnostic avant ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center">
              <div className="bg-[#2f6bfc] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-[#224671] mb-3">
                Évaluation précise
              </h3>
              <p className="text-gray-700">
                Le chirurgien évalue votre densité donneuse, votre stade de calvitie et estime le nombre exact de greffons nécessaires.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center">
              <div className="bg-[#2f6bfc] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-[#224671] mb-3">
                Technique adaptée
              </h3>
              <p className="text-gray-700">
                Le médecin détermine si la FUE ou la DHI est la plus appropriée pour votre cas et vos objectifs esthétiques.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center">
              <div className="bg-[#2f6bfc] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-[#224671] mb-3">
                Devis transparent
              </h3>
              <p className="text-gray-700">
                Vous recevez un devis détaillé incluant tous les services, sans frais cachés, pour prendre votre décision en toute transparence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

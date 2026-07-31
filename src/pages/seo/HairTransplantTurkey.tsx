import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star, Phone } from 'lucide-react';

const HairTransplantTurkey = () => {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#2f6bfc] to-[#6EC1E4] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Hair Transplant Turkey - Best Clinic & Affordable Prices
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl opacity-90">
            Get natural hair transplant results in Turkey with FUE & DHI techniques. All-inclusive packages from €1,990 with English-speaking support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-[#2f6bfc] px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300"
            >
              Get Free Quote
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <a
              href="tel:+33188842222"
              className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-bold border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="mr-2" size={20} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#224671] mb-6">
              Why Choose Turkey for Hair Transplant?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turkey is the world's leading destination for hair restoration with over 500,000 procedures performed annually
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#224671] mb-4">Expert Surgeons</h3>
              <p className="text-gray-700 leading-relaxed">
                Turkish surgeons are internationally recognized specialists with 15+ years of experience and thousands of successful procedures.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#224671] mb-4">Affordable Prices</h3>
              <p className="text-gray-700 leading-relaxed">
                Save up to 70% compared to UK, US, or European prices while getting the same quality of care and results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#224671] mb-4">Latest Technology</h3>
              <p className="text-gray-700 leading-relaxed">
                State-of-the-art clinics equipped with cutting-edge FUE and DHI technology for optimal natural results.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#224671] mb-4">All-Inclusive Packages</h3>
              <p className="text-gray-700 leading-relaxed">
                Everything included: procedure, 5-star hotel, VIP transfers, translator, medications, and 12-month follow-up.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#224671] mb-4">English Support</h3>
              <p className="text-gray-700 leading-relaxed">
                Complete English-speaking assistance from consultation to post-operative care. No language barriers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#224671] mb-4">Medical Tourism Hub</h3>
              <p className="text-gray-700 leading-relaxed">
                Combine your treatment with a cultural experience in Istanbul, one of the world's most beautiful cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#224671] mb-6">
              Hair Transplant Turkey Cost - All-Inclusive Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. Payment plans available.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-100">
              <div className="bg-gradient-to-br from-[#2f6bfc] to-[#1e50d4] p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">FUE Hair Transplant</h3>
                <div className="text-5xl font-bold mb-4">€1,990</div>
                <p className="opacity-90">Or €199/month (10 installments)</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Up to 5,000 grafts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>5-star hotel (3 nights)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>VIP airport transfers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>English-speaking translator</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>PRP treatment included</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Post-op kit & medications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#2f6bfc] mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>12-month follow-up</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="block w-full bg-[#2f6bfc] text-white text-center py-4 rounded-xl font-bold hover:bg-[#224671] transition-all duration-300"
                >
                  Book FUE Package
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-[#6EC1E4]">
              <div className="bg-gradient-to-br from-[#6EC1E4] to-[#4da8cc] p-8 text-white">
                <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-bold mb-4">MOST POPULAR</div>
                <h3 className="text-3xl font-bold mb-2">DHI Hair Transplant</h3>
                <div className="text-5xl font-bold mb-4">€2,490</div>
                <p className="opacity-90">Or €249/month (10 installments)</p>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>DHI CHOI Pen technique</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Up to 4,000 grafts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>5-star luxury hotel (3 nights)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>VIP airport transfers</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>English-speaking translator</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>PRP treatment included</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>Premium post-op kit (3 months)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-[#6EC1E4] mr-3 flex-shrink-0 mt-1" size={20} />
                    <span>12-month follow-up & guarantee</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="block w-full bg-[#6EC1E4] text-white text-center py-4 rounded-xl font-bold hover:bg-[#4da8cc] transition-all duration-300"
                >
                  Book DHI Package
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#224671] mb-6">
              Hair Transplant Before After Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our patients. Natural and permanent hair restoration.
            </p>
          </div>
          <div className="text-center">
            <Link
              to="/greffe-cheveux/avant-apres"
              className="inline-flex items-center justify-center bg-[#2f6bfc] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#224671] transition-all duration-300"
            >
              View Before After Gallery
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#224671] to-[#2f6bfc] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Hair Restoration Journey Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Send 3 photos and receive your personalized treatment plan within 24 hours
          </p>
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center mr-4">
              <Star className="text-yellow-400 fill-yellow-400" size={20} />
              <Star className="text-yellow-400 fill-yellow-400" size={20} />
              <Star className="text-yellow-400 fill-yellow-400" size={20} />
              <Star className="text-yellow-400 fill-yellow-400" size={20} />
              <Star className="text-yellow-400 fill-yellow-400" size={20} />
            </div>
            <span className="font-bold">4.9/5 from 2,300+ verified reviews</span>
          </div>
          <Link
            to="/contact"
            className="inline-block bg-white text-[#2f6bfc] px-12 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl"
          >
            Get Free Consultation Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HairTransplantTurkey;

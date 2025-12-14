import Image from "next/image";
import ContactForm from "../components/ContactForm";
import QuoteSection from "../components/QuoteSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 font-sans selection:bg-rose-100 selection:text-rose-900">
      
      {/* 1. Modern Navbar (Glassmorphism effect) */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 bg-rose-600 rounded-full flex items-center justify-center text-white font-bold">C</span>
            <span className="font-bold text-xl tracking-tight text-gray-900">Cancer<span className="text-rose-600">Care</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-rose-600 transition-colors">About</a>
            <a href="#" className="hover:text-rose-600 transition-colors">Stories</a>
            <a href="#" className="hover:text-rose-600 transition-colors">Resources</a>
          </div>
          <a href="#contact" className="px-5 py-2 text-sm font-semibold text-white bg-rose-600 rounded-full hover:bg-rose-700 transition-all shadow-lg shadow-rose-200">
            Get Support
          </a>
        </div>
      </nav>

      <main className="flex-grow pt-24">
        
        {/* 2. Modern Hero Section */}
        <section className="relative w-full max-w-7xl mx-auto px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Typography */}
          <div className="flex flex-col gap-6 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 self-center lg:self-start bg-rose-100 border border-rose-200 text-rose-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
              Awareness Month
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1]">
              Hope is <br />
              <span className="bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                Stronger
              </span> than fear.
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We provide a community of support, real-time resources, and a helping hand for patients and families navigating the journey of cancer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-2">
              <a href="#contact" className="px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-transform hover:-translate-y-1 shadow-xl">
                Join the Fight
              </a>
              <button className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold hover:border-gray-400 transition-colors">
                Learn More
              </button>
            </div>

            {/* Social Proof / Stats */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-8 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-gray-900">10k+</p>
                <p className="text-sm text-gray-500">Supporters</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-500">Volunteers</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visuals */}
          <div className="relative z-0">
            {/* Abstract Background Blob */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -left-4 -z-10 w-[300px] h-[300px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1000&auto=format&fit=crop" 
                alt="Community Support" 
                className="w-full h-auto object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white/50 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    ✓
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Verified NGO</p>
                    <p className="text-xs text-gray-500">Trusted by thousands</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. API Quotes Section (Wrapped for spacing) */}
        <div className="my-12">
           <QuoteSection />
        </div>

        {/* 4. Contact Form Section */}
        <div className="w-full bg-white flex flex-col items-center py-20 px-4 relative overflow-hidden">
          {/* Decorative background element for form */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          <ContactForm />
        </div>

      </main>

      {/* 5. Simple Clean Footer */}
      <footer className="w-full py-8 text-center bg-white border-t border-gray-100">
        <p className="text-gray-500 text-sm">
          © 2024 CancerCare Initiative. Built with Next.js & Tailwind.
        </p>
      </footer>
    </div>
  );
}
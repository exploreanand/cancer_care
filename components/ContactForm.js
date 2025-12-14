'use client';

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will support you.");
  };

  return (
    <section id="contact" className="w-full max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-100 my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get Support</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input 
            type="text" 
            id="name" 
            required
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:outline-none"
            placeholder="Your Name"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            id="email" 
            required
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:outline-none"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea 
            id="message" 
            rows="4" 
            required
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:outline-none"
            placeholder="How can we help?"
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
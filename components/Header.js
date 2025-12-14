import Link from 'next/link';

export default function Header() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="h-8 w-8 bg-rose-600 rounded-full flex items-center justify-center text-white font-bold">C</span>
          <span className="font-bold text-xl tracking-tight text-gray-900">
            Cancer<span className="text-rose-600">Care</span>
          </span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <Link href="#" className="hover:text-rose-600 transition-colors">
            About
          </Link>
          <Link href="#" className="hover:text-rose-600 transition-colors">
            Stories
          </Link>
          <Link href="#" className="hover:text-rose-600 transition-colors">
            Resources
          </Link>
        </div>

        <Link 
          href="#contact" 
          className="px-5 py-2 text-sm font-semibold text-white bg-rose-600 rounded-full hover:bg-rose-700 transition-all shadow-lg shadow-rose-200"
        >
          Get Support
        </Link>
      </div>
    </nav>
  );
}
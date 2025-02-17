import Link from "next/link"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl text-white font-bold">
          HelperBuddy
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="#services" className="text-white hover:text-gray-600 transition-colors">
            Services
          </Link>
          <Link href="#testimonials" className="text-white hover:text-gray-600 transition-colors">
            Testimonials
          </Link>
          <Link href="#contact" className="text-white hover:text-gray-600 transition-colors">
            Contact
          </Link>
          <Link href="SIGNIN" className="text-white hover:text-gray-600 transition-colours">
            Log In?
          </Link>
        </div>
        <button className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}


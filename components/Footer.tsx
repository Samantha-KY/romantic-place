import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Romantic Place</h3>
            <p className="text-sm">Your cozy getaway and event destination</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li>
                <Link href="/" className="hover:text-gold-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-gold-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-gold-400">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#events" className="hover:text-gold-400">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#booking" className="hover:text-gold-400">
                  Booking
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-gold-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="text-sm">Phone: +123 456 789</p>
            <p className="text-sm">Email: contact@maisonduspassage.com</p>
            <p className="text-sm">Address: [Dummy Address, City, Country]</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 Romantic Place. All rights reserved.</p>
          <Link href="/privacy-policy" className="hover:text-gold-400">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

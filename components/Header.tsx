import Link from "next/link";
import Image from "next/image";
import logo from "../app/images/logo.png";
const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            <Image src={logo} alt="Romantic Place" width={80} height={32} />
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-800 hover:text-gold-600">
              Home
            </Link>
            <Link href="#about" className="text-gray-800 hover:text-gold-600">
              About
            </Link>
            <Link href="#gallery" className="text-gray-800 hover:text-gold-600">
              Gallery
            </Link>
            <Link href="#events" className="text-gray-800 hover:text-gold-600">
              Events
            </Link>
            <Link href="#booking" className="text-gray-800 hover:text-gold-600">
              Booking
            </Link>
            <Link href="#contact" className="text-gray-800 hover:text-gold-600">
              Contact
            </Link>
          </div>
          <div className="md:hidden">{/* Add a mobile menu button here */}</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

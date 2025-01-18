import Image from "next/image";
import Link from "next/link";
import pic1 from "./images/1pic.png";
import pic2 from "./images/2pic.png";
import pic3 from "./images/3pic.png";
import pic4 from "./images/4pic.png";
import pic5 from "./images/5pic.png";
import pic6 from "./images/6pic.png";
// import logo from "./images/logo.png";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <Image
          src={pic1}
          alt="Romantic Place"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="z-20">
          <h1 className="text-5xl font-bold mb-4">Romantic Place</h1>
          <p className="text-2xl mb-8">
            Your cozy getaway and event destination
          </p>
          <Link
            href="#booking"
            className="bg-gold-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gold-700 transition duration-300"
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            About Romantic Place
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Romantic Place is a charming property that offers the perfect
                balance of comfort, elegance, and functionality. Our house is
                ideal for both short stays and hosting memorable events.
              </p>
              <p className="mb-4">
                The property features two separate parts, each with its own
                master bedroom with an ensuite bathroom, a second bedroom, and
                an additional bathroom. Both sections boast fully equipped
                kitchens and cozy living rooms, ensuring a comfortable stay for
                all our guests.
              </p>
              <p>
                Our crown jewel is the large shared garden, perfect for hosting
                a variety of events from intimate gatherings to grand
                celebrations like weddings and birthday parties.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src={pic2}
                alt="House exterior"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <Image
                src={pic3}
                alt="Garden"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <Image
                src={pic4}
                alt="Living room"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <Image
                src={pic6}
                alt="Kitchen"
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <Image
                key={i}
                src={pic6}
                alt={`Gallery image ${i + 1}`}
                width={300}
                height={200}
                className="rounded-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Host Your Event
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                Our spacious garden is the perfect venue for your special
                events. From intimate gatherings to grand celebrations, Maison
                du Passage provides a beautiful and versatile backdrop for your
                memorable moments.
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Weddings</li>
                <li>Birthday parties</li>
                <li>Corporate events</li>
                <li>Family reunions</li>
              </ul>
              <blockquote className="italic text-gray-600 border-l-4 border-gold-600 pl-4">
                `A magical venue for our wedding! The garden was absolutely
                stunning, and the house provided perfect accommodation for our
                families.` - Sarah & John
              </blockquote>
            </div>
            <Image
              src={pic5}
              alt="Garden event setup"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Book Your Stay
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="mb-4 text-center">
              Ready to experience the charm of Romantic Place? Check our
              availability and book your stay today. For event inquiries, please
              use the contact form below.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                href="#"
                className="bg-gold-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gold-700 transition duration-300"
              >
                Check Availability
              </Link>
              <Link
                href="#contact"
                className="bg-gray-800 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-900 transition duration-300"
              >
                Event Inquiry
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-gold-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-gold-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Location</h3>
              <p className="mb-4">[Dummy Address, City, Country]</p>
              <div className="h-64 bg-gray-300 rounded-lg">
                {/* Add Google Map placeholder here */}
                <p className="text-center pt-24">Google Map Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Guest Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic mb-4">
                  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet.`
                </p>
                <p className="font-semibold">- Guest Name {i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

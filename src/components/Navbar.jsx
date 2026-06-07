import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const socialLinks = [
  { href: "https://twitter.com", label: "Twitter", Icon: FaTwitter },
  { href: "https://facebook.com", label: "Facebook", Icon: FaFacebookF },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: FaLinkedinIn },
  { href: "https://youtube.com", label: "YouTube", Icon: FaYoutube },
  { href: "https://instagram.com", label: "Instagram", Icon: FaInstagram },
];

function Navbar() {
  const [showServices, setShowServices] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLink =
    "text-slate-700 hover:text-brand-600 font-medium transition text-[15px]";

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* TOP BAR */}
      <div className="bg-black text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

          <div className="flex items-center gap-3 text-gray-400">
            {socialLinks.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                <Icon className="hover:text-white transition" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5 text-gray-300">
            <a href="mailto:info@teachkaam.com" className="flex items-center gap-2">
              <MdEmail />
              <span>Email</span>
            </a>
            <a href="tel:+923001234567" className="flex items-center gap-2">
              <MdPhone />
              <span>Call</span>
            </a>
          </div>

        </div>
      </div>

      {/* MAIN NAV */}
      <nav className="bg-white shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">

          {/* Logo */}
          <Logo variant="dark" />

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-7">

            <Link to="/" className={navLink}>Home</Link>
            <Link to="/about" className={navLink}>Why TechKaam</Link>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
            >
              <Link to="/services" className={navLink}>
                Services
              </Link>

              {showServices && (
                <div className="absolute top-full left-0 w-96 bg-white border rounded-lg shadow-xl p-5 z-[9999]">
                  <ul className="space-y-3 text-sm text-slate-700">

                    <li><Link to="/pos-system">Cloud POS System</Link></li>
                    <li><Link to="/fbr-integration">FBR Integration</Link></li>
                    <li><Link to="/pra-integration">PRA Integration</Link></li>
                    <li><Link to="/tax-integration">Tax Integration</Link></li>
                    <li><Link to="/industrial-erp">Industrial ERP AI Based</Link></li>
                    <li><Link to="/scada">SCADA Solutions</Link></li>
                    <li><Link to="/web-development">Web Development</Link></li>
                    <li><Link to="/app-development">App Development</Link></li>
                    <li><Link to="/whatsapp-api">WhatsApp API Integration</Link></li>
                    <li><Link to="/email-api">Email API Integration</Link></li>

                  </ul>
                </div>
              )}
            </div>

            <Link to="/portfolio" className={navLink}>Portfolio</Link>
            <Link to="/blog" className={navLink}>Blogs</Link>
            <Link to="/demo" className={navLink}>Demo</Link>
            <Link to="/contact" className={navLink}>Contact Us</Link>

            <Link
              to="/try-now"
              className="bg-brand-700 text-white px-5 py-2 rounded font-semibold hover:bg-white hover:text-brand-700 border-2 border-brand-700 transition"
            >
              Free Consultation
            </Link>

          </div>

          {/* MOBILE ICON */}
          <div
            className="lg:hidden text-3xl cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <HiX /> : <HiOutlineMenu />}
          </div>

        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t px-6 py-5 flex flex-col gap-4 text-slate-700 font-medium">

            <Link onClick={() => setMobileOpen(false)} to="/">Home</Link>
            <Link onClick={() => setMobileOpen(false)} to="/about">Why TeachKaam</Link>
            <Link onClick={() => setMobileOpen(false)} to="/services">Services</Link>
            <Link onClick={() => setMobileOpen(false)} to="/portfolio">Portfolio</Link>
            <Link onClick={() => setMobileOpen(false)} to="/blog">Blogs</Link>
            <Link onClick={() => setMobileOpen(false)} to="/demo">Demo</Link>
            <Link onClick={() => setMobileOpen(false)} to="/contact">Contact Us</Link>

            <Link
              to="/try-now"
              onClick={() => setMobileOpen(false)}
              className="bg-brand-700 text-white px-4 py-2 rounded text-center"
            >
              Free Consultation
            </Link>

          </div>
        )}

      </nav>
    </header>
  );
}

export default Navbar;
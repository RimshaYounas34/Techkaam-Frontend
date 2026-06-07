import { Link } from "react-router-dom";
import Logo from "./Logo";

function Footer() {
  return (
    <footer className="bg-brand-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="mb-4">
              <Logo variant="light" compact />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Smart software solutions for businesses across Pakistan — ERP,
              POS, FBR integration, web and mobile apps.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/about" className="hover:text-white">
                  Why TechKaam
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/demo" className="hover:text-white">
                  Demo
                </Link>
              </li>
              <li>
                <Link to="/try-now" className="hover:text-white">
                  Try Now
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">POS Solutions</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/pos-system" className="hover:text-white">
                  Cloud POS System
                </Link>
              </li>
              <li>
                <Link to="/fbr-integration" className="hover:text-white">
                  FBR Integration
                </Link>
              </li>
              <li>
                <Link to="/pra-integration" className="hover:text-white">
                  PRA Integration
                </Link>
              </li>
              <li>
                <Link to="/tax-integration" className="hover:text-white">
                  Tax Integration
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>info@teachkaam.com</li>
              <li>+92 3111734194</li>
              <li>Faisalabad, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
          © 2026 TeachKaam. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

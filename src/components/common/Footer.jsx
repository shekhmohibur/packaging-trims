import {
  Mail,
  MapPin,
  Globe,
  FileText,
} from "lucide-react";
import { company, solutions } from "../../data/footer/footerData";

function Footer() {
  return (
    <footer className="bg-[#F8F6F2]">
      <div className="mx-auto max-w-365 px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="font-serif text-3xl font-semibold text-[#173B3D]">
              Soil of Our Faith
            </h2>

            <p className="mt-6 max-w-xs leading-8 text-gray-600">
              Sustainable excellence for industrial packaging. Rooted in
              integrity.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#173B3D]">
              Solutions
            </h3>

            <ul className="space-y-4">
              {solutions?.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 transition hover:text-[#173B3D]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#173B3D]">
              Company
            </h3>

            <ul className="space-y-4">
              {company?.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-600 transition hover:text-[#173B3D]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-[#173B3D]">
              Contact
            </h3>

            <div className="space-y-5 text-gray-600">
              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>hello@soiloffaith.eco</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>Amsterdam, Netherlands</span>
              </div>

              <div className="flex gap-5 pt-2">
                <a href="#">
                  <Globe
                    size={20}
                    className="hover:text-[#173B3D]"
                  />
                </a>

                <a href="#">
                  <FileText
                    size={20}
                    className="hover:text-[#173B3D]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-8 text-sm text-gray-600 md:flex-row">
          <p>© 2024 Soil of Our Faith. Sustainable Excellence.</p>

          <div className="flex gap-8">
            <a href="#" className="hover:text-[#173B3D]">
              Material Guide
            </a>

            <a href="#" className="hover:text-[#173B3D]">
              Bulk Orders
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
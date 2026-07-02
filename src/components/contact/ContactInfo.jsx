import {
  MapPin,
  Phone,
  Mail,
  Clock3,
} from "lucide-react";

import contactData from "../../data/contact/contactData";

const items = [
  {
    icon: MapPin,
    title: "Factory Address",
    value: contactData.address,
  },
  {
    icon: Phone,
    title: "Phone",
    value: contactData.phone,
  },
  {
    icon: Mail,
    title: "Email",
    value: contactData.email,
  },
  {
    icon: Clock3,
    title: "Working Hours",
    value: contactData.hours,
  },
];

export default function ContactInfo() {
  return (
    <div>

      <span className="inline-flex rounded-full border border-[#E56B2D] px-4 py-1 text-[10px] uppercase tracking-[0.25em] text-[#E56B2D]">
        Get In Touch
      </span>

      <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-black uppercase text-[#F7F2E8] leading-tight">
        {contactData.title}
      </h2>

      <div className="mt-10">

        {items.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="flex gap-5 py-7 border-b border-white/15"
            >

              <Icon
                size={22}
                className="text-[#E56B2D] mt-1"
              />

              <div>

                <p className="uppercase text-[11px] tracking-[0.18em] text-[#E56B2D]">
                  {item.title}
                </p>

                <p className="mt-2 text-[#F7F2E8]">
                  {item.value}
                </p>

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}
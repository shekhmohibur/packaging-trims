import {
  Package,
  Boxes,
  Printer,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Carton",
    text: "3/5 ply export boxes",
  },
  {
    icon: Boxes,
    title: "Poly Film",
    text: "PP • PE • LDPE • HDPE",
  },
  {
    icon: Printer,
    title: "Printing",
    text: "Logo & buyer branding",
  },
  {
    icon: Truck,
    title: "On-Time",
    text: "Factory-direct delivery",
  },
];

const HeroFeatures = () => {
  return (
<div className="mt-16 rounded-xl border border-white/15 overflow-hidden">
  <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4">
    {features.map((item, index) => {
      const Icon = item.icon;

      return (
        <div
          key={index}
          className="
            group
            relative
            overflow-hidden
            p-7
            border border-white/15
            -mt-px -ml-px
            cursor-pointer
            transition-all
            duration-300
          "
        >
          {/* Glass effect */}
          <div
            className="
              absolute inset-0
              opacity-0
              transition-all duration-300
              group-hover:opacity-100
              bg-white/10
              backdrop-blur-sm
            "
          />

          {/* Light reflection */}
          <div
            className="
              absolute
              -top-12
              -left-12
              h-32
              w-32
              rounded-full
              bg-white/20
              blur-3xl
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
          />

          <div className="relative z-10">
            <Icon
              size={20}
              className="text-[#E86C2D] transition-colors duration-300 group-hover:text-[#FF8A4C]"
            />

            <h3 className="mt-4 uppercase font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-2 text-sm text-gray-400 transition-colors duration-300 group-hover:text-gray-200">
              {item.text}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>
  );
};

export default HeroFeatures;
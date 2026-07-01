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
        <div className="mt-16 border border-white/15">

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

                {features.map((item, index) => {

                    const Icon = item.icon;

                    return (

                        <div
                            key={index}
                            className="border-b md:border-b xl:border-b-0 xl:border-r last:border-r-0 border-white/15 p-7"
                        >

                            <Icon
                                size={20}
                                className="text-[#E86C2D]"
                            />

                            <h3 className="mt-4 uppercase font-bold">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-sm text-gray-400">
                                {item.text}
                            </p>

                        </div>

                    );

                })}

            </div>

        </div>
    );
};

export default HeroFeatures;
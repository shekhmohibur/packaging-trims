import FeatureItem from "../../components/WhyChooseUs/FeatureItem";
import features from "../../data/hero/home/features";

function WhyChooseUs() {
  return (
    <section className="bg-[#F8F6F2] py-24">
      <div className="mx-auto grid max-w-365 gap-16 px-6 lg:grid-cols-2">
        {/* Left */}
        <div>
          <h2 className="mb-10 font-serif text-4xl font-semibold text-[#173B3D]">
            Why Choose Us
          </h2>

          <div className="space-y-8">
            {features?.map((item) => (
              <FeatureItem key={item.id} {...item} />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="rounded-xl bg-white p-8 shadow-sm">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            Global Certifications
          </p>

          <div className="grid grid-cols-2 gap-4">
            {[
              "FSC Certified",
              "GRS Verified",
              "B Corp Pending",
              "OK Compost",
            ].map((cert) => (
              <div
                key={cert}
                className="rounded-md bg-gray-100 py-4 text-center text-xs font-semibold uppercase tracking-wide text-gray-700"
              >
                {cert}
              </div>
            ))}
          </div>

          <div className="mt-10 border-t pt-8">
            <p className="italic leading-7 text-gray-600">
              "Soil of Our Faith has transformed how we think about sustainable
              materials. Their attention to material detail is unmatched in the
              industry."
            </p>

            <p className="mt-6 font-semibold text-[#173B3D]">
              — Director of Sustainability, Global Apparel Corp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
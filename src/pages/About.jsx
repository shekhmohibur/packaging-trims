const About = () => {
  return (
    <section className="min-h-screen bg-[#F7F2E8] py-20 lg:py-28">
      <div className="mx-auto max-w-360 px-5 lg:px-8">
        <div className="max-w-3xl rounded-[2rem] border border-[#E7DDCF] bg-white/80 p-8 shadow-sm backdrop-blur md:p-10 lg:p-12">
          <span className="inline-flex rounded-full border border-[#E56B2D] px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E56B2D]">
            About Soil Packaging & Trims
          </span>

          <h1 className="mt-6 text-3xl font-black uppercase leading-tight text-[#17352B] md:text-4xl lg:text-5xl">
            Precision packaging for the garments export chain.
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#4B5B52]">
            We produce export-grade cartons, poly bags, and film from our own
            factory setup, supporting buyers, sourcing teams, and garment
            exporters with reliable lead times and consistent quality.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#E7DDCF] bg-[#F7F2E8] p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E56B2D]">
                Built For Scale
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#4B5B52]">
                From corrugated boxes to film-based packaging, every order is
                managed for volume, consistency, and buyer compliance.
              </p>
            </div>

            <div className="rounded-2xl border border-[#E7DDCF] bg-[#F7F2E8] p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E56B2D]">
                Quality First
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#4B5B52]">
                Our team aligns each specification to the buyer’s requirement,
                from material choice to print and finishing details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

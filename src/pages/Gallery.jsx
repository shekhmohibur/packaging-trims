const Gallery = () => {
  return (
    <section className="min-h-screen bg-[#F7F2E8] py-20 lg:py-28">
      <div className="mx-auto max-w-360 px-5 lg:px-8">
        <div className="rounded-[2rem] border border-[#E7DDCF] bg-white/80 p-8 shadow-sm backdrop-blur md:p-10 lg:p-12">
          <span className="inline-flex rounded-full border border-[#E56B2D] px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E56B2D]">
            Gallery
          </span>

          <h1 className="mt-6 text-3xl font-black uppercase leading-tight text-[#17352B] md:text-4xl lg:text-5xl">
            Packaging in progress and ready for export.
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#4B5B52]">
            Our production floor and finished packaging lines reflect a
            structured workflow designed for export-ready consistency.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              [
                "Production Floor",
                "Carton and film operations running side by side.",
              ],
              [
                "Finished Goods",
                "Packed consignments prepared for dispatch and shipment.",
              ],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-2xl border border-[#E7DDCF] bg-[#F7F2E8] p-6"
              >
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E56B2D]">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#4B5B52]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

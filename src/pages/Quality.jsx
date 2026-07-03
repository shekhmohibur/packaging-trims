const Quality = () => {
  return (
    <section className="min-h-screen bg-[#F7F2E8] py-20 lg:py-28">
      <div className="mx-auto max-w-360 px-5 lg:px-8">
        <div className="rounded-[2rem] border border-[#E7DDCF] bg-white/80 p-8 shadow-sm backdrop-blur md:p-10 lg:p-12">
          <span className="inline-flex rounded-full border border-[#E56B2D] px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E56B2D]">
            Quality Assurance
          </span>

          <h1 className="mt-6 text-3xl font-black uppercase leading-tight text-[#17352B] md:text-4xl lg:text-5xl">
            Consistent quality from raw material to dispatch.
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#4B5B52]">
            We maintain strict control over specifications, finishing, and
            delivery standards so every order is ready for export and buyer
            review.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              [
                "Material Check",
                "Every roll, sheet, and carton is verified against the requirement sheet.",
              ],
              [
                "Printing Control",
                "Colour, alignment, and print quality are checked before packing.",
              ],
              [
                "Dispatch Ready",
                "Final checks confirm quantity, labeling, and on-time shipment readiness.",
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

export default Quality;

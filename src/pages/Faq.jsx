const Faq = () => {
  return (
    <section className="min-h-screen bg-[#F7F2E8] py-20 lg:py-28">
      <div className="mx-auto max-w-360 px-5 lg:px-8">
        <div className="rounded-[2rem] border border-[#E7DDCF] bg-white/80 p-8 shadow-sm backdrop-blur md:p-10 lg:p-12">
          <span className="inline-flex rounded-full border border-[#E56B2D] px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E56B2D]">
            Frequently Asked Questions
          </span>

          <h1 className="mt-6 text-3xl font-black uppercase leading-tight text-[#17352B] md:text-4xl lg:text-5xl">
            Answers for buyers, sourcing teams, and factory planners.
          </h1>

          <div className="mt-10 space-y-4">
            {[
              [
                "What products do you make?",
                "We manufacture corrugated cartons, poly bags, and film packaging for export and local supply chains.",
              ],
              [
                "Can you match buyer specifications?",
                "Yes. We work from buyer sheets, size details, printing requirements, and material specifications.",
              ],
              [
                "Do you support large volumes?",
                "Yes. Our workflow is structured for ongoing production and repeat orders.",
              ],
            ].map(([question, answer]) => (
              <div
                key={question}
                className="rounded-2xl border border-[#E7DDCF] bg-[#F7F2E8] p-6"
              >
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#E56B2D]">
                  {question}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#4B5B52]">
                  {answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

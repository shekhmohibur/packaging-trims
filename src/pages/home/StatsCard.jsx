const stats = [
  {
    value: "2",
    title: "Production Lines",
    text: "Carton & Poly",
  },
  {
    value: "4",
    title: "Poly Grades",
    text: "PP • PE • LDPE • HDPE",
  },
  {
    value: "100%",
    title: "Orders Matched",
    text: "To Buyer Spec Sheet",
  },
  {
    value: "24/7",
    title: "Factory Operation",
    text: "For Export Deadlines",
  },
];

const StatsCard = () => {
  return (
    <div className="bg-[#0F2D25] text-white w-full max-w-xl shadow-2xl">

      <div className="grid grid-cols-2">

        {stats.map((item, index) => (

          <div
            key={index}
            className="border border-white/10 p-8"
          >
            <div className="border-l-2 border-[#E56B2D] pl-4">

              <h3 className="text-5xl font-black">
                {item.value}
              </h3>

              <p className="mt-3 uppercase text-[11px] tracking-[0.18em] text-gray-300">
                {item.title}
              </p>

              <p className="mt-2 text-xs text-gray-400 leading-6 uppercase">
                {item.text}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default StatsCard;
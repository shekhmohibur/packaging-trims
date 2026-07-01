import logo from "../../assets/sptlLogo.png";
export default function Mission() {
  return (
    <section className="bg-[#F8F6F2] py-24">
      <div className="mx-auto max-w-365 px-6 text-center">
        {/* Logo */}
        <img
          src={logo}
          alt="Soil of Our Faith"
          className="mx-auto mb-10 w-44"
        />

        {/* Heading */}
        <h2 className="mb-8 font-serif text-5xl font-semibold text-[#153A4A]">
          Our Mission
        </h2>

        {/* Paragraph */}
        <p className="mx-auto max-w-365 text-xl leading-10 text-[#333333]">
          We believe that the future of commerce lies in a return to the earth.
          Our mission is to bridge the gap between high-performance industrial
          standards and regenerative environmental stewardship. By sourcing only
          the finest biodegradable and recycled materials, we empower brands to
          tell a story of integrity through every fiber of their packaging.
        </p>
      </div>
    </section>
  );
}

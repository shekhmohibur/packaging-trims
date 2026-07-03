import { useParams, Link } from "react-router";

const ProductPage = () => {
  const { slug } = useParams();

  return (
    <section className="min-h-screen bg-[#F7F2E8] py-20 lg:py-28">
      <div className="mx-auto max-w-360 px-5 lg:px-8">
        <div className="rounded-[2rem] border border-[#E7DDCF] bg-white/80 p-8 shadow-sm backdrop-blur md:p-10 lg:p-12">
          <span className="inline-flex rounded-full border border-[#E56B2D] px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E56B2D]">
            Product Detail
          </span>

          <h1 className="mt-6 text-3xl font-black uppercase leading-tight text-[#17352B] md:text-4xl lg:text-5xl">
            {slug?.replace(/-/g, " ") || "Packaging product"}
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#4B5B52]">
            This product page is ready for your detailed specifications, image
            gallery, and quotation form. It’s currently using the same light
            editorial style as the rest of the site.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-[#E56B2D] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#d45f24]"
          >
            Request a quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;

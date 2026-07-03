import ContactInfo from "../components/contact/ContactInfo";
import QuoteForm from "../components/contact/QuoteForm";

const Contact = () => {
  return (
    <section className="min-h-screen bg-[#F7F2E8] py-20 lg:py-28">
      <div className="mx-auto max-w-360 px-5 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="inline-flex rounded-full border border-[#E56B2D] px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E56B2D]">
            Contact Us
          </span>
          <h1 className="mt-6 text-3xl font-black uppercase leading-tight text-[#17352B] md:text-4xl lg:text-5xl">
            Let’s discuss your next packaging requirement.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[#4B5B52]">
            Share your product, quantity, printing needs, and delivery timeline.
            Our team will respond with the right guidance and quotation.
          </p>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-[#E7DDCF] bg-white/80 p-6 shadow-sm backdrop-blur md:p-8">
            <ContactInfo />
          </div>

          <QuoteForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;

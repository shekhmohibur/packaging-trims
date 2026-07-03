import ContactInfo from "../../components/contact/ContactInfo";
import QuoteForm from "../../components/contact/QuoteForm";

const ContactSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-[#E7DDCF] bg-[#F7F2E8] py-20 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(229,107,45,0.10),transparent_45%)]" />
      <div className="relative mx-auto max-w-360 px-5 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <ContactInfo />

          <QuoteForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

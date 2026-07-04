import ContactInfo from "../../components/contact/ContactInfo";
import QuoteForm from "../../components/contact/QuoteForm";

const ContactSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7efde] py-20 lg:py-28">
      <div className="absolute inset-0 " />
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

import ContactInfo from "../../components/contact/ContactInfo";
import QuoteForm from "../../components/contact/QuoteForm";

const ContactSection = () => {
  return (
    <section className="bg-[#0F2D25] py-20 lg:py-28">
      <div className="max-w-360 mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ContactInfo />

          <QuoteForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

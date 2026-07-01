import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import contactData from "../../data/contact/contactData";

export default function QuoteForm() {

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {

    console.log(data);

    Swal.fire({
      icon: "success",
      title: "Quote Request Sent",
      text: "We'll get back to you shortly.",
      confirmButtonColor: "#E56B2D",
    });

    reset();
  };

  return (

    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#F7F2E8] p-8 lg:p-10"
    >

      <div className="grid md:grid-cols-2 gap-5">

        <Input
          label="Company Name"
          register={register}
          name="company"
        />

        <Input
          label="Contact Person"
          register={register}
          name="person"
        />

        <Input
          label="Email"
          type="email"
          register={register}
          name="email"
        />

        <Input
          label="Phone / WhatsApp"
          register={register}
          name="phone"
        />

        <div>

          <Label>Product Needed</Label>

          <select
            {...register("product")}
            className="input"
          >

            {contactData.products.map(product => (

              <option
                key={product}
              >
                {product}
              </option>

            ))}

          </select>

        </div>

        <Input
          label="Estimated Quantity"
          placeholder="e.g. 50,000 pcs / month"
          register={register}
          name="quantity"
        />

      </div>

      <div className="mt-5">

        <Label>Project Details</Label>

        <textarea
          rows={5}
          {...register("details")}
          className="input resize-none"
        />

      </div>

      <button
        className="mt-6 w-full bg-[#E56B2D] hover:bg-[#d85d20] text-white py-4 uppercase tracking-[0.15em] transition"
      >
        Submit Quote Request
      </button>

    </form>

  );

}

function Label({ children }) {

  return (
    <label className="block mb-2 uppercase text-[11px] tracking-[0.18em] text-[#666]">
      {children}
    </label>
  );

}

function Input({
  label,
  register,
  name,
  type = "text",
  placeholder = "",
}) {

  return (

    <div>

      <Label>{label}</Label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="input"
      />

    </div>

  );

}
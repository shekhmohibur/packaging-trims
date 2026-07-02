import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import contactData from "../../data/contact/contactData";

export default function QuoteForm() {
  const { register, handleSubmit, reset } = useForm();

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
      className="bg-[#F7F2E8] rounded-2xl border border-[#E7DDCF] p-6 md:p-8 lg:p-10 shadow-sm"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Company Name"
          name="company"
          register={register}
          placeholder="Enter your company name"
        />

        <Input
          label="Contact Person"
          name="person"
          register={register}
          placeholder="Enter contact person name"
        />

        <Input
          label="Email Address"
          type="email"
          name="email"
          register={register}
          placeholder="example@company.com"
        />

        <Input
          label="Phone / WhatsApp"
          name="phone"
          register={register}
          placeholder="+880 1XXXXXXXXX"
        />

        <div>
          <Label>Product Needed</Label>

          <select
            {...register("product")}
            defaultValue=""
            className="w-full rounded-lg border border-[#D9D0C5] bg-white px-4 py-3 text-[#17352B] outline-none transition-all duration-300 focus:border-[#E56B2D] focus:ring-2 focus:ring-[#E56B2D]/20"
          >
            <option value="" disabled>
              Select a product
            </option>

            {contactData.products.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
        </div>

        <Input
          label="Estimated Quantity"
          name="quantity"
          register={register}
          placeholder="e.g. 50,000 pcs / month"
        />
      </div>

      {/* Full Width */}

      <div className="mt-6">
        <Label>Project Details</Label>

        <textarea
          rows={6}
          {...register("details")}
          placeholder="Tell us about your packaging requirements, dimensions, printing, material, delivery schedule, or any other specifications..."
          className="w-full rounded-lg border border-[#D9D0C5] bg-white px-4 py-3 text-[#17352B] placeholder:text-gray-400 resize-none outline-none transition-all duration-300 focus:border-[#E56B2D] focus:ring-2 focus:ring-[#E56B2D]/20"
        />
      </div>

      <button
        type="submit"
        className="mt-8 w-full rounded-lg bg-[#E56B2D] py-4 font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#d45f24] hover:shadow-lg cursor-pointer"
      >
        Submit Quote Request
      </button>
    </form>
  );
}

function Label({ children }) {
  return (
    <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.18em] text-[#666]">
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
        className="w-full rounded-lg border border-[#D9D0C5] bg-white px-4 py-3 text-[#17352B] placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-[#E56B2D] focus:ring-2 focus:ring-[#E56B2D]/20"
      />
    </div>
  );
}
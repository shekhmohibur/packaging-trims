import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import contactData from "../../data/contact/contactData";

const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;

export default function QuoteForm() {
  const { register, handleSubmit, reset } = useForm();
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (data) => {
    setIsSending(true);

    const payload = {
      company_name: data.company || "N/A",
      contact_person: data.person || "N/A",
      email: data.email || "N/A",
      phone: data.phone || "N/A",
      product: data.product || "N/A",
      quantity: data.quantity || "N/A",
      details: data.details || "N/A",
    };

    if (!apiEndpoint) {
      Swal.fire({
        icon: "error",
        title: "Configuration Error",
        text: "Email service is not configured. Please try again later.",
        confirmButtonColor: "#E56B2D",
      });
      setIsSending(false);
      return;
    }

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      await response.json();

      Swal.fire({
        icon: "success",
        title: "Inquiry Sent",
        text: "Thanks! Your request has been sent to the team.",
        confirmButtonColor: "#E56B2D",
      });

      reset();
    } catch (error) {
      console.error("Error sending quote:", error);
      Swal.fire({
        icon: "error",
        title: "Couldn't Send Inquiry",
        text: "Please try again or email us directly at info@soilpackaging.com.",
        confirmButtonColor: "#E56B2D",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-[#E7DDCF] bg-white p-6 shadow-sm md:p-8 lg:p-10"
    >
      <div className="grid gap-6 md:grid-cols-2">
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

      <div className="mt-6">
        <Label>Project Details</Label>

        <textarea
          rows={6}
          {...register("details")}
          placeholder="Tell us about your packaging requirements, dimensions, printing, material, delivery schedule, or any other specifications..."
          className="w-full resize-none rounded-lg border border-[#D9D0C5] bg-white px-4 py-3 text-[#17352B] placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-[#E56B2D] focus:ring-2 focus:ring-[#E56B2D]/20"
        />
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="mt-8 w-full rounded-lg bg-[#E56B2D] py-4 font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#d45f24] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSending ? "Sending..." : "Submit Quote Request"}
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

function Input({ label, register, name, type = "text", placeholder = "" }) {
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

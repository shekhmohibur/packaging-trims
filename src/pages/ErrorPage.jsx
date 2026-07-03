import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#F7F2E8] px-5 py-20">
      <div className="max-w-2xl rounded-[2rem] border border-[#E7DDCF] bg-white/80 p-8 text-center shadow-sm backdrop-blur md:p-10">
        <span className="inline-flex rounded-full border border-[#E56B2D] px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E56B2D]">
          Page Not Found
        </span>

        <h1 className="mt-6 text-4xl font-black uppercase leading-tight text-[#17352B] md:text-5xl">
          The page you’re looking for is unavailable.
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#4B5B52]">
          The link may be outdated or the page may have moved. Return to the
          home page to continue browsing the site.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-[#E56B2D] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#d45f24]"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;

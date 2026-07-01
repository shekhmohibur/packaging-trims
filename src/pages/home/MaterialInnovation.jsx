import MaterialCard from "../../components/common/MaterialInnovation/MaterialCard";
import materials from "../../data/hero/home/materials";

function MaterialInnovation() {
  return (
    <section className="bg-[#ffffff] py-20">
      <div className="mx-auto max-w-365 px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-5xl font-semibold text-[#163B3A]">
              Material Innovation
            </h2>

            <p className="mt-2 text-gray-600">
              Defining the new standard of premium packaging.
            </p>
          </div>

          <button className="text-sm font-semibold uppercase tracking-widest text-[#163B3A] hover:underline">
            View Full Catalog
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {materials?.slice(0, 2).map((item) => (
            <MaterialCard key={item.id} {...item} />
          ))}

          <div className="md:col-span-2">
            <MaterialCard {...materials[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MaterialInnovation;
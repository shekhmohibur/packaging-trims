function MaterialCard({ image, title, description, badge }) {
  return (
    <article>
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="h-[380px] w-full object-cover transition duration-300 hover:scale-105"
        />

        <span className="absolute left-5 top-5 rounded-full bg-lime-200 px-4 py-1 text-xs font-semibold text-green-800">
          {badge}
        </span>
      </div>

      <h3 className="mt-5 font-serif text-3xl font-semibold text-[#163B3A]">
        {title}
      </h3>

      <p className="mt-2 text-gray-600">{description}</p>
    </article>
  );
}

export default MaterialCard;
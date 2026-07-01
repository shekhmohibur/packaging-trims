function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 flex h-9 w-9 items-center justify-center rounded-full bg-lime-100 text-lg">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-[#173B3D]">{title}</h3>

        <p className="mt-1 text-sm leading-6 text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureItem;
const TechnologiesCard = ({ technologies, stack, onAddToStack }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {technologies.map((tech) => {
        const added = stack.some((item) => item.id === tech.id);

        return (
          <div
            key={tech.id}
            className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col justify-between hover:shadow-md transition"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-lg p-2 flex items-center justify-center">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs font-semibold bg-pink-50 text-pink-600 px-3 py-1 rounded-full">
                  {tech.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#0B1220] mt-4">
                {tech.name}
              </h3>
              <p className="text-gray-500 text-sm mt-2 line-clamp-3">
                {tech.description}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex gap-2">
                  <span className="bg-gray-100 px-2 py-1 rounded-md">
                    {tech.category}
                  </span>
                  <span className="bg-gray-100 px-2 py-1 rounded-md">
                    {tech.difficulty}
                  </span>
                </div>
                <span className="font-semibold text-gray-700">
                  ⭐ {tech.rating}
                </span>
              </div>

              <button
                type="button"
                onClick={() => onAddToStack(tech)}
                disabled={added}
                className={`w-full mt-4 py-2.5 rounded-lg text-sm font-semibold transition ${
                  added
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
                    : "bg-[#0B1220] text-white hover:bg-slate-800 cursor-pointer"
                }`}
              >
                {added ? "✓ Added to Stack" : "Add to Stack"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TechnologiesCard;

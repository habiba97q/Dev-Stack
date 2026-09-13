const YourStack = ({ stack, onRemove, onRemoveAll }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 sticky top-24">
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <div>
          <h2 className="text-lg font-bold text-[#0B1220]">Your Stack</h2>
          <p className="text-xs text-gray-500 mt-0.5">
            {stack.length}{" "}
            {stack.length === 1 ? "Technology" : "Technologies"} Selected
          </p>
        </div>

        {stack.length > 0 && (
          <button
            type="button"
            onClick={onRemoveAll}
            className="text-xs font-semibold text-red-500 hover:text-red-700"
          >
            Remove All
          </button>
        )}
      </div>

      {stack.length === 0 ? (
        <div className="mt-4 p-8 bg-gray-50 rounded-lg text-center border border-dashed border-gray-200">
          <p className="text-sm font-medium text-gray-600">Your stack is empty.</p>
          <p className="text-xs text-gray-400 mt-1">
            Add technologies to build your stack.
          </p>
        </div>
      ) : (
        <div className="mt-4 space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between p-2.5 border border-gray-100 rounded-lg bg-white hover:border-gray-200 transition"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 bg-gray-50 border border-gray-100 rounded-md p-1.5 flex items-center justify-center shrink-0">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 truncate">
                    {tech.name}
                  </h4>
                  <p className="text-xs text-gray-400">{tech.category}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onRemove(tech.id)}
                className="text-gray-400 hover:text-red-500 p-1 text-sm shrink-0"
                aria-label={`Remove ${tech.name}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourStack;

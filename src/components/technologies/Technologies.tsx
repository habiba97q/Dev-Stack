import TechnologiesCard from "./TechnologiesCard";
import YourStack from "./YourStack";

const Technologies = ({
  technologies,
  loading,
  stack,
  onAddToStack,
  onRemoveFromStack,
  onRemoveAll,
}) => {
  return (
    <section id="technologies" className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220]">
          Explore the <span className="text-brand-gradient">Technologies</span>
        </h2>
        <p className="text-[#64748B] text-sm mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-10 h-10 border-4 border-gray-200 border-t-pink-600 rounded-full animate-spin"></div>
          <p className="text-gray-500 text-sm mt-3">Loading technologies...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          <div className="lg:col-span-3">
            <TechnologiesCard
              technologies={technologies}
              stack={stack}
              onAddToStack={onAddToStack}
            />
          </div>

          <div className="lg:col-span-1">
            <YourStack
              stack={stack}
              onRemove={onRemoveFromStack}
              onRemoveAll={onRemoveAll}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Technologies;

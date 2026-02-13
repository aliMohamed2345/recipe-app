"use client";

const RecipeSliderLoadingSkeleton = () => {
  return (
    <div className="p-2 relative mx-auto container animate-pulse">
      {/* Left/Right buttons */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 z-10">
        <div className="w-12 h-12 rounded-full bg-muted" />
      </div>
      <div className="absolute right-5 top-1/2 -translate-y-1/2 z-10">
        <div className="w-12 h-12 rounded-full bg-muted" />
      </div>

      {/* Scrollable cards */}
      <div className="flex gap-4 overflow-x-hidden pb-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="min-w-[250px] flex-shrink-0">
            <div className="w-full h-[180px] bg-muted rounded-2xl mb-2" />
            <div className="h-4 bg-muted rounded w-3/4 mb-1" />
            <div className="h-4 bg-muted rounded w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSliderLoadingSkeleton;

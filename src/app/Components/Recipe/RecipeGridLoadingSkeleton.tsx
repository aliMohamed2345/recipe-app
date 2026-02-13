const RecipeGridLoadingSkeleton = ({ length = 9 }: { length?: number }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-5 justify-items-center">
      {Array.from({ length }).map((_, i) => (
        <div
          key={i}
          className="w-[300px] h-[280px] rounded-xl border-2 border-border overflow-hidden animate-pulse"
        >
          <div className="relative w-full h-[180px] bg-muted" />

          <div className="p-4 flex flex-col gap-2">
            <div className="h-4 bg-muted rounded w-3/4 mx-auto" />

            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-muted rounded-full" />
                <div className="w-10 h-3 bg-muted rounded" />
              </div>
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 bg-muted rounded-full" />
                <div className="w-12 h-3 bg-muted rounded" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeGridLoadingSkeleton;

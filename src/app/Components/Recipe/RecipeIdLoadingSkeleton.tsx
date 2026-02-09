const RecipeIdLoadingSkeleton = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12 space-y-12 animate-pulse">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="w-full aspect-square bg-muted rounded-3xl" />

        <div className="space-y-6">
          <div className="h-10 bg-muted rounded w-3/4" />

          <div className="flex gap-6">
            <div className="h-6 w-32 bg-muted rounded" />
            <div className="h-6 w-32 bg-muted rounded" />
          </div>

          <div className="h-10 w-40 bg-muted rounded-xl" />

          <div className="space-y-3">
            <div className="h-4 bg-muted rounded" />
            <div className="h-4 bg-muted rounded w-5/6" />
            <div className="h-4 bg-muted rounded w-4/6" />
          </div>
        </div>
      </div>

      <div className="border rounded-3xl p-6 space-y-6">
        <div className="h-8 bg-muted rounded w-48" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="border rounded-2xl p-4 space-y-3">
              <div className="h-4 bg-muted rounded" />
              <div className="h-6 bg-muted rounded w-1/2 mx-auto" />
            </div>
          ))}
        </div>
      </div>

      <div className="border rounded-3xl p-6 space-y-6">
        <div className="flex justify-center">
          <div className="flex gap-3">
            <div className="h-10 w-32 bg-muted rounded-xl" />
            <div className="h-10 w-32 bg-muted rounded-xl" />
          </div>
        </div>

        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-6 bg-muted rounded" />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="h-8 bg-muted rounded w-48" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-[260px] bg-muted rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeIdLoadingSkeleton;

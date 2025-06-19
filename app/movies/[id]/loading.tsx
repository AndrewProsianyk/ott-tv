export default function Loading() {
  return (
    <div className="min-h-screen text-white">
      {/* Main Movie Block Skeleton */}
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              {/* Title skeleton */}
              <div className="h-12 bg-gray-700 rounded-lg mb-4 animate-pulse"></div>
              <div className="h-8 bg-gray-700 rounded-lg mb-6 w-3/4 animate-pulse"></div>

              {/* Rating and year skeleton */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-6 w-20 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-6 w-16 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-6 w-24 bg-gray-700 rounded animate-pulse"></div>
              </div>

              {/* Overview skeleton */}
              <div className="space-y-2 mb-6">
                <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded w-2/3 animate-pulse"></div>
              </div>

              {/* Buttons skeleton */}
              <div className="flex gap-4">
                <div className="h-12 w-32 bg-gray-700 rounded-lg animate-pulse"></div>
                <div className="h-12 w-32 bg-gray-700 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background image skeleton */}
        <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
      </div>

      {/* Trailer Section Skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="h-8 w-48 bg-gray-700 rounded mb-6 animate-pulse"></div>
        <div className="aspect-video bg-gray-800 rounded-lg animate-pulse"></div>
      </div>

      {/* Cast Section Skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="h-8 w-32 bg-gray-700 rounded mb-6 animate-pulse"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="text-center">
              <div className="aspect-[3/4] bg-gray-800 rounded-lg mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-700 rounded mb-1 animate-pulse"></div>
              <div className="h-3 bg-gray-700 rounded w-3/4 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Crew Section Skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="h-8 w-32 bg-gray-700 rounded mb-6 animate-pulse"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="text-center">
              <div className="aspect-[3/4] bg-gray-800 rounded-lg mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-700 rounded mb-1 animate-pulse"></div>
              <div className="h-3 bg-gray-700 rounded w-2/3 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section Skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="h-8 w-32 bg-gray-700 rounded mb-6 animate-pulse"></div>
        <div className="space-y-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-700 rounded mb-2 w-32 animate-pulse"></div>
                  <div className="h-3 bg-gray-700 rounded w-24 animate-pulse"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

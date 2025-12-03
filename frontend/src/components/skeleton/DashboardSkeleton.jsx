export default function DashboardSkeleton() {
  return (
    <div className="flex h-full bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r p-4 space-y-4 animate-pulse">
        {Array(9).fill(0).map((_, i) => (
          <div
            key={i}
            className="h-4 rounded-md bg-gray-200 w-3/4 mx-auto"
          ></div>
        ))}
      </div>

      {/* Main */}
      <div className="flex-1 p-6 space-y-6 animate-pulse">
        {/* Top Cards */}
        <div className="grid grid-cols-4 gap-4">
          {Array(4).fill(0).map((_, i) => (
            <div
              key={i}
              className="h-24 bg-white rounded-xl shadow-sm border"
            ></div>
          ))}
        </div>

        {/* Middle */}
        <div className="grid grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="col-span-2 p-6 bg-white rounded-xl border shadow-sm space-y-3">
            {[1,2,3,4].map((x) => (
              <div key={x} className="h-4 bg-gray-200 rounded w-2/3"></div>
            ))}
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>

          {/* Recent Tasks */}
          <div className="p-6 bg-white rounded-xl border shadow-sm space-y-4">
            {[1,2,3,4].map((x) => (
              <div key={x} className="h-10 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-4">
          {Array(4).fill(0).map((_, i) => (
            <div
              key={i}
              className="h-16 bg-white rounded-xl border shadow-sm"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ModuleCard({ title, children, nextPath, prevPath }) {
  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6">
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>
        {children}
      </div>

      <div className="flex justify-between mt-8">
        {prevPath && (
          <a
            href={prevPath}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            ← Previous
          </a>
        )}
        {nextPath && (
          <a
            href={nextPath}
            className="ml-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Next →
          </a>
        )}
      </div>
    </div>
  )
}

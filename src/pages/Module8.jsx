import ModuleCard from '../components/ModuleCard'

export default function Module8() {
  return (
    <ModuleCard title="Module 8: Your Real-Time Leadership Action Plan" prevPath="/module-7">
      <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
        <li>
          <a
            href="https://asilva777.github.io/realtime-leadership-assessment-/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Re-take the Real-Time Leader Self-Assessment
          </a> to measure your growth
        </li>
        <li>Commit to one MOVE-based practice to embed over the next month</li>
        <li>
          Optional: <a
            href="https://asilvainnovations.com/real-time-leadership"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Share insights
          </a> to help shape future SME resilience tools in Asia
        </li>
        <li>Receive a digital badge (optional) and shareable summary</li>
      </ul>
      <div className="bg-green-50 p-4 rounded-lg border border-green-200 mt-6">
        <p className="font-medium text-green-800">
          You’ve taken a critical step toward leading with clarity, compassion, and resilience.
        </p>
      </div>
      <div className="text-center mt-6">
        <a
          href="https://asilvainnovations.com/real-time-leadership"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
        >
          Learn More About Real-Time Leadership
        </a>
      </div>
    </ModuleCard>
  )
}

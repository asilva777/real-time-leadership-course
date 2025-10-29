import ModuleCard from '../components/ModuleCard'

export default function Module0() {
  return (
    <ModuleCard title="Module 0: Welcome & Self-Assessment" nextPath="/module-1">
      <p className="mb-4">
        Begin your journey by understanding your current real-time leadership strengths and growth areas.
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
        <li>
          <a
            href="https://asilva777.github.io/realtime-leadership-assessment-/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            Take the Real-Time Leader Self-Assessment
          </a>
        </li>
        <li>Set a personal leadership intention (e.g., “I will lead my LGU team calmly during early-warning phases”)</li>
        <li>Preview how the MOVE framework applies to SMEs, NGOs, and local resilience in Asia</li>
      </ul>
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <p className="text-sm italic">
          This self-assessment evaluates your ability to navigate real-time challenges like uncertainty, remote team leadership, and balancing speed with reflection.
        </p>
      </div>
    </ModuleCard>
  )
}

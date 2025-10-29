import ModuleCard from '../components/ModuleCard'

export default function Module6() {
  return (
    <ModuleCard title="Module 6: Data-Informed Decisions Without Paralysis" prevPath="/module-5" nextPath="/module-7">
      <p className="mb-3"><strong>Linked to the 2024 SME Report on AI & Automation</strong></p>
      <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
        <li>Use “good enough” data from trusted sources (e.g., PAGASA, internal dashboards, community feedback)</li>
        <li>Integrate AI as a sense-making partner—not a replacement for human judgment</li>
        <li>Balance speed and reflection using clear decision thresholds</li>
      </ul>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Tool: When to Act vs. Wait Guide</h3>
        <p className="text-sm bg-gray-100 p-3 rounded">
          Define your triggers: At what point does data quality or risk level demand action?
        </p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Apply It:</h3>
        <p>Simulate a climate-risk decision (e.g., pre-typhoon prep) using public data + your judgment.</p>
      </div>
      <div className="mt-4 text-sm">
        <a
          href="https://asilvainnovations.com/real-time-leadership"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Explore the 2024 SME Report on AI, DRR, and CCA →
        </a>
      </div>
    </ModuleCard>
  )
}

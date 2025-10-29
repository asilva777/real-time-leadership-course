import ModuleCard from '../components/ModuleCard'

export default function Module7() {
  return (
    <ModuleCard title="Module 7: Sustaining Your Leadership Stamina" prevPath="/module-6" nextPath="/module-8">
      <p className="mb-3"><strong>Addresses:</strong> Maintaining Work-Life Balance & Avoiding Burnout</p>
      <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
        <li>Recognize leadership as a marathon of moments—not a sprint</li>
        <li>Build micro-practices for restoration (e.g., 2-minute breath reset, boundary rituals)</li>
        <li>Model sustainable leadership so your team can thrive, not just survive</li>
      </ul>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Tool: Micro-Restoration Menu</h3>
        <p className="text-sm bg-gray-100 p-3 rounded">
          Curated 1–3 minute practices for high-stress roles in DRR, CCA, and SME leadership.
        </p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Apply It:</h3>
        <p>Design your personal resilience ritual for the next 30 days.</p>
      </div>
    </ModuleCard>
  )
}

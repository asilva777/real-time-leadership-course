import ModuleCard from '../components/ModuleCard'

export default function Module5() {
  return (
    <ModuleCard title="Module 5: Leading Remote & Distributed Teams in Real Time" prevPath="/module-4" nextPath="/module-6">
      <p className="mb-3"><strong>Integrates all MOVE elements</strong></p>
      <p className="mb-3"><strong>Key Tools:</strong> Regular Stand-ups, Virtual Whiteboards, Continuous Feedback Loops</p>
      <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
        <li>Design “resilience rhythms”: daily check-ins that build connection + clarity</li>
        <li>Prevent isolation and burnout in hybrid teams</li>
        <li>Leverage collaborative tools (e.g., Trello, Miro) without adding complexity</li>
      </ul>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Tool: Resilience Rhythm Checklist</h3>
        <p className="text-sm bg-gray-100 p-3 rounded">
          Three pillars: <strong>Connection</strong> (How are we relating?), <strong>Clarity</strong> (What’s our focus?), <strong>Care</strong> (How are we sustaining energy?).
        </p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Apply It:</h3>
        <p>Audit your team’s communication flow—what’s working? What’s missing?</p>
      </div>
    </ModuleCard>
  )
}

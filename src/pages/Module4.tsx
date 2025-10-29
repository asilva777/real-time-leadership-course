import ModuleCard from '../components/ModuleCard'

export default function Module4() {
  return (
    <ModuleCard title="Module 4: Engaging & Executing with Clarity" prevPath="/module-3" nextPath="/module-5">
      <p className="mb-3"><strong>MOVE Element:</strong> E – Engage & Execute</p>
      <p className="mb-3"><strong>Key Roles:</strong> Collaborative Communicator, Decisive Decision-Maker</p>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4">
        “Execution fails not from poor plans—but from unclear communication.”
      </blockquote>
      <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
        <li>Frame decisions with context: “Here’s why we’re doing this…”</li>
        <li>Assign micro-commitments with clear owners and feedback loops</li>
        <li>Use stand-ups or dashboards to maintain momentum without micromanaging</li>
      </ul>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Tool: MOVE Message Builder</h3>
        <p className="text-sm bg-gray-100 p-3 rounded">
          Craft concise, compassionate updates that inform, align, and reassure your team.
        </p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Apply It:</h3>
        <p>Draft a real-time team message (e.g., during a disruption) using the MOVE Message Builder.</p>
      </div>
    </ModuleCard>
  )
}

import ModuleCard from '../components/ModuleCard'

export default function Module2() {
  return (
    <ModuleCard title="Module 2: Opening Options Under Pressure" prevPath="/module-1" nextPath="/module-3">
      <p className="mb-3"><strong>MOVE Element:</strong> O – Open Options</p>
      <p className="mb-3"><strong>Key Roles:</strong> Innovative Leader, Empowerment Facilitator</p>
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700 mb-4">
        “Avoid binary choices. Create space for multiple paths forward.”
      </blockquote>
      <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
        <li>Shift from “Do we act or wait?” to “What are our 3 best options right now?”</li>
        <li>Foster psychological safety so remote or hybrid teams contribute ideas freely</li>
        <li>Use lightweight ideation: virtual whiteboards, rapid polling, 10-minute brainstorming</li>
      </ul>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Tool: Option Storm Template</h3>
        <p className="text-sm bg-gray-100 p-3 rounded">
          A simple framework for rapid co-creation with distributed teams—ideal for disaster prep or stakeholder alignment.
        </p>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Apply It:</h3>
        <p>Run a micro-brainstorm on a live challenge using the Option Storm method.</p>
      </div>
    </ModuleCard>
  )
}

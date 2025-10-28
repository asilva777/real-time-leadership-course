import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Real-Time Leadership for Resilient Organizations
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          A MOVE-Based Microlearning Journey
        </p>
        <p className="text-gray-600 mb-8">
          For SME leaders, NGO managers, and LGU team leads in Asia navigating typhoons, supply shocks, and team burnout.
        </p>
        <a
          href="https://asilvainnovations.com/real-time-leadership"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
        >
          Learn More
        </a>
      </header>

      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Why This Course?</h2>
        <p className="text-gray-700 mb-4">
          In fast-moving, uncertain environments, leaders don’t need more theory—they need practical, real-time practices to stay calm, make data-informed decisions, and keep their people aligned and resilient.
        </p>
        <p className="text-gray-700">
          This course adapts the <strong>MOVE framework</strong> (Noble & Kauffman) into 8 bite-sized, self-paced modules (~8–12 min each).
        </p>
      </div>

      <div className="text-center">
        <Link
          to="/module-0"
          className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700"
        >
          Start Course
        </Link>
      </div>
    </div>
  )
}

import Timeline from './components/Timeline'
import { timeline } from './data/timeline'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Timeline semesters={timeline} />
    </div>
  )
}

export default App

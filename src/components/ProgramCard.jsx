import InternsAccordion from './InternsAccordion'

const colorMap = {
  APD: 'bg-blue-600/80 border-blue-500',
  Energy: 'bg-emerald-700/80 border-emerald-500',
  OFA: 'bg-yellow-600/80 border-yellow-500',
  OKC: 'bg-orange-600/80 border-orange-500',
  'SoBA (Biz)': 'bg-slate-600/80 border-slate-500',
  'SoBA (Dev)': 'bg-teal-700/80 border-teal-500',
  SocEnt: 'bg-purple-600/80 border-purple-500',
}

const defaultColor = 'bg-slate-600/80 border-slate-500'

export default function ProgramCard({ program }) {
  const colors = colorMap[program.name] || defaultColor

  return (
    <div className={`rounded-xl border p-4 ${colors} backdrop-blur-sm`}>
      <div className="mb-3 flex items-center gap-2">
        <h3 className="text-lg font-bold text-white">{program.name}</h3>
        <span className="rounded bg-white/20 px-1.5 py-0.5 text-xs font-semibold text-white">
          {program.interns.length}
        </span>
      </div>

      <div className="mb-3 space-y-0.5 text-sm text-slate-200">
        {program.fellow && (
          <p>
            <span className="text-slate-400">Fellow:</span> {program.fellow}
          </p>
        )}
        <p>
          <span className="text-slate-400">TL:</span> {program.teamLead}
        </p>
      </div>

      <InternsAccordion interns={program.interns} />
    </div>
  )
}

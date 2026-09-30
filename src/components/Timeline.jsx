import ProgramCard from './ProgramCard'

export default function Timeline({ semesters }) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-max px-8 py-6">
        {/* Title */}
        <h1 className="mb-8 flex items-center gap-3 text-3xl font-bold text-white">
          <span className="h-8 w-1 rounded bg-emerald-400" />
          Timeline
        </h1>

        {/* Semester labels + dashed lines + horizontal track + cards */}
        <div className="relative">
          {/* Labels row */}
          <div className="flex">
            {semesters.map((sem) => (
              <div
                key={sem.id}
                className="flex shrink-0 flex-col items-center"
                style={{ minWidth: 320 }}
              >
                <span className="text-sm font-semibold text-emerald-400">
                  {sem.label}
                </span>
                <div className="mt-1 h-8 border-l-2 border-dashed border-slate-500" />
              </div>
            ))}
          </div>

          {/* Horizontal line with dots */}
          <div className="relative flex items-center">
            {/* The line */}
            <div className="absolute inset-x-0 h-0.5 bg-linear-to-r from-slate-500 via-white to-slate-500" />

            {/* Dots per semester */}
            <div className="relative flex w-full">
              {semesters.map((sem, i) => (
                <div
                  key={sem.id}
                  className="flex shrink-0 items-center justify-center"
                  style={{ minWidth: 320 }}
                >
                  <div className="z-10 h-3 w-3 rounded-full border-2 border-white bg-slate-800" />
                </div>
              ))}
              {/* Arrow at end */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2">
                <svg className="h-4 w-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 16">
                  <path d="M24 8L14 0v5H0v6h14v5z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Cards row */}
          <div className="mt-4 flex">
            {semesters.map((sem) => (
              <div
                key={sem.id}
                className="flex shrink-0 flex-col gap-4 px-4"
                style={{ minWidth: 320 }}
              >
                {sem.programs.map((program) => (
                  <ProgramCard key={program.id} program={program} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

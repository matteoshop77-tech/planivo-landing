const pains = [
  {
    emoji: '📱',
    title: 'WhatsApp groups out of control',
    description: 'Shift changes, urgent requests, photos of paper schedules — everything mixed together. Important messages get buried and nobody sees them.',
  },
  {
    emoji: '❓',
    title: 'Nobody knows who works when',
    description: 'Staff call in to ask their schedule. You spend your morning answering the same questions instead of running your business.',
  },
  {
    emoji: '📋',
    title: 'Tasks assigned verbally, forgotten instantly',
    description: '"I told him this morning" — but there\'s no trace of it. No follow-up, no accountability, no way to know if it was done.',
  },
  {
    emoji: '📄',
    title: 'Documents sent by email, lost forever',
    description: 'Contracts, authorizations, licenses — scattered across inboxes. When you need them, nobody can find them.',
  },
  {
    emoji: '📢',
    title: 'Important announcements nobody reads',
    description: 'You post in the group, half the team doesn\'t see it. You never know who actually received the information.',
  },
  {
    emoji: '⏱️',
    title: 'Attendance tracked on paper or not at all',
    description: 'Hours written by hand, approved without verification. Errors, disputes, wasted time every single month.',
  },
]

export default function PainPoints() {
  return (
    <section className="py-24 px-6" style={{ background: '#0f172a' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold px-4 py-2 rounded-full mb-6 uppercase tracking-wide">
            Sound familiar?
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Without PLANIVO, every day looks like this.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Managing a team of 30, 50, 100 people with WhatsApp and spreadsheets is not a system. It's chaos with extra steps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pains.map((pain, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 border border-slate-700/50"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <div className="text-3xl mb-4">{pain.emoji}</div>
              <h3 className="text-base font-semibold text-white mb-2">
                {pain.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {pain.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-blue-600/10 border border-blue-500/20 rounded-2xl px-8 py-4">
            <span className="text-2xl">👇</span>
            <span className="text-blue-400 font-semibold text-base">
              There is a better way.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
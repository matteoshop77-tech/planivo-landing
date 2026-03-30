import AppMockup from '../AppMockup'
import type { MockupScreen } from '../AppMockup'

interface FeatureShowcaseProps {
  title: string
  subtitle: string
  description: string
  points: string[]
  screen: MockupScreen
  reverse?: boolean
  background?: string
}

export default function FeatureShowcase({
  title,
  subtitle,
  description,
  points,
  screen,
  reverse = false,
  background = '#ffffff',
}: FeatureShowcaseProps) {
  return (
    <section style={{ background }} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`flex items-center gap-16 flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Testo */}
          <div className="flex-1 min-w-0">
            <div className="inline-block bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 uppercase tracking-wide">
              {subtitle}
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
              {description}
            </p>
            <ul className="flex flex-col gap-3">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-slate-600 text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Mockup */}
          <div className="flex-1 min-w-0 w-full">
            <AppMockup screen={screen} />
          </div>
        </div>
      </div>
    </section>
  )
}
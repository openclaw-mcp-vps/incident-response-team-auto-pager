export default function Home() {
  const faqs = [
    {
      q: 'Which monitoring tools does it integrate with?',
      a: 'Incident Auto-Pager connects with PagerDuty, Opsgenie, Slack, and Microsoft Teams out of the box. Webhooks let you add any custom source.'
    },
    {
      q: 'How does the rule engine decide who to page?',
      a: 'You define rules using keywords, severity levels, and team tags. When an incident fires, the engine scores each rule match and routes to the best-fit on-call engineer automatically.'
    },
    {
      q: 'Can I try it before subscribing?',
      a: 'Yes — a 14-day free trial is included. No credit card required to start. Upgrade to the $59/mo plan when you are ready to go to production.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          DevOps Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Page the <span className="text-[#58a6ff]">right engineer</span><br />every single time
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Incident Auto-Pager routes alerts to the best on-call engineer based on incident keywords, severity, and team expertise — cutting MTTD and eliminating wrong-team pages.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-lg hover:bg-[#79b8ff] transition-colors"
        >
          Start Free Trial
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">14-day free trial · No credit card required</p>

        {/* Feature pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {['PagerDuty', 'Opsgenie', 'Slack', 'MS Teams', 'Keyword Rules', 'Severity Routing', 'Analytics Dashboard', 'Escalation Policies'].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8">
          <div className="flex items-end gap-2 mb-2">
            <span className="text-4xl font-bold text-white">$59</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <p className="text-[#8b949e] mb-6">Everything you need for smart on-call routing</p>
          <ul className="space-y-3 mb-8">
            {[
              'Unlimited incidents & alerts',
              'PagerDuty + Opsgenie integration',
              'Slack & MS Teams notifications',
              'Keyword & severity rule engine',
              'Escalation policy builder',
              'Incident analytics dashboard',
              'Priority email support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full text-center px-6 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started — $59/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-xl border border-[#30363d] bg-[#161b22] p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Incident Auto-Pager. All rights reserved.
      </footer>
    </main>
  )
}

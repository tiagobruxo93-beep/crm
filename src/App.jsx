const stats = [
  { label: 'Monthly revenue', value: '$84.2K', change: '+12.4%', tone: 'positive' },
  { label: 'Active deals', value: '186', change: '+18.1%', tone: 'positive' },
  { label: 'Conversion rate', value: '24.8%', change: '+2.2%', tone: 'positive' },
  { label: 'Support tickets', value: '32', change: '-6.4%', tone: 'neutral' },
]

const pipeline = [
  { name: 'SaaS Expansion', amount: '$14.8K', stage: 'Proposal', color: 'violet' },
  { name: 'Enterprise Upsell', amount: '$28.4K', stage: 'Negotiation', color: 'blue' },
  { name: 'Consulting Renewal', amount: '$9.2K', stage: 'Review', color: 'green' },
  { name: 'Team Training', amount: '$6.1K', stage: 'Qualified', color: 'amber' },
]

const tasks = [
  { title: 'Follow up with Northwind', due: 'Today, 4:00 PM', priority: 'High' },
  { title: 'Prepare onboarding deck', due: 'Tomorrow, 10:30 AM', priority: 'Medium' },
  { title: 'Review renewal notes', due: 'Thu, 9:00 AM', priority: 'Low' },
]

const leads = [
  { name: 'Alicia Stone', company: 'Northwind', value: '$7.4K', status: 'Qualified' },
  { name: 'Marcus Bell', company: 'Pioneer Labs', value: '$12.8K', status: 'Proposal' },
  { name: 'Emma Li', company: 'Blue Harbor', value: '$9.1K', status: 'Negotiation' },
  { name: 'Daniel Ortiz', company: 'Summit Works', value: '$5.6K', status: 'New lead' },
]

const activity = [
  'Alicia Stone opened the proposal and requested a pricing revision.',
  'Marcus Bell scheduled a product demo for Friday afternoon.',
  'Emma Li left a note on the onboarding checklist.',
  'A new lead from Blue Harbor was added to the pipeline.',
]

const schedule = [
  { time: '09:00', title: 'Sales sync', personnel: 'Team' },
  { time: '11:30', title: 'Demo with Northwind', personnel: 'Sarah' },
  { time: '14:00', title: 'Renewal review', personnel: 'Ops' },
  { time: '16:00', title: 'Customer call', personnel: 'Alex' },
]

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">C</div>
          <div>
            <p className="eyebrow">Workspace</p>
            <h1>CrmFlow</h1>
          </div>
        </div>

        <nav className="nav">
          <button className="nav-item active">Overview</button>
          <button className="nav-item">Customers</button>
          <button className="nav-item">Deals</button>
          <button className="nav-item">Reports</button>
          <button className="nav-item">Automation</button>
        </nav>

        <div className="sidebar-card">
          <p className="eyebrow">Quarter goal</p>
          <strong>$230K</strong>
          <div className="progress">
            <span style={{ width: '74%' }} />
          </div>
          <small>74% achieved</small>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Good afternoon</p>
            <h2>Sales dashboard</h2>
          </div>

          <div className="top-actions">
            <button className="ghost-btn">Export</button>
            <button className="primary-btn">New lead</button>
          </div>
        </header>

        <section className="stats-grid">
          {stats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <p>{stat.label}</p>
              <div className="stat-value-row">
                <strong>{stat.value}</strong>
                <span className={`trend ${stat.tone}`}>{stat.change}</span>
              </div>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <div className="panel panel-wide">
            <div className="panel-header">
              <h3>Pipeline</h3>
              <button className="ghost-btn small">View all</button>
            </div>

            <div className="pipeline-list">
              {pipeline.map((deal) => (
                <div key={deal.name} className="deal-item">
                  <div className={`deal-bullet ${deal.color}`} />
                  <div className="deal-copy">
                    <strong>{deal.name}</strong>
                    <span>{deal.stage}</span>
                  </div>
                  <div className="deal-amount">{deal.amount}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Tasks</h3>
              <button className="ghost-btn small">+ Add</button>
            </div>

            <div className="task-list">
              {tasks.map((task) => (
                <div key={task.title} className="task-item">
                  <div>
                    <strong>{task.title}</strong>
                    <span>{task.due}</span>
                  </div>
                  <span className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bottom-grid">
          <div className="panel">
            <div className="panel-header">
              <h3>Recent leads</h3>
              <button className="ghost-btn small">Manage</button>
            </div>

            <table className="lead-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Value</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.name}>
                    <td>{lead.name}</td>
                    <td>{lead.company}</td>
                    <td>{lead.value}</td>
                    <td>
                      <span className="status-pill">{lead.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="stack-column">
            <div className="panel">
              <div className="panel-header">
                <h3>Activity</h3>
                <button className="ghost-btn small">Latest</button>
              </div>

              <ul className="activity-list">
                {activity.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="panel">
              <div className="panel-header">
                <h3>Today</h3>
              </div>

              <div className="schedule-list">
                {schedule.map((slot) => (
                  <div key={slot.title} className="schedule-item">
                    <span>{slot.time}</span>
                    <div>
                      <strong>{slot.title}</strong>
                      <small>{slot.personnel}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App

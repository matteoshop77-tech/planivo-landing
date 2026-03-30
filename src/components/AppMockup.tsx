export type MockupScreen = 'dashboard' | 'shifts' | 'chat' | 'team'

interface AppMockupProps {
  screen: MockupScreen
}

const SidebarBase = ({ active }: { active: string }) => {
  const navItem = (key: string, label: string, iconD: string, badge?: number) => {
    const isActive = active === key
    return (
      <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '7px 10px', borderRadius: '8px', background: isActive ? '#eff6ff' : 'transparent', color: isActive ? '#2563eb' : '#64748b', fontWeight: isActive ? 600 : 400, marginBottom: '1px', border: isActive ? '1px solid #dbeafe' : '1px solid transparent', fontSize: '13px', cursor: 'pointer' }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, color: isActive ? '#2563eb' : '#94a3b8' }}>
          <path d={iconD} />
        </svg>
        <span style={{ flex: 1 }}>{label}</span>
        {badge ? <span style={{ background: '#2563eb', color: 'white', fontSize: '9px', fontWeight: 700, minWidth: '17px', height: '17px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 4px' }}>{badge}</span> : null}
      </div>
    )
  }

  return (
    <div style={{ width: '200px', background: 'white', borderRight: '1px solid #e9ecf2', display: 'flex', flexDirection: 'column', flexShrink: 0, height: '100%', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      {/* Logo */}
      <div style={{ padding: '18px 16px 14px', borderBottom: '1px solid #e9ecf2', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ width: '32px', height: '32px', background: '#2563eb', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 8px rgba(37,99,235,0.3)' }}>
          <svg viewBox="0 0 20 20" width="16" height="16">
            <rect x="2" y="2" width="7" height="7" rx="1.5" fill="white"/>
            <rect x="11" y="2" width="7" height="7" rx="1.5" fill="white"/>
            <rect x="2" y="11" width="7" height="7" rx="1.5" fill="white"/>
            <rect x="11" y="11" width="7" height="7" rx="1.5" fill="white" opacity="0.4"/>
          </svg>
        </div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', lineHeight: 1.2 }}>Grand Hotel<br/>Milano</div>
          <div style={{ fontSize: '10px', color: '#64748b', marginTop: '1px' }}>Admin</div>
        </div>
      </div>

      {/* Check In button */}
      <div style={{ padding: '10px 10px 6px' }}>
        <div style={{ background: '#2563eb', color: 'white', borderRadius: '10px', padding: '8px 12px', fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 2px 8px rgba(37,99,235,0.3)', cursor: 'pointer' }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
          Check In / Check Out
        </div>
      </div>

      {/* Nav */}
      <div style={{ flex: 1, padding: '4px 10px', overflowY: 'auto' }}>
        <div style={{ fontSize: '9px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.7px', padding: '6px 4px 3px' }}>Main</div>
        {navItem('dashboard', 'Home', 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10')}
        {navItem('shifts', 'Shifts', 'M8 2v4 M16 2v4 M3 10h18 M3 6h18v16H3z')}
        {navItem('tasks', 'Tasks', 'M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11', 5)}
        {navItem('chat', 'Chat', 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z', 3)}

        <div style={{ fontSize: '9px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.7px', padding: '8px 4px 3px' }}>Operations</div>
        {navItem('checklist', 'Checklist', 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2 M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2 M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2')}
        {navItem('inventory', 'Inventory', 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z')}
        {navItem('announcements', 'Announcements', 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91')}
        {navItem('ideas', 'Ideas & Feedback', 'M12 2a7 7 0 0 1 7 7c0 3.5-2.5 5.5-3 8H8c-.5-2.5-3-4.5-3-8a7 7 0 0 1 7-7z M9 21h6 M9 18h6')}

        <div style={{ fontSize: '9px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.7px', padding: '8px 4px 3px' }}>Culture</div>
        {navItem('recognition', 'Recognition', 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z')}
        {navItem('birthdays', 'Birthdays', 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z')}
        {navItem('surveys', 'Surveys', 'M18 20V10 M12 20V4 M6 20v-6')}

        <div style={{ fontSize: '9px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.7px', padding: '8px 4px 3px' }}>People</div>
        {navItem('team', 'People', 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75 M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z')}

        <div style={{ fontSize: '9px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.7px', padding: '8px 4px 3px' }}>Payroll</div>
        {navItem('payroll', 'Payroll', 'M12 1v22 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6')}

        <div style={{ fontSize: '9px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.7px', padding: '8px 4px 3px' }}>Account</div>
        {navItem('profile', 'Profile', 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z')}
      </div>

      {/* Footer */}
      <div style={{ padding: '10px 14px', borderTop: '1px solid #e9ecf2', background: '#f8fafc', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: 700, color: 'white', flexShrink: 0 }}>MM</div>
        <div>
          <div style={{ fontSize: '11px', fontWeight: 600, color: '#0f172a' }}>Matteo Missoni</div>
          <div style={{ fontSize: '9px', color: '#64748b' }}>Admin</div>
        </div>
      </div>
    </div>
  )
}

const DashboardScreen = () => (
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
    <div style={{ background: 'white', padding: '12px 20px', borderBottom: '1px solid #e9ecf2', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>Good afternoon, Marco 👋</span>
      <span style={{ fontSize: '11px', color: '#94a3b8' }}>30/03/2026</span>
    </div>
    <div style={{ flex: 1, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '12px', background: '#f8fafc', overflowY: 'auto' }}>
      <div style={{ fontSize: '10px', fontWeight: 700, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Unread Announcements</div>
      <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e9ecf2', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div style={{ padding: '12px 14px', borderBottom: '1px solid #f1f5f9' }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>Easter closing</div>
          <div style={{ fontSize: '11px', color: '#475569', marginTop: '4px', lineHeight: 1.5 }}>The hotel will be closed on Easter Sunday. All staff scheduled for 20 April should contact their manager.</div>
        </div>
        <div style={{ padding: '10px 14px', background: '#f8fafc' }}>
          <div style={{ background: '#2563eb', color: 'white', borderRadius: '8px', padding: '8px', fontSize: '12px', fontWeight: 600, textAlign: 'center' as const }}>I have read and confirm ✅</div>
        </div>
      </div>
      <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e9ecf2', padding: '12px 14px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          Today's Shift
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '5px 12px', fontSize: '12px', fontWeight: 700, color: '#1d4ed8' }}>🕘 09:00 → 17:00</span>
          <span style={{ fontSize: '11px', color: '#16a34a', fontWeight: 600 }}>● Active now</span>
        </div>
        <div style={{ fontSize: '11px', color: '#64748b', marginTop: '5px' }}>Front Desk · Grand Hotel Milano</div>
      </div>
      <div>
        <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
          <span>My Tasks Today</span>
          <span style={{ color: '#2563eb', fontSize: '11px', fontWeight: 600 }}>View all →</span>
        </div>
        <div style={{ background: 'white', borderRadius: '12px', border: '1px solid #e9ecf2', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          {[
            { cat: '🧹 Housekeeping', name: 'Deep clean — Rooms 301–310', initials: 'AK', color: '#16a34a', border: '#ef4444' },
            { cat: '📦 Orders', name: 'Check linen delivery', initials: 'ER', color: '#9333ea', border: '#f59e0b' },
            { cat: '🏨 Front Desk', name: 'Prepare VIP welcome packs', initials: 'SE', color: '#2563eb', border: '#94a3b8' },
          ].map((t, i) => (
            <div key={i} style={{ padding: '10px 14px', borderBottom: i < 2 ? '1px solid #f1f5f9' : 'none', borderLeft: `3px solid ${t.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '10px', color: '#94a3b8' }}>{t.cat}</div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: '#0f172a', marginTop: '2px' }}>{t.name}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '4px' }}>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '7px', fontWeight: 700, color: 'white' }}>{t.initials}</div>
                </div>
              </div>
              <span style={{ fontSize: '10px', color: '#64748b', background: '#f1f5f9', padding: '3px 8px', borderRadius: '6px' }}>To Do</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

const ShiftsScreen = () => (
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
    <div style={{ background: 'white', padding: '12px 20px', borderBottom: '1px solid #e9ecf2', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>Shifts</span>
      <div style={{ background: '#2563eb', color: 'white', borderRadius: '8px', padding: '6px 14px', fontSize: '12px', fontWeight: 600 }}>+ New shift</div>
    </div>
    <div style={{ flex: 1, padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: '8px', background: '#f8fafc', overflowY: 'auto' }}>
      <div style={{ background: 'white', border: '2px solid #e9ecf2', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '16px', color: '#64748b', cursor: 'pointer' }}>‹</span>
        <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>31 Mar – 6 Apr 2026</span>
        <span style={{ fontSize: '16px', color: '#64748b', cursor: 'pointer' }}>›</span>
      </div>
      {[
        { day: 'Monday', date: '31/03/2026', today: true, shifts: [
          { name: 'Sofia Esposito', time: '08:00–14:00', left: '0%', width: '50%', bg: '#D3E8F5', border: '#74B4D4', color: '#2C5F7A' },
          { name: 'Luca Moretti', time: '13:00–19:00', left: '41.7%', width: '50%', bg: '#F5E6D3', border: '#D4A574', color: '#8B5E3C' },
          { name: 'Ahmed Karim', time: '11:00–19:00', left: '25%', width: '66.7%', bg: '#D3F5E0', border: '#74D4A0', color: '#2C7A4A' },
        ]},
        { day: 'Tuesday', date: '01/04/2026', today: false, shifts: [
          { name: 'Elena Russo', time: '08:00–17:00', left: '0%', width: '75%', bg: '#F5D3E8', border: '#D474B4', color: '#7A2C5F' },
          { name: 'Sofia Esposito', time: '14:00–20:00', left: '50%', width: '50%', bg: '#D3E8F5', border: '#74B4D4', color: '#2C5F7A' },
        ]},
        { day: 'Wednesday', date: '02/04/2026', today: false, shifts: [
          { name: 'Luca Moretti', time: '08:00–15:00', left: '0%', width: '58.3%', bg: '#F5E6D3', border: '#D4A574', color: '#8B5E3C' },
        ]},
        { day: 'Thursday', date: '03/04/2026', today: false, shifts: [] },
      ].map((day, i) => (
        <div key={i} style={{ background: 'white', border: `2px solid ${day.today ? '#2563eb' : '#e9ecf2'}`, borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ padding: '8px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <span style={{ fontSize: '13px', fontWeight: 700, color: day.today ? '#2563eb' : '#0f172a' }}>{day.day}</span>
              <span style={{ fontSize: '11px', color: day.today ? '#2563eb' : '#94a3b8', marginLeft: '6px' }}>{day.date}</span>
            </div>
            <span style={{ fontSize: '18px', color: day.today ? '#2563eb' : '#94a3b8', lineHeight: 1 }}>+</span>
          </div>
          {day.shifts.length === 0 ? (
            <div style={{ padding: '2px 14px 10px', fontSize: '11px', color: '#94a3b8', fontStyle: 'italic' }}>No shifts scheduled</div>
          ) : (
            <div style={{ padding: '2px 14px 10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {day.shifts.map((sh, j) => (
                <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '90px', fontSize: '10px', fontWeight: 600, color: sh.color, flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{sh.name}</span>
                  <div style={{ flex: 1, height: '22px', background: '#f1f5f9', borderRadius: '5px', position: 'relative' as const, overflow: 'hidden' }}>
                    <div style={{ position: 'absolute' as const, top: 0, height: '100%', left: sh.left, width: sh.width, background: sh.bg, border: `1px solid ${sh.border}`, borderRadius: '4px', display: 'flex', alignItems: 'center', padding: '0 6px' }}>
                      <span style={{ fontSize: '9px', fontWeight: 700, color: sh.color, whiteSpace: 'nowrap' as const }}>{sh.time}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
                    <span style={{ fontSize: '11px', opacity: 0.5, cursor: 'pointer' }}>✏️</span>
                    <span style={{ fontSize: '11px', opacity: 0.5, cursor: 'pointer' }}>🗑</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)

const ChatScreen = () => (
  <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
    <div style={{ width: '220px', borderRight: '1px solid #e9ecf2', background: 'white', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
      <div style={{ padding: '14px 16px 8px', fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>Chat</div>
      <div style={{ padding: '4px 12px 10px' }}>
        <div style={{ background: '#f1f5f9', borderRadius: '20px', padding: '6px 12px', fontSize: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          Cerca...
        </div>
      </div>
      <div style={{ fontSize: '9px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' as const, letterSpacing: '0.7px', padding: '2px 16px 4px' }}>Gruppi</div>
      {[
        { name: 'Sales', last: 'Hy', time: '26/03', color: '#2563eb', active: false },
        { name: 'Kitchen', last: 'Nessun messaggio', time: '', color: '#16a34a', active: false },
        { name: 'Shop', last: 'Nessun messaggio', time: '', color: '#9333ea', active: true },
      ].map((c, i) => (
        <div key={i} style={{ padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '10px', background: c.active ? '#f0f7ff' : 'transparent', borderBottom: '1px solid #f8fafc', cursor: 'pointer' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>{c.name}</div>
            <div style={{ fontSize: '11px', color: '#94a3b8', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' as const }}>{c.last}</div>
          </div>
          {c.time && <span style={{ fontSize: '10px', color: '#94a3b8', flexShrink: 0 }}>{c.time}</span>}
        </div>
      ))}
      <div style={{ fontSize: '9px', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' as const, letterSpacing: '0.7px', padding: '6px 16px 4px' }}>Messaggi Diretti</div>
      {[
        { name: 'Ferenc Matusek', last: 'hi', time: '29/03', color: '#0891b2', initials: 'FM' },
        { name: 'Paolo Bianchi-New', last: 'ciao', time: '26/03', color: '#e11d48', initials: 'PB' },
      ].map((c, i) => (
        <div key={i} style={{ padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid #f8fafc', cursor: 'pointer' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: c.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: 'white', flexShrink: 0 }}>{c.initials}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>{c.name}</div>
            <div style={{ fontSize: '11px', color: '#94a3b8' }}>{c.last}</div>
          </div>
          <span style={{ fontSize: '10px', color: '#94a3b8', flexShrink: 0 }}>{c.time}</span>
        </div>
      ))}
    </div>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#f8fafc', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '64px', height: '64px', background: 'white', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', marginBottom: '16px' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      </div>
      <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>Seleziona una conversazione</div>
      <div style={{ fontSize: '12px', color: '#64748b' }}>Scegli un contatto per iniziare a chattare</div>
    </div>
  </div>
)

const TeamScreen = () => (
  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
    <div style={{ background: 'white', padding: '12px 20px', borderBottom: '1px solid #e9ecf2', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>People</span>
      <div style={{ background: '#2563eb', color: 'white', borderRadius: '8px', padding: '6px 14px', fontSize: '12px', fontWeight: 600 }}>+ Invite member</div>
    </div>
    <div style={{ flex: 1, padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: '8px', background: '#f8fafc', overflowY: 'auto' }}>
      <div style={{ background: 'white', border: '2px solid #e9ecf2', borderRadius: '10px', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '8px', color: '#94a3b8', fontSize: '13px' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        Search team members...
      </div>
      {[
        { initials: 'SE', color: '#2563eb', name: 'Sofia Esposito', dept: 'Front Desk', role: 'Staff', deptBg: '#eff6ff', deptColor: '#1d4ed8', expanded: true },
        { initials: 'LM', color: '#d97706', name: 'Luca Moretti', dept: 'Kitchen', role: 'Staff', deptBg: '#fef3c7', deptColor: '#92400e', expanded: false },
        { initials: 'AK', color: '#16a34a', name: 'Ahmed Karim', dept: 'Housekeeping', role: 'Manager', deptBg: '#dcfce7', deptColor: '#166534', expanded: false },
        { initials: 'ER', color: '#9333ea', name: 'Elena Russo', dept: 'Front Desk', role: 'Staff', deptBg: '#eff6ff', deptColor: '#1d4ed8', expanded: false },
        { initials: 'FM', color: '#0891b2', name: 'Ferenc Matusek', dept: 'Bar', role: 'Staff', deptBg: '#e0f2fe', deptColor: '#0369a1', expanded: false },
      ].map((m, i) => (
        <div key={i} style={{ background: 'white', border: `2px solid ${m.expanded ? '#2563eb' : '#e9ecf2'}`, borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: 'white', flexShrink: 0 }}>{m.initials}</div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>{m.name}</div>
                <div style={{ fontSize: '11px', color: '#64748b', marginTop: '1px' }}>{m.dept} · Grand Hotel Milano</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '10px', fontWeight: 600, padding: '3px 7px', borderRadius: '5px', background: '#dcfce7', color: '#166534' }}>● Active</span>
              <span style={{ fontSize: '10px', fontWeight: 600, padding: '3px 7px', borderRadius: '5px', background: m.deptBg, color: m.deptColor }}>{m.dept}</span>
              <span style={{ fontSize: '10px', fontWeight: 600, padding: '3px 7px', borderRadius: '5px', background: '#f3f4f6', color: '#374151' }}>{m.role}</span>
              <span style={{ color: '#94a3b8', fontSize: '11px' }}>{m.expanded ? '▲' : '▼'}</span>
            </div>
          </div>
          {m.expanded && (
            <div style={{ padding: '10px 14px', background: '#f8fafc', borderTop: '1px solid #f1f5f9', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {[
                { label: 'Email', value: 's.esposito@hotel.it' },
                { label: 'Phone', value: '+39 333 452 1876' },
                { label: 'Joined', value: '12 Jan 2025' },
                { label: 'Hourly rate', value: '€14.50 / hr' },
              ].map((d, j) => (
                <div key={j} style={{ fontSize: '11px' }}>
                  <div style={{ color: '#94a3b8', marginBottom: '2px' }}>{d.label}</div>
                  <div style={{ color: '#0f172a', fontWeight: 600 }}>{d.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)

const BrowserChrome = ({ url, children }: { url: string; children: React.ReactNode }) => (
  <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 20px 60px rgba(0,0,0,0.12)', background: 'white' }}>
    <div style={{ background: '#f1f5f9', padding: '9px 14px', display: 'flex', alignItems: 'center', gap: '6px', borderBottom: '1px solid #e2e8f0' }}>
      <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#fc5c5c' }}></div>
      <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#fdbd41' }}></div>
      <div style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#34c749' }}></div>
      <div style={{ flex: 1, margin: '0 12px', background: 'white', borderRadius: '5px', padding: '4px 12px', fontSize: '11px', color: '#94a3b8', border: '1px solid #e2e8f0', textAlign: 'center' as const }}>{url}</div>
    </div>
    <div style={{ display: 'flex', height: '520px' }}>
      {children}
    </div>
  </div>
)

export default function AppMockup({ screen }: AppMockupProps) {
  const urls: Record<MockupScreen, string> = {
    dashboard: 'app.planivoapp.com/home',
    shifts: 'app.planivoapp.com/schedule',
    chat: 'app.planivoapp.com/chat',
    team: 'app.planivoapp.com/team',
  }

  return (
    <BrowserChrome url={urls[screen]}>
      <SidebarBase active={screen} />
      {screen === 'dashboard' && <DashboardScreen />}
      {screen === 'shifts' && <ShiftsScreen />}
      {screen === 'chat' && <ChatScreen />}
      {screen === 'team' && <TeamScreen />}
    </BrowserChrome>
  )
}
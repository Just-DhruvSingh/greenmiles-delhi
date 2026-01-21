import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [co2Reduced, setCo2Reduced] = useState(0)
  const [activeUsers, setActiveUsers] = useState(0)
  const [showCalculator, setShowCalculator] = useState(false)
  const [expandedFAQ, setExpandedFAQ] = useState(null)
  const [distance, setDistance] = useState(20)
  const [transport, setTransport] = useState('metro')

  // Animate counters on mount
  useEffect(() => {
    const animateCounter = (setter, target, duration) => {
      let current = 0
      const increment = target / (duration / 50)
      const interval = setInterval(() => {
        current += increment
        if (current >= target) {
          setter(target)
          clearInterval(interval)
        } else {
          setter(Math.floor(current))
        }
      }, 50)
    }

    animateCounter(setCo2Reduced, 2847000, 2000)
    animateCounter(setActiveUsers, 425000, 2000)
  }, [])

  const calculateSavings = () => {
    const emissionRates = { 'metro': 0.04, 'bus': 0.08, 'cycle': 0, 'car': 0.2 }
    const savings = distance * (emissionRates[transport] || 0.2)
    const credits = Math.floor(savings * 2)
    alert(`🌱 You saved ${savings.toFixed(2)}kg CO₂! Earned ${credits} GreenMiles!`)
    setShowCalculator(false)
  }

  const faqItems = [
    { q: "How do I earn GreenMiles?", a: "Earn GreenMiles for every sustainable commute: 4 credits for metro, 2 for bus, 1 for cycling." },
    { q: "What can I redeem GreenMiles for?", a: "Redeem for: Metro/bus passes, electricity bill discounts, local vendor vouchers." },
    { q: "Is my data safe?", a: "Yes! We use Aadhaar verification and enterprise-grade encryption." },
    { q: "How long does verification take?", a: "Instant! Aadhaar verification is real-time." },
    { q: "Can I use this in other cities?", a: "Currently in Delhi pilot. Expanding to NCR and other Indian cities by 2026!" }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">🌱 GreenMiles</div>
          <div className="nav-links">
            <a href="#problem">Problem</a>
            <a href="#solution">Solution</a>
            <a href="#impact">Impact</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="badge">🌱 Delhi Rejuvenation Mission</div>
              <h1>Rewarding Cleaner Choices</h1>
              <p>Earn carbon credits for sustainable mobility. Transform Delhi, one commute at a time.</p>
              <div className="hero-buttons">
                <button className="btn btn-primary" onClick={() => setShowCalculator(true)}>
                  Calculate Savings →
                </button>
              </div>
              <div className="hero-stat">
                <span className="stat-value">10M+</span>
                <span className="stat-label">Delhi Vehicles Daily</span>
              </div>
            </div>
            <div className="hero-image">
              <div className="aqi-badge">
                <span className="aqi-value">188</span>
                <span className="aqi-label">PM2.5 AQI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="section problem-section">
        <div className="container">
          <h2>The Challenge</h2>
          <p className="section-subtitle">Delhi faces severe air pollution and traffic congestion</p>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🚗</div>
              <h3>10M Vehicles Daily</h3>
              <p>40% of emissions from private vehicles</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💨</div>
              <h3>188 AQI - Unhealthy</h3>
              <p>PM2.5 21x higher than WHO safe levels</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <h3>Incentive Gap</h3>
              <p>No rewards for sustainable choices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="section solution-section">
        <div className="container">
          <h2>How GreenMiles Works</h2>
          <p className="section-subtitle">Simple, elegant, and rewarding</p>
          
          <div className="steps-grid">
            {[
              { num: 1, title: "Onboarding", desc: "Download app, verify with Aadhaar", icon: "📱" },
              { num: 2, title: "Commute", desc: "Use metro, bus, cycle, or carpool", icon: "🚇" },
              { num: 3, title: "Earn", desc: "System calculates CO₂ saved", icon: "📊" },
              { num: 4, title: "Collect", desc: "GreenMiles in your wallet", icon: "💰" },
              { num: 5, title: "Redeem", desc: "Discounts, vouchers, rewards", icon: "🎁" }
            ].map(step => (
              <div key={step.num} className="step-card">
                <div className="step-icon">{step.icon}</div>
                <h3>Step {step.num}: {step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="section impact-section">
        <div className="container">
          <h2>Year 1 Impact</h2>
          <p className="section-subtitle">Measurable results from citizen participation</p>
          
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-value">{co2Reduced.toLocaleString()}</div>
              <div className="impact-label">tons CO₂ Reduced</div>
            </div>
            <div className="impact-card">
              <div className="impact-value">{activeUsers.toLocaleString()}</div>
              <div className="impact-label">Active Citizens</div>
            </div>
            <div className="impact-card">
              <div className="impact-value">₹5 Cr</div>
              <div className="impact-label">Rewards Given</div>
            </div>
            <div className="impact-card">
              <div className="impact-value">89</div>
              <div className="impact-label">Clean Days</div>
            </div>
          </div>

          <div className="roadmap">
            <h3>3-Phase Rollout Plan</h3>
            <div className="roadmap-grid">
              <div className="roadmap-card">
                <h4>Phase 1 • 6 Months</h4>
                <p><strong>South Delhi Pilot</strong></p>
                <p>50K citizens, 500 tons CO₂</p>
              </div>
              <div className="roadmap-card">
                <h4>Phase 2 • 12 Months</h4>
                <p><strong>City-Wide Rollout</strong></p>
                <p>500K citizens, 5K tons CO₂</p>
              </div>
              <div className="roadmap-card">
                <h4>Phase 3 • 24 Months</h4>
                <p><strong>NCR Expansion</strong></p>
                <p>2M citizens, 50K tons CO₂</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know</p>
          
          <div className="faq-container">
            {faqItems.map((item, idx) => (
              <div key={idx} className="faq-item">
                <button 
                  className="faq-question"
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                >
                  <span>{item.q}</span>
                  <span className="faq-toggle">{expandedFAQ === idx ? '−' : '+'}</span>
                </button>
                {expandedFAQ === idx && (
                  <div className="faq-answer">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <h2>Ready to Make Delhi Greener?</h2>
          <p>Join thousands of citizens already earning rewards for sustainable mobility.</p>
          <button className="btn btn-primary btn-large" onClick={() => setShowCalculator(true)}>
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>GreenMiles Delhi</h4>
              <p>Rewarding cleaner choices, one commute at a time.</p>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Email: hello@greenmiles.delhi</p>
              <p>Phone: +91 11 XXXX XXXX</p>
            </div>
            <div className="footer-section">
              <h4>Follow Us</h4>
              <p>Twitter • LinkedIn • Instagram</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 GreenMiles Delhi. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Calculator Modal */}
      {showCalculator && (
        <div className="modal-overlay" onClick={() => setShowCalculator(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Calculate Your Savings</h3>
              <button className="modal-close" onClick={() => setShowCalculator(false)}>×</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Daily Commute Distance (km)</label>
                <input 
                  type="number" 
                  value={distance} 
                  onChange={e => setDistance(parseInt(e.target.value) || 0)}
                  min="0"
                />
              </div>
              <div className="form-group">
                <label>Transport Mode</label>
                <select value={transport} onChange={e => setTransport(e.target.value)}>
                  <option value="car">Personal Car</option>
                  <option value="metro">Metro</option>
                  <option value="bus">Bus</option>
                  <option value="cycle">Cycle</option>
                </select>
              </div>
              <div className="savings-result">
                <p>Your daily CO₂ savings: <strong>{(distance * (transport === 'metro' ? 0.04 : transport === 'bus' ? 0.08 : transport === 'cycle' ? 0 : 0.2)).toFixed(2)} kg</strong></p>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" onClick={calculateSavings}>Calculate & Join</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

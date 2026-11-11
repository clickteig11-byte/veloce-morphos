import { useState } from 'react';

export default function App() {
  const [metricValue, setMetricValue] = useState(85);
  const [activeTab, setActiveTab] = useState<'HIGH-DOWNFORCE' | 'VENTURI-FLOOR' | 'DRY-SUMP V12'>('HIGH-DOWNFORCE');

  const dynamicCd = (0.245 + (metricValue / 100) * 0.04).toFixed(3);
  const dynamicDownforce = Math.round(280 + (metricValue / 100) * 100);

  return (
    <div>
      {/* ARCHITECTURAL EDGE HEADER */}
      <header className="site-edge-header">
        <div className="edge-brand-lockup">
          <a href="#top" className="edge-brand">
            Veloce Morphos
          </a>
          <span className="edge-coords">TORINO · MONZA // FIA APP. J ART. 257</span>
        </div>

        <nav className="edge-nav-links" aria-label="Primary Navigation">
          <a href="#details" onClick={() => setActiveTab('HIGH-DOWNFORCE')}>DOWNFORCE</a>
          <a href="#details" onClick={() => setActiveTab('VENTURI-FLOOR')}>VENTURI FLOOR</a>
          <a href="#details" onClick={() => setActiveTab('DRY-SUMP V12')}>POWERTRAIN</a>
        </nav>

        <a href="#inquire" className="edge-action-btn">
          COMMISSION CHASSIS
        </a>
      </header>

      {/* FULL-BLEED ARCHITECTURAL HERO */}
      <header id="top" className="hero-fullbleed">
        <img
          src="/references/sites/site-6-veloce.jpg"
          alt="VELOCE MORPHOS // AERODINAMICA TORINO"
          className="hero-bg-photo"
        />
        <div className="hero-scrim" />

        <div className="hero-body">
          <div className="hero-copy-stack">
            <span className="hero-small-label">TIPO 04 GT · CHASSIS 007 · HOMOLOGATED</span>
            <h1 className="hero-title">
              TIPO 04 CARBON GT
              <span className="hero-subline">AERODYNAMICS SHAPED BY SPEED.</span>
            </h1>
            <p className="hero-lead">
              Autoclaved Torayca T800 high-modulus prepreg carbon composite coachwork with active ground-effect Venturi tunnels and 720hp naturally aspirated dry-sump V12.
            </p>
            <a href="#details" className="editorial-cta-btn">
              Explore Specification
            </a>
          </div>

          <div className="hero-quiet-caption" aria-label="Motorsport Telemetry Readouts">
            <span>0.285 CD HIGH-DOWNFORCE</span>
            <span>·</span>
            <span>380 KG @ 250 KM/H</span>
            <span>·</span>
            <span>TORAYCA T800 CARBON</span>
          </div>
        </div>
      </header>

      {/* INTERACTIVE WORKBENCH */}
      <section id="details" className="lab-section">
        <div className="lab-grid">
          <div>
            <span className="hero-small-label">AERODYNAMIC TELEMETRY // WIND-TUNNEL VALIDATION</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--ink-primary)' }}>
              Precision Motorsport Telemetry
            </h2>
            <p style={{ color: 'var(--ink-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
              Full-scale wind-tunnel telemetry measured at 250 km/h with active underbody Venturi strakes and autoclaved high-modulus prepreg composite tooling.
            </p>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--ink-muted)' }}>DOWNFORCE ENVELOPE CALIBRATION</span>
                <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>{metricValue}% VELOCITY TRIM</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={metricValue}
                onChange={(e) => setMetricValue(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--accent-color)', cursor: 'pointer' }}
                aria-label="Downforce Envelope Calibration"
              />
            </div>

            <table className="spec-table">
              <tbody>
                <tr>
                  <td className="spec-label">ACTIVE SUB-SYSTEM</td>
                  <td className="spec-value">{activeTab}</td>
                </tr>
                <tr>
                  <td className="spec-label">DRAG COEFFICIENT (Cd)</td>
                  <td className="spec-value">0.285 in high-downforce trim <span style={{ fontSize: '0.75rem', color: 'var(--ink-muted)' }}>({dynamicCd} current)</span></td>
                </tr>
                <tr>
                  <td className="spec-label">NET AERO DOWNFORCE</td>
                  <td className="spec-value">380 kg @ 250 km/h (front/rear balance 44/56)</td>
                </tr>
                <tr>
                  <td className="spec-label">MONOCOQUE MATERIAL</td>
                  <td className="spec-value">Torayca T800 high-modulus prepreg carbon composite</td>
                </tr>
                <tr>
                  <td className="spec-label">HOMOLOGATION</td>
                  <td className="spec-value" style={{ color: 'var(--accent-color)' }}>FIA Appendix J Article 257 compliant</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="lab-display-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-soft)', paddingBottom: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-color)', fontWeight: 600 }}>
                UNDERBODY VENTURI PRESSURE MAP
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--ink-muted)' }}>
                DYNAMIC LOAD: {dynamicDownforce} KG
              </span>
            </div>

            <div style={{ height: '240px', display: 'flex', alignItems: 'flex-end', gap: '8px', background: '#ffffff', padding: '1rem', border: '1px solid var(--border-soft)' }}>
              {[30, 45, 60, 40, 75, 90, 85, 95, 70, 80, 65, 88].map((base, idx) => {
                const height = Math.min(100, Math.round((base * metricValue) / 85));
                return (
                  <div
                    key={idx}
                    style={{
                      flex: 1,
                      height: `${height}%`,
                      background: idx % 2 === 0 ? 'var(--accent-color)' : 'rgba(15, 17, 21, 0.25)',
                      transition: 'height 0.2s ease'
                    }}
                  />
                );
              })}
            </div>

            <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--ink-muted)' }}>
              <span>SUCTION VENTURI DIFFUSER</span>
              <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>LAMINAR BOUNDARY ATTACHED</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="inquire" style={{ borderTop: '1px solid var(--border-soft)', padding: '3.5rem', textAlign: 'center', background: 'var(--surface-color)' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--ink-primary)' }}>
          Veloce Morphos
        </p>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--ink-muted)', letterSpacing: '0.1em' }}>
          TORINO · MONZA // FIA APPENDIX J ARTICLE 257 · ALLOCATIONS OPEN FOR 2026
        </p>
      </footer>
    </div>
  );
}

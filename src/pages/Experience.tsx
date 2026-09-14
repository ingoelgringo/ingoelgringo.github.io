import { timeline, skillsPrimary, skillsSecondary } from '../data';
import './Experience.css';

export default function Experience() {
  return (
    <section className="page-enter section">
      <p className="eyebrow">Erfarenhet &amp; utbildning</p>
      <h2 className="section-title" style={{ marginBottom: 48 }}>
        Min väg hit
      </h2>

      <div className="timeline">
        {timeline.map((item) => (
          <div key={item.title} className="timeline-item">
            <div className="timeline-period">{item.period}</div>
            <div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-org">{item.org}</p>
              <p className="timeline-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="skills">
        <h3 className="skills-title">Kompetenser</h3>
        <div className="skills-grid">
          <div>
            <p className="skills-label skills-label--primary">Erfarenhet av</p>
            <div className="skills-tags">
              {skillsPrimary.map((s) => (
                <span key={s} className="skill-tag">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="skills-label">Bekant med</p>
            <div className="skills-tags">
              {skillsSecondary.map((s) => (
                <span key={s} className="skill-tag skill-tag--dim">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

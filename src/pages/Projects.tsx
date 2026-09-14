import { projects } from '../data';
import './Projects.css';

export default function Projects() {
  return (
    <section className="page-enter section">
      <p className="eyebrow">Projekt</p>
      <h2 className="section-title">Byggt efter examen, med Claude Code</h2>
      <p className="section-intro">
        Två egna fullstack-projekt jag byggde på egen hand efter utbildningen, för att fortsätta
        öva på verklig produktutveckling och nya tekniker som Server Components och Server
        Actions.
      </p>

      <div className="project-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <div className="project-thumb">
              <span>[ skärmdump / demo ]</span>
            </div>
            <div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
            </div>
            <div className="project-tags">
              {p.tags.map((tag) => (
                <span key={tag} className="tag tag--blue">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';
import { techStack, testimonial } from '../data';
import './Home.css';

export default function Home() {
  return (
    <section className="page-enter">
      <div className="hero">
        <div>
          <p className="eyebrow">Fullstackutvecklare · JavaScript</p>
          <h1 className="hero-title">
            Jag bygger fullstack-
            <br />
            produkter från idé till drift.
          </h1>
          <p className="hero-text">
            Nyutbildad fullstackutvecklare med fokus på TypeScript, React och Node.js. Under min
            praktik på ScopeWorks byggde jag system för filtrering och visualisering av loggdata
            — och sedan examen har jag fortsatt bygga egna produkter, med hjälp av AI-verktyg som
            Claude Code, för att skärpa mig inom prestanda, skalbarhet och systemdesign.
          </p>
          <div className="hero-actions">
            <Link to="/projekt" className="btn btn--primary">
              Se mina projekt
            </Link>
            <Link to="/kontakt" className="btn btn--outline">
              Kontakta mig
            </Link>
          </div>
        </div>
        <div className="hero-photo">
          <img src="/profilbild.jpg" alt="Porträttbild" />
        </div>
      </div>

      <div className="tech-stack">
        <span className="tech-stack-label">Tech stack:</span>
        {techStack.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <div className="testimonial">
        <div className="quote-mark">&ldquo;</div>
        <div>
          <p className="quote-text">{testimonial.quote}</p>
          <p className="quote-name">{testimonial.name}</p>
          <p className="quote-role">{testimonial.role}</p>
        </div>
        <div className="quote-mark quote-mark--end">&rdquo;</div>
      </div>
    </section>
  );
}

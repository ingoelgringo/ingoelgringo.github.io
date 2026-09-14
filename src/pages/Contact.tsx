import { useState } from 'react';
import { contact } from '../data';
import './Contact.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendMail = () => {
    const subject = encodeURIComponent('Kontakt från portfolion – ' + (name || 'besökare'));
    const body = encodeURIComponent(
      (message || '') + '\n\n— ' + (name || '') + (email ? ' (' + email + ')' : ''),
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="page-enter section">
      <p className="eyebrow">Kontakt</p>
      <h2 className="section-title" style={{ marginBottom: 48 }}>
        Hör av dig
      </h2>

      <div className="contact-grid">
        <div>
          <p className="contact-intro">
            Söker en fullstackutvecklare eller vill bara säga hej? Jag svarar gärna på frågor om
            mina projekt, min bakgrund eller möjliga roller.
          </p>
          <div className="contact-links">
            <a href={`mailto:${contact.email}`} className="contact-link">
              <span className="dot dot--accent" />
              {contact.email}
            </a>
            <a href={`tel:${contact.phone}`} className="contact-link">
              <span className="dot dot--accent" />
              {contact.phoneDisplay}
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="contact-link">
              <span className="dot dot--blue" />
              {contact.linkedinDisplay}
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer" className="contact-link">
              <span className="dot dot--blue" />
              {contact.githubDisplay}
            </a>
          </div>
          <a
            href={`mailto:${contact.email}?subject=Skicka%20mig%20ditt%20CV`}
            className="btn btn--outline"
            style={{ marginTop: 36 }}
          >
            Begär CV (PDF) ↓
          </a>
        </div>

        <div className="contact-form">
          <div>
            <label className="form-label">Namn</label>
            <input
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ditt namn"
            />
          </div>
          <div>
            <label className="form-label">E-post</label>
            <input
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="din@epost.se"
            />
          </div>
          <div>
            <label className="form-label">Meddelande</label>
            <textarea
              className="form-input"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Vad vill du säga?"
            />
          </div>
          <button onClick={sendMail} className="btn btn--primary" style={{ marginTop: 4 }}>
            Skicka meddelande
          </button>
        </div>
      </div>
    </section>
  );
}

import { NavLink } from 'react-router-dom';
import './Header.css';

const navItems = [
  { to: '/', label: 'Om mig' },
  { to: '/projekt', label: 'Projekt' },
  { to: '/erfarenhet', label: 'Erfarenhet' },
  { to: '/kontakt', label: 'Kontakt' },
];

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="logo" end>
        Ingemar Berghult
      </NavLink>
      <nav className="nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) => `nav-link${isActive ? ' nav-link--active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <a href="mailto:ingemar.berghult@gmail.com" className="contact-btn">
        Kontakta mig
      </a>
    </header>
  );
}

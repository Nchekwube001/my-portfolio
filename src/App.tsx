import { EXPERIENCES, myEmail, PROJECTS } from "./constants/utils";
import portrait from "./assets/portrait.jpg";
import ufLogo from "./assets/myLogo.svg";

const technologies = [
  "React Native",
  "Flutter",
  "Kotlin",
  "Swift",
  "TypeScript",
  "Node.js",
];

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Unekwe Francis, home">
          <img className="wordmark-logo" src={ufLogo} alt="" />
          <span>Unekwe Francis</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work <span>{String(PROJECTS.length).padStart(2, "0")}</span></a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="nav-contact">Let’s talk <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="top">
        <section className="intro-section" aria-labelledby="intro-title">
          <div className="intro-copy">
            <p className="eyebrow"><span className="status-dot" /> Senior mobile engineer <span className="eyebrow-divider">/</span> 6+ years</p>
            <h1 id="intro-title">I build mobile products <em>people rely on.</em></h1>
            <p className="intro-description">
              I’m Francis, a software engineer working across fintech, health, and commerce. I take products from architecture to production, with care for the details people feel every day.
            </p>
            <div className="intro-actions">
              <a className="button button-primary" href="#work">Explore selected work <span aria-hidden="true">↓</span></a>
              <a className="text-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Read my résumé <span aria-hidden="true">↗</span></a>
            </div>
            <div className="intro-proof" aria-label="Experience highlights">
              <div><strong>12+</strong><span>apps shipped</span></div>
              <div><strong>1M+</strong><span>users reached</span></div>
              <p>Across iOS and Android</p>
            </div>
          </div>
          <figure className="portrait-frame">
            <img src={portrait} alt="Unekwe Francis" />
            <figcaption><span>UNEKWE FRANCIS</span><span>ENGINEER / BUILDER</span></figcaption>
            <span className="portrait-index" aria-hidden="true">01</span>
          </figure>
          <a className="scroll-note" href="#work"><span className="scroll-line" /> Scroll to explore</a>
        </section>

        <section className="work-section section-wrap" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A few things I’ve helped bring to life</p>
              <h2 id="work-title">Selected work<span className="accent-period">.</span></h2>
            </div>
            <p className="section-aside">Mobile experiences for everyday life, built with teams who care about getting the details right.</p>
          </div>

          <div className="project-list">
            {PROJECTS.map(({ title, desc, icon, appUrl, playUrl }, index) => (
              <article className="project-row" key={title}>
                <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
                <div className={`project-art project-art-${index % 4}`}>
                  <span className="art-corner art-corner-top" aria-hidden="true" />
                  <img src={icon} alt={`${title} logo`} loading="lazy" decoding="async" />
                  <span className="art-corner art-corner-bottom" aria-hidden="true" />
                </div>
                <div className="project-info">
                  <div className="project-title-line">
                    <h3>{title}</h3>
                    <span className="project-arrow" aria-hidden="true">↗</span>
                  </div>
                  <p>{desc}</p>
                  <div className="project-links">
                    {appUrl && <a href={appUrl} target="_blank" rel="noopener noreferrer" aria-label={`${title} on the App Store`}>App Store <span aria-hidden="true">↗</span></a>}
                    {playUrl && <a href={playUrl} target="_blank" rel="noopener noreferrer" aria-label={`${title} on Google Play`}>Google Play <span aria-hidden="true">↗</span></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience" aria-labelledby="experience-title">
          <div className="section-heading experience-heading">
            <div>
              <p className="eyebrow">The teams and products along the way</p>
              <h2 id="experience-title">Experience<span className="accent-period">.</span></h2>
            </div>
            <p className="section-aside">Building dependable products with people across engineering, design, and product.</p>
          </div>
          <div className="experience-list">
            {EXPERIENCES.map(({ company, icon, role, year }) => (
              <article className="experience-row" key={`${company}-${role}`}>
                <div className="experience-company">
                  <img src={icon} alt="" loading="lazy" decoding="async" />
                  <h3>{company}</h3>
                </div>
                <p>{role}</p>
                <span className="experience-years">{year}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="craft-section section-wrap" aria-labelledby="craft-title">
          <div className="craft-intro">
            <p className="eyebrow">Tools I use to make it real</p>
            <h2 id="craft-title">Good craft, <em>good tools.</em></h2>
          </div>
          <ul className="tech-list" aria-label="Technologies">
            {technologies.map((technology, index) => (
              <li key={technology}><span>{String(index + 1).padStart(2, "0")}</span>{technology}</li>
            ))}
          </ul>
          <p className="craft-note">I choose the tools that fit the product, the team, and the people using it.</p>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-inner">
            <p className="eyebrow">Have a good one in mind?</p>
            <h2 id="contact-title">Let’s make<br /><em>it matter.</em></h2>
            <a className="contact-email" href={`mailto:${myEmail}`}>{myEmail}<span aria-hidden="true">↗</span></a>
          </div>
          <div className="contact-footer">
            <a className="wordmark footer-wordmark" href="#top"><img className="wordmark-logo" src={ufLogo} alt="" /><span>Unekwe Francis</span></a>
            <p>Thoughtful software, made with care.</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/unekwe-francis-56485b1ba" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
              <a href="https://github.com/Nchekwube001" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a href="https://x.com/frxnsix_?s=21&t=QJ8FjRTEBefSuT7Z11VUPg" target="_blank" rel="noopener noreferrer">X <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

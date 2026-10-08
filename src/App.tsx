import { useState } from "react";
import {
  EXPERIENCES,
  myEmail,
  PROJECTS,
  type ProjectSector,
} from "./constants/utils";
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
const projectFilters: Array<"All work" | ProjectSector> = [
  "All work",
  "Money",
  "Health",
  "Energy",
  "Safety",
  "Insurance",
  "Relationships",
  "Community",
];

function App() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof projectFilters)[number]>("All work");
  const [appearance, setAppearance] = useState<"light" | "dark">("light");
  const visibleProjects =
    activeFilter === "All work"
      ? PROJECTS
      : PROJECTS.filter((project) => project.sector === activeFilter);
  const heroProjects = PROJECTS.slice(0, 3);

  return (
    <div className="portfolio-page" data-theme={appearance}>
      <header className="topbar page-width">
        <a className="brand" href="#home" aria-label="Unekwe Francis, home">
          <img src={ufLogo} alt="" />
          <span>Unekwe Francis</span>
        </a>
        <nav className="top-nav" aria-label="Main navigation">
          <a href="#work">
            Work <span>{String(PROJECTS.length).padStart(2, "0")}</span>
          </a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <button
          className="appearance-button"
          type="button"
          onClick={() =>
            setAppearance(appearance === "light" ? "dark" : "light")
          }
          aria-label={`Switch to ${appearance === "light" ? "dark" : "light"} appearance`}
        >
          <span aria-hidden="true">{appearance === "light" ? "◐" : "☼"}</span>
          <span className="appearance-label">
            {appearance === "light" ? "Dark" : "Light"}
          </span>
        </button>
      </header>

      <main id="home">
        <section className="hero page-width" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="availability">
              <span aria-hidden="true" /> Senior mobile engineer
            </p>
            <h1 id="hero-title">
              I build mobile products for <span>real life.</span>
            </h1>
            <p className="hero-description">
              I’m Francis, a software engineer working across fintech, health,
              and everyday services. I take products from architecture to
              production, with care for the details people feel every day.
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#work">
                See what I’ve built <span aria-hidden="true">↘</span>
              </a>
              <a
                className="secondary-link"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Résumé <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="hero-meta" aria-label="Areas of work">
              <span>iOS &amp; Android</span>
              <span>Product engineering</span>
              <span>Fintech to everyday life</span>
            </div>
          </div>

          <aside
            className="hero-aside"
            aria-label="A few products I’ve helped build"
          >
            <div className="product-board">
              <div className="product-board-heading">
                <span>SELECTED PRODUCTS</span>
                <span>01 — 03</span>
              </div>
              <figure className="portrait-card">
                <img src={portrait} alt="Unekwe Francis" />
                <figcaption>
                  <strong>Unekwe Francis</strong>
                  <span>Engineer · Builder</span>
                </figcaption>
                <span className="portrait-card-mark" aria-hidden="true">
                  UF
                </span>
              </figure>
              <p className="product-board-caption">
                A few products I’ve helped bring to life.
              </p>
              <div className="product-board-list">
                {heroProjects.map(({ title, icon }, index) => (
                  <div className="product-board-item" key={title}>
                    <span className="product-board-number">0{index + 1}</span>
                    <img src={icon} alt="" />
                    <span>{title}</span>
                    <span className="product-board-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section
          className="work-section page-width"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-intro">
            <div>
              <p className="section-index">01 / Work</p>
              <h2 id="work-title">Products in people’s hands.</h2>
            </div>
            <p className="section-summary">
              A selection of apps I’ve helped take from an idea to the App Store
              and Google Play.
            </p>
          </div>

          <div className="filter-bar" aria-label="Filter projects by category">
            {projectFilters.map((filter) => (
              <button
                className={
                  activeFilter === filter
                    ? "filter-chip is-active"
                    : "filter-chip"
                }
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
                {filter === "All work" && <span>{PROJECTS.length}</span>}
              </button>
            ))}
          </div>

          <div className="project-grid" aria-live="polite">
            {visibleProjects.map(
              ({ title, desc, icon, appUrl, playUrl, sector }) => (
                <article
                  className={
                    title === "DOT Business"
                      ? "project-card project-card-featured"
                      : "project-card"
                  }
                  key={title}
                >
                  <div className="project-card-head">
                    <div className="project-icon-wrap">
                      <img
                        src={icon}
                        alt={`${title} app icon`}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <span className="sector-tag">{sector}</span>
                    {title === "DOT Business" && (
                      <span className="featured-tag">Featured work</span>
                    )}
                  </div>
                  <div className="project-card-copy">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                  <div className="project-card-foot">
                    <span className="project-type">Mobile application</span>
                    <div className="store-links">
                      {appUrl && (
                        <a
                          href={appUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${title} on the App Store`}
                        >
                          App Store <span aria-hidden="true">↗</span>
                        </a>
                      )}
                      {playUrl && (
                        <a
                          href={playUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${title} on Google Play`}
                        >
                          Google Play <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
        </section>

        <section
          className="experience-section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="experience-inner page-width">
            <div className="section-intro">
              <div>
                <p className="section-index">02 / Experience</p>
                <h2 id="experience-title">Good work takes a team.</h2>
              </div>
              <p className="section-summary">
                The people and product teams I’ve had the chance to build
                alongside.
              </p>
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
          </div>
        </section>

        <section
          className="toolkit-section page-width"
          aria-labelledby="toolkit-title"
        >
          <div className="toolkit-heading">
            <p className="section-index">03 / Toolkit</p>
            <h2 id="toolkit-title">
              The tools change.
              <br />
              The care doesn’t.
            </h2>
          </div>
          <div className="toolkit-content">
            <p>
              I work across native and cross-platform mobile stacks, choosing
              what fits the product and the people using it.
            </p>
            <ul className="technology-list" aria-label="Technologies">
              {technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-inner page-width">
            <p className="section-index">04 / Get in touch</p>
            <h2 id="contact-title">
              Have a product
              <br />
              worth building?
            </h2>
            <div className="contact-bottom">
              <a className="contact-email" href={`mailto:${myEmail}`}>
                {myEmail}
                <span aria-hidden="true">↗</span>
              </a>
              <a
                className="resume-link"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open my résumé ↗
              </a>
            </div>
          </div>
          <footer className="site-footer page-width">
            <a className="brand footer-brand" href="#home">
              <img src={ufLogo} alt="" />
              <span>Unekwe Francis</span>
            </a>
            <p>Built with attention to the little things.</p>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/unekwe-francis-56485b1ba"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/Nchekwube001"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://x.com/frxnsix_?s=21&t=QJ8FjRTEBefSuT7Z11VUPg"
                target="_blank"
                rel="noopener noreferrer"
              >
                X ↗
              </a>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default App;

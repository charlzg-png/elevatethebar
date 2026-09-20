import { MenuExplorer } from "./MenuExplorer";
import { locations } from "../content/locations";

const events = [
  {
    category: "PLAY",
    title: "A little friendly competition",
    copy: "Find local game nights and see what is happening at your lounge.",
    image: "/images/elevate-event-pool.jpg",
    alt: "Concept image of a social pool night, not a photograph of a confirmed event",
  },
  {
    category: "THINK",
    title: "Bring your people",
    copy: "Ask about group games and upcoming trivia at your location.",
    image: "/images/elevate-event-trivia.jpg",
    alt: "Concept image showing the atmosphere of a trivia gathering",
  },
  {
    category: "LISTEN",
    title: "Find the local rhythm",
    copy: "Music and programming should fit the room. Check the local lineup.",
    image: "/images/elevate-event-live.jpg",
    alt: "Concept image of an intimate music session, not an announced performance",
  },
  {
    category: "COLLAB",
    title: "Something to build together",
    copy: "Have a local collaboration in mind? Start a conversation with the team.",
    image: "/images/elevate-event-collab.jpg",
    alt: "Concept image exploring a beverage and merchandise collaboration",
  },
];

const firstVisitSteps = [
  { number: "01", title: "Start with flavor", copy: "Tell us what you usually like. Sweet, tart, bright, creamy, or simple." },
  { number: "02", title: "Let us guide you", copy: "We will explain the formats and ingredients clearly, without the lecture." },
  { number: "03", title: "Find your spot", copy: "Come solo or bring friends. Ask your host where you can settle in." },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand-lockup${light ? " brand-lockup-light" : ""}`}>
      <img src={light ? "/elevate-mark-white.png" : "/elevate-mark-teal.png"} alt="" />
      <span><strong>ELEVATE</strong><small>SOCIAL LOUNGE</small></span>
    </span>
  );
}

export default function Home() {
  return (
    <main id="top" className="bar-site">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="preview-notice">Website concept preview <span>For current menus, hours, and events, check your lounge.</span><a href="#locations">Location links ↗</a></div>

      <header className="site-header bar-header">
        <a className="brand-link" href="#top" aria-label="Elevate Social Lounge home"><Brand light /></a>
        <nav aria-label="Main navigation">
          <a href="#events">What&apos;s on</a>
          <a href="#menu">Drinks</a>
          <a href="#first-visit">First visit</a>
          <a href="#locations">Locations</a>
        </nav>
        <a className="header-cta" href="#locations">Find your lounge <Arrow /></a>
      </header>

      <div id="main-content">
        <section className="bar-hero">
          <img className="bar-hero-image" src="/images/elevate-evening-hero.jpg" alt="Concept image of a warm, lively alcohol-free social lounge" fetchPriority="high" />
          <div className="bar-hero-shade" />
          <div className="bar-hero-content">
            <p className="bar-kicker"><span /> Maitland + Estero, Florida</p>
            <h1>Meet me<br />at <em>Elevate.</em></h1>
            <p>Zero-proof drinks. Full bar energy. Pull up a seat, find your people, and make the night your own.</p>
            <div className="bar-hero-actions">
              <a className="button bar-button-light" href="#events">See what&apos;s on <span aria-hidden="true">↓</span></a>
              <a className="button bar-button-ghost" href="#menu">Explore the drinks <Arrow /></a>
            </div>
          </div>
          <div className="bar-arrival">
            <div><span>TONIGHT&apos;S MOVE</span><strong>Choose your room</strong></div>
            {locations.map((location) => (
              <a key={location.city} href={location.instagram} target="_blank" rel="noreferrer">
                <span>{location.city}</span><strong>See the local lineup</strong><Arrow />
              </a>
            ))}
          </div>
        </section>

        <div className="bar-marquee" aria-label="Elevate experience statement">
          <div>ZERO PROOF <span>◆</span> FULL NIGHT OUT <span>◆</span> COME AS YOU ARE <span>◆</span> GOOD PEOPLE <span>◆</span> LOCAL ENERGY <span>◆</span></div>
        </div>

        <section className="bar-events" id="events">
          <div className="bar-section-head">
            <div><p className="bar-kicker dark">WHAT&apos;S ON</p><h2>Come for a drink.<br /><em>Stay for the night.</em></h2></div>
            <div className="bar-section-intro">
              <p>Different rooms. Different regulars. A local calendar that makes each lounge its own.</p>
              <small>Explore the possibilities below. These are concept scenes, not scheduled events. Confirm dates and details on each lounge&apos;s Instagram.</small>
            </div>
          </div>

          <div className="bar-event-grid">
            {events.map((event, index) => (
              <article className="bar-event-card" key={event.title}>
                <img src={event.image} alt={event.alt} loading="lazy" decoding="async" />
                <div className="bar-event-gradient" />
                <div className="bar-event-copy">
                  <div><span>{event.category}</span><span>0{index + 1}</span></div>
                  <h3>{event.title}</h3>
                  <p>{event.copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="bar-event-actions">
            <p>See the latest posts. Confirm the date and location before you go.</p>
            <div>
              <a className="button button-primary" href="https://www.instagram.com/elevatesociallounge/" target="_blank" rel="noreferrer">Maitland lineup <Arrow /></a>
              <a className="button button-outline" href="https://www.instagram.com/elevateestero/" target="_blank" rel="noreferrer">Estero lineup <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="bar-menu" id="menu">
          <div className="bar-menu-heading">
            <div><p className="bar-kicker">AT THE BAR</p><h2>Find your flavor.<br /><em>Know your drink.</em></h2></div>
            <p>Familiar flavors, crafted presentation, and clear guidance. Ask a host about ingredients, formats, and what is available today.</p>
          </div>

          <div className="bar-drink-gallery">
            <figure><img src="/images/elevate-drink-citrus.jpg" alt="Concept citrus drink photography" loading="lazy" decoding="async" /><figcaption><span>BRIGHT</span>Citrus inspiration</figcaption></figure>
            <figure><img src="/images/elevate-drink-berry.jpg" alt="Concept berry drink photography" loading="lazy" decoding="async" /><figcaption><span>BOLD</span>Berry inspiration</figcaption></figure>
            <figure><img src="/images/elevate-drink-espresso.jpg" alt="Concept creamy iced drink photography" loading="lazy" decoding="async" /><figcaption><span>SMOOTH</span>Creamy inspiration</figcaption></figure>
          </div>
          <p className="image-disclosure">Drink images show the creative direction. They are not a list of items available to order.</p>

          <MenuExplorer />
        </section>

        <section className="bar-first-visit" id="first-visit">
          <div className="bar-first-image">
            <img src="/images/elevate-first-visit.jpg" alt="Concept image of a host welcoming two guests at the bar" loading="lazy" decoding="async" />
            <span>FIRST TIME? SIT AT THE BAR.</span>
          </div>
          <div className="bar-first-copy">
            <p className="bar-kicker dark">NEW HERE?</p>
            <h2>You do not need<br />to know <em>the language.</em></h2>
            <p>Tell us what sounds good and what kind of night you want. We will help you make the first order easy.</p>
            <div className="bar-service-list">
              {firstVisitSteps.map((step) => (
                <article key={step.title}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.copy}</p></div></article>
              ))}
            </div>
          </div>
        </section>

        <section className="bar-promise">
          <div><img src="/elevate-mark-white.png" alt="" /></div>
          <blockquote>“A real night out does not need alcohol at the center of it.”</blockquote>
          <div className="bar-promise-points">
            <p><span>01</span><strong>Clear choices</strong>Ask about the flavor, ingredients, serving information, and price.</p>
            <p><span>02</span><strong>Welcoming</strong>Fast acknowledgment, clear guidance, and no insider attitude.</p>
            <p><span>03</span><strong>Alive</strong>Music, lighting, service, and programming move with the room.</p>
          </div>
        </section>

        <section className="locations bar-locations" id="locations">
          <div className="bar-section-head">
            <div><p className="bar-kicker dark">FIND YOUR LOUNGE</p><h2>Two rooms.<br /><em>One warm welcome.</em></h2></div>
            <div className="bar-section-intro"><p>Start with the closest location. Each lounge carries the same Elevate promise with its own local energy.</p></div>
          </div>
          <div className="location-grid">
            {locations.map((location, index) => (
              <article className="location-card" key={location.city}>
                <div className="location-top"><span>0{index + 1}</span><p>{location.note}</p></div>
                <h3>{location.city}</h3>
                <address>{location.address}</address>
                <p className="open-daily">PLAN YOUR VISIT <span>Check with the lounge for today&apos;s hours, menu, and events.</span></p>
                {location.phone && <a className="phone" href={`tel:${location.phoneHref}`}>{location.phone}</a>}
                <div className="location-actions">
                  <a className="button button-primary" href={location.directions} target="_blank" rel="noreferrer">Directions <Arrow /></a>
                  {location.menu && <a href={location.menu} target="_blank" rel="noreferrer">Location menu <Arrow /></a>}
                  <a href={location.instagram} target="_blank" rel="noreferrer">{location.menu ? "Local updates" : "Menu + local updates"} <Arrow /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bar-private">
          <div><p className="bar-kicker">PARTNERSHIPS + PRIVATE EVENTS</p><h2>Your idea.<br /><em>Our room.</em></h2></div>
          <div><p>Have a gathering or collaboration in mind? Talk to your location about the idea, space, timing, and what is possible.</p><a className="button bar-button-light" href="#locations">Talk to your lounge <Arrow /></a></div>
        </section>
      </div>

      <footer>
        <div className="footer-top"><Brand light /><p>Functional drinks, real bar energy, and a room built for connection.</p></div>
        <div className="footer-nav"><a href="#events">What&apos;s on</a><a href="#menu">Drinks</a><a href="#first-visit">First visit</a><a href="#locations">Locations</a></div>
        <div className="footer-bottom"><span>© 2026 Elevate Social Lounge</span><span>Maitland + Estero, Florida</span><span>Ask a host about ingredients. Elevate does not provide medical advice.</span></div>
        <p className="concept-footer">This preview uses AI-generated concept imagery. It does not document actual guests, events, or the exact layout of either location. Visit the <a href="https://www.elevatesociallounge.com/" target="_blank" rel="noreferrer">current Elevate website</a> or contact your lounge for current information.</p>
      </footer>
    </main>
  );
}

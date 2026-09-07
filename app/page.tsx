import { MenuExplorer } from "./MenuExplorer";

const locations = [
  {
    city: "Maitland",
    note: "Your all-day social reset",
    address: "400 N Orlando Ave, Unit 109A, Maitland, FL 32751",
    displayAddress: <>400 N Orlando Ave, Unit 109A<br />Maitland, FL 32751</>,
    phone: "407 706 7127",
    phoneHref: "+14077067127",
    directions: "https://maps.google.com/?q=400+N+Orlando+Ave+Unit+109A+Maitland+FL+32751",
    order: "https://www.toasttab.com/elevate-1-400-n-orlando-avenue",
    instagram: "https://www.instagram.com/elevatesociallounge/",
  },
  {
    city: "Estero",
    note: "Your neighborhood living room",
    address: "10952 Eagle Village Dr, Unit D-460, Fort Myers, FL 33913",
    displayAddress: <>10952 Eagle Village Dr, Unit D-460<br />Fort Myers, FL 33913</>,
    phone: "239 257 1260",
    phoneHref: "+12392571260",
    directions: "https://maps.google.com/?q=10952+Eagle+Village+Dr+Unit+D-460+Fort+Myers+FL+33913",
    order: null,
    instagram: "https://www.instagram.com/elevateestero/",
  },
];

const events = [
  {
    category: "PLAY",
    title: "Pool nights",
    copy: "Friendly brackets, good music, and room for new players.",
    image: "/images/elevate-event-pool.jpg",
    alt: "Guests playing pool during an evening at Elevate",
  },
  {
    category: "THINK",
    title: "Trivia social",
    copy: "Bring a team or meet one here. The bar stays active between rounds.",
    image: "/images/elevate-event-trivia.jpg",
    alt: "Teams taking part in trivia night at Elevate",
  },
  {
    category: "LISTEN",
    title: "Live sessions",
    copy: "Local DJs, musicians, and intimate sets built for the room.",
    image: "/images/elevate-event-live.jpg",
    alt: "A live DJ and percussion session at Elevate",
  },
  {
    category: "COLLAB",
    title: "Limited drops",
    copy: "Guest drinks, local partners, merchandise, and one-night ideas.",
    image: "/images/elevate-event-collab.jpg",
    alt: "A beverage and merchandise collaboration night at Elevate",
  },
];

const firstVisitSteps = [
  { number: "01", title: "Start with flavor", copy: "Tell us what you usually like. Sweet, tart, bright, creamy, or simple." },
  { number: "02", title: "Let us guide you", copy: "We will explain the formats and ingredients clearly, without the lecture." },
  { number: "03", title: "Find your spot", copy: "Grab the bar, the pool table, a lounge seat, or a quieter corner." },
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
          <img className="bar-hero-image" src="/images/elevate-evening-hero.jpg" alt="A lively evening around the bar and pool table at Elevate" />
          <div className="bar-hero-shade" />
          <div className="bar-hero-content">
            <p className="bar-kicker"><span /> Maitland + Estero, Florida</p>
            <h1>Meet me<br />at <em>Elevate.</em></h1>
            <p>Zero-proof drinks. Full bar energy. Good people, late hours, and something happening in the room.</p>
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
          <div>ZERO PROOF <span>◆</span> FULL NIGHT OUT <span>◆</span> POOL <span>◆</span> TRIVIA <span>◆</span> LIVE SESSIONS <span>◆</span> GOOD PEOPLE <span>◆</span></div>
        </div>

        <section className="bar-events" id="events">
          <div className="bar-section-head">
            <div><p className="bar-kicker dark">WHAT&apos;S ON</p><h2>Come for a drink.<br /><em>Stay for the night.</em></h2></div>
            <div className="bar-section-intro">
              <p>The calendar gives every visit a different energy. Pool, trivia, live sessions, local collaborations, and more.</p>
              <small>Programming and schedules vary by location. Check the local Instagram before you go.</small>
            </div>
          </div>

          <div className="bar-event-grid">
            {events.map((event, index) => (
              <article className="bar-event-card" key={event.title}>
                <img src={event.image} alt={event.alt} />
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
            <p>Find confirmed events, times, and location details.</p>
            <div>
              <a className="button button-primary" href="https://www.instagram.com/elevatesociallounge/" target="_blank" rel="noreferrer">Maitland lineup <Arrow /></a>
              <a className="button button-outline" href="https://www.instagram.com/elevateestero/" target="_blank" rel="noreferrer">Estero lineup <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="bar-menu" id="menu">
          <div className="bar-menu-heading">
            <div><p className="bar-kicker">AT THE BAR</p><h2>Order by flavor.<br /><em>We&apos;ll handle the rest.</em></h2></div>
            <p>Familiar flavors, crafted presentation, and clear guidance. Ask a host about ingredients, formats, and what is available today.</p>
          </div>

          <div className="bar-drink-gallery">
            <figure><img src="/images/elevate-drink-citrus.jpg" alt="A bright citrus drink with rosemary over ice" /><figcaption><span>BRIGHT</span>Citrus + rosemary</figcaption></figure>
            <figure><img src="/images/elevate-drink-berry.jpg" alt="A deep berry and lime drink over ice" /><figcaption><span>BOLD</span>Berry + lime</figcaption></figure>
            <figure><img src="/images/elevate-drink-espresso.jpg" alt="A creamy iced espresso-style drink with orange peel" /><figcaption><span>SMOOTH</span>Iced espresso</figcaption></figure>
          </div>

          <MenuExplorer />
        </section>

        <section className="bar-first-visit" id="first-visit">
          <div className="bar-first-image">
            <img src="/images/elevate-first-visit.jpg" alt="A host welcoming two guests and guiding them through the menu" />
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
            <p><span>01</span><strong>Well made</strong>Crafted drinks, good ice, good water, and a final check.</p>
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
                <address aria-label={location.address}>{location.displayAddress}</address>
                <p className="open-daily">OPEN DAILY <span>Check local channels for today&apos;s hours and events</span></p>
                <a className="phone" href={`tel:${location.phoneHref}`}>{location.phone}</a>
                <div className="location-actions">
                  <a className="button button-primary" href={location.directions} target="_blank" rel="noreferrer">Directions <Arrow /></a>
                  {location.order && <a href={location.order} target="_blank" rel="noreferrer">Order ahead <Arrow /></a>}
                  <a href={location.instagram} target="_blank" rel="noreferrer">Instagram <Arrow /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bar-private">
          <div><p className="bar-kicker">PARTNERSHIPS + PRIVATE EVENTS</p><h2>Your idea.<br /><em>Our room.</em></h2></div>
          <div><p>Bring Elevate a local collaboration, private gathering, creator event, tasting, or community idea that belongs in the room.</p><a className="button bar-button-light" href="mailto:info@elevatesociallounge.com?subject=Elevate%20event%20or%20partnership">Start a conversation <Arrow /></a></div>
        </section>
      </div>

      <footer>
        <div className="footer-top"><Brand light /><p>Functional drinks, real bar energy, and a room built for connection.</p></div>
        <div className="footer-nav"><a href="#events">What&apos;s on</a><a href="#menu">Drinks</a><a href="#first-visit">First visit</a><a href="#locations">Locations</a></div>
        <div className="footer-bottom"><span>© 2026 Elevate Social Lounge</span><span>Maitland + Estero, Florida</span><span>Ask a host about ingredients. Elevate does not provide medical advice.</span></div>
      </footer>
    </main>
  );
}

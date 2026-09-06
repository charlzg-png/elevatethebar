import { MenuExplorer } from "./MenuExplorer";

const locations = [
  {
    number: "01",
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
    number: "02",
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

const programs = [
  { number: "01", title: "Connect", copy: "Trivia, bingo, games, and easy reasons to pull up another chair." },
  { number: "02", title: "Create", copy: "Local makers, music, art, and collaborations that feel rooted in the neighborhood." },
  { number: "03", title: "Learn", copy: "Tastings, guided discovery, and simple product education without the lecture." },
  { number: "04", title: "Move", copy: "Wellness meetups, run clubs, and community rituals built for real participation." },
];

const firstVisitSteps = [
  { number: "01", title: "Welcome", copy: "You are seen quickly, whether the room is calm or busy." },
  { number: "02", title: "Discover", copy: "Tell us the flavor, format, or kind of moment you want." },
  { number: "03", title: "Guide", copy: "We explain the choices clearly, answer questions, and keep it simple." },
  { number: "04", title: "Connect", copy: "We check back, help you settle in, and make the room feel open." },
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
    <main id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <a className="brand-link" href="#top" aria-label="Elevate Social Lounge home"><Brand /></a>
        <nav aria-label="Main navigation">
          <a href="#experience">Experience</a>
          <a href="#menu">Drinks</a>
          <a href="#events">What&apos;s on</a>
          <a href="#locations">Locations</a>
        </nav>
        <a className="header-cta" href="#locations">Find your lounge <Arrow /></a>
      </header>

      <div id="main-content">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Maitland + Estero, Florida</p>
            <h1>A better way<br />to <em>go out.</em></h1>
            <p className="hero-lead">Functional drinks, real connection, and a room that meets you where you are. Open for slow mornings, social nights, and everything between.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#locations">Choose a location <Arrow /></a>
              <a className="button button-quiet" href="#first-visit">First time? Start here <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-proof">
              <div><strong>2</strong><span>Florida lounges</span></div>
              <div><strong>All day</strong><span>Focus to fun</span></div>
              <div><strong>0%</strong><span>Alcohol needed</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-sun" aria-hidden="true" />
            <div className="hero-image-wrap">
              <img src="/images/elevate-bar-host.png" alt="A host presenting three colorful drinks inside Elevate Social Lounge" />
            </div>
            <div className="hero-sticker">
              <span>NEW HERE?</span>
              <strong>We&apos;ll guide you.</strong>
            </div>
            <p className="hero-caption">Real people. Real drinks. Real Elevate.</p>
          </div>
        </section>

        <div className="marquee" aria-label="Elevate experience statement">
          <div>DRINK <span>◆</span> CONNECT <span>◆</span> ELEVATE <span>◆</span> DRINK <span>◆</span> CONNECT <span>◆</span> ELEVATE</div>
        </div>

        <section className="intro" id="experience">
          <div className="section-index">01 / THE IDEA</div>
          <div className="intro-copy">
            <p className="kicker">MORE THAN A KAVA BAR</p>
            <h2>Your day changes.<br /><em>We move with it.</em></h2>
            <p>Elevate is a functional social lounge. Come to focus, catch up, discover something new, or stay out without centering the night around alcohol.</p>
          </div>
          <div className="daypart-grid">
            <article className="daypart-card morning">
              <span>9 AM</span><h3>Focus</h3><p>Coffee, tea, laptops, good light, and room to get into your day.</p>
            </article>
            <article className="daypart-card afternoon">
              <span>3 PM</span><h3>Flow</h3><p>A reset between work and whatever comes next. Stay for one, stay for a while.</p>
            </article>
            <article className="daypart-card evening">
              <span>8 PM</span><h3>Social</h3><p>Music, games, events, and crafted zero-proof choices with real energy.</p>
            </article>
          </div>
        </section>

        <section className="first-visit" id="first-visit">
          <div className="first-visit-media">
            <img src="/images/elevate-team.png" alt="An Elevate team member bringing energy behind the bar" />
            <div className="host-badge"><span>OUR PEOPLE MISSION</span><strong>Turn strangers into welcomed guests, and guests into community.</strong></div>
          </div>
          <div className="first-visit-content">
            <p className="kicker">YOUR FIRST VISIT</p>
            <h2>No homework.<br /><em>No insider language.</em></h2>
            <p className="section-lead">You do not need to understand the whole menu before you walk in. Tell us what sounds good, and we will help from there.</p>
            <div className="service-steps">
              {firstVisitSteps.map((step) => (
                <article key={step.title}>
                  <span>{step.number}</span>
                  <div><h3>{step.title}</h3><p>{step.copy}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="menu-section" id="menu">
          <div className="section-index">02 / THE DRINKS</div>
          <div className="menu-heading">
            <div><p className="kicker">START WITH WHAT YOU WANT</p><h2>Flavor first.<br /><em>Guidance always.</em></h2></div>
            <p>Familiar flavors, thoughtful ingredients, and options for every kind of visit. Ask a host about ingredients, formats, and what is available today.</p>
          </div>
          <MenuExplorer />
          <div className="drink-gallery">
            <figure><img src="/images/hero.jpg" alt="A bright orange crafted drink with rosemary" /><figcaption><span>CRAFTED</span>Made to taste good first</figcaption></figure>
            <figure><img src="/images/drink-one.jpg" alt="A peach drink served over ice" /><figcaption><span>CONSISTENT</span>Built to repeat across locations</figcaption></figure>
            <figure><img src="/images/drink-two.jpg" alt="A layered citrus drink with lime" /><figcaption><span>DISCOVERABLE</span>Easy to choose, easy to understand</figcaption></figure>
          </div>
        </section>

        <section className="quality-band">
          <div className="quality-mark"><img src="/elevate-mark-white.png" alt="" /></div>
          <div className="quality-copy">
            <p className="kicker">THE ELEVATE STANDARD</p>
            <h2>Great service is not a script.<br /><em>It is how the room feels.</em></h2>
          </div>
          <div className="quality-points">
            <div><span>01</span><strong>Welcoming</strong><p>Every guest is acknowledged. No cliques, no cold starts.</p></div>
            <div><span>02</span><strong>Well made</strong><p>Clear recipes, clean tools, good ice, good water, and a final check.</p></div>
            <div><span>03</span><strong>Alive</strong><p>Music, lighting, pace, and events shift with the room and time of day.</p></div>
          </div>
        </section>

        <section className="community" id="events">
          <div className="community-heading">
            <div className="section-index">03 / THE COMMUNITY</div>
            <p className="kicker">WHAT&apos;S ON</p>
            <h2>The calendar is part<br />of the <em>experience.</em></h2>
            <p>Programming should give people a reason to return, meet someone new, and feel connected to the neighborhood.</p>
          </div>
          <div className="community-photo"><img src="/images/elevate-community.png" alt="An Elevate guest holding a drink and community event tote" /></div>
          <div className="program-grid">
            {programs.map((program) => (
              <article key={program.title}><span>{program.number}</span><h3>{program.title}</h3><p>{program.copy}</p></article>
            ))}
          </div>
          <div className="community-actions">
            <p>See the latest lineup from your local lounge.</p>
            <div><a className="button button-primary" href="https://www.instagram.com/elevatesociallounge/" target="_blank" rel="noreferrer">Maitland Instagram <Arrow /></a><a className="button button-outline" href="https://www.instagram.com/elevateestero/" target="_blank" rel="noreferrer">Estero Instagram <Arrow /></a></div>
          </div>
        </section>

        <section className="partnerships">
          <div>
            <p className="kicker">PARTNERSHIPS + PRIVATE EVENTS</p>
            <h2>Bring a good idea.<br /><em>We&apos;ll make room.</em></h2>
          </div>
          <div>
            <p>Local brands, creators, community groups, wellness leaders, and event hosts can build with Elevate. The best partnerships add value to the room and give people a reason to come back.</p>
            <a className="button button-white" href="mailto:info@elevatesociallounge.com?subject=Elevate%20partnership%20idea">Start a conversation <Arrow /></a>
          </div>
        </section>

        <section className="merch-section">
          <div className="merch-copy">
            <div className="section-index">04 / TAKE IT WITH YOU</div>
            <p className="kicker">THE ELEVATE EDIT</p>
            <h2>Made for the people<br />who <em>make the room.</em></h2>
            <p>Useful objects, limited collaborations, and quiet signals for the community. Ask your local lounge about current drops.</p>
            <a className="text-link" href="#locations">Find your Elevate <Arrow /></a>
          </div>
          <div className="merch-photo"><img src="/images/elevate-guest.png" alt="An Elevate guest relaxing with a drink" /><span>COMMUNITY, CARRIED FORWARD</span></div>
        </section>

        <section className="locations" id="locations">
          <div className="locations-heading">
            <div className="section-index">05 / FIND YOUR LOUNGE</div>
            <p className="kicker">ONE ELEVATE. LOCAL ENERGY.</p>
            <h2>Two rooms.<br /><em>One warm welcome.</em></h2>
            <p>Menus, events, and hours may vary by location. Check the local Instagram for today&apos;s lineup and availability.</p>
          </div>
          <div className="location-grid">
            {locations.map((location) => (
              <article className="location-card" key={location.city}>
                <div className="location-top"><span>{location.number}</span><p>{location.note}</p></div>
                <h3>{location.city}</h3>
                <address aria-label={location.address}>{location.displayAddress}</address>
                <p className="open-daily">OPEN DAILY <span>Check local channels for today&apos;s hours</span></p>
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

        <section className="closing">
          <img src="/elevate-mark-teal.png" alt="" />
          <p>DRINK. CONNECT. ELEVATE.</p>
          <h2>Your next favorite<br /><em>place is waiting.</em></h2>
          <a className="button button-primary" href="#locations">Choose your lounge <Arrow /></a>
        </section>
      </div>

      <footer>
        <div className="footer-top"><Brand light /><p>A functional social lounge built around great drinks, proactive hospitality, and real community.</p></div>
        <div className="footer-nav">
          <a href="#experience">Experience</a><a href="#menu">Drinks</a><a href="#events">What&apos;s on</a><a href="#locations">Locations</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Elevate Social Lounge</span>
          <span>Maitland + Estero, Florida</span>
          <span>Ask a host about ingredients. Elevate does not provide medical advice.</span>
        </div>
      </footer>
    </main>
  );
}

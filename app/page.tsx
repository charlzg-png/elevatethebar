import { MenuExplorer } from "./MenuExplorer";

const rituals = [
  { n: "01", title: "Lift", tag: "bright + focused", copy: "Coffee, matcha, mitra teas, and functional blends for the long day ahead.", color: "teal" },
  { n: "02", title: "Connect", tag: "social + present", copy: "Layered botanical drinks that turn a quick hello into a whole evening.", color: "gold" },
  { n: "03", title: "Unwind", tag: "slow + grounded", copy: "Traditional kava and easy sips for landing softly without checking out.", color: "mint" },
];

const events = [
  { day: "01", name: "Bingo", note: "Low stakes. Loud tables. Very good reason to stay for another round." },
  { day: "02", name: "Pool", note: "Weekly tournaments, casual games, and the regulars you have not met yet." },
  { day: "03", name: "Poker", note: "A social table built around the game—not the pressure." },
  { day: "04", name: "Trivia", note: "Bring the group chat. Pick a name. Pretend the prize does not matter." },
  { day: "05", name: "Community nights", note: "Markets, music, watch parties, and local collaborations." },
];

const locations = [
  {
    city: "Maitland",
    line: "The social reset",
    address: <>400 N Orlando Ave<br />Unit 109A<br />Maitland, FL 32751</>,
    hours: <>Daily<br />9 AM — 12 AM</>,
    phone: "407 706 7127",
    phoneHref: "+14077067127",
    directions: "https://maps.google.com/?q=400+N+Orlando+Ave+Unit+109A+Maitland+FL+32751",
    order: "https://www.toasttab.com/elevate-1-400-n-orlando-avenue",
    instagram: "https://www.instagram.com/elevatesociallounge/",
  },
  {
    city: "Estero",
    line: "The late-night living room",
    address: <>10952 Eagle Village Dr<br />Unit D-460<br />Fort Myers, FL 33913</>,
    hours: <>Daily<br />9 AM — 1 AM</>,
    phone: "239 257 1260",
    phoneHref: "+12392571260",
    directions: "https://maps.google.com/?q=10952+Eagle+Village+Dr+Unit+D-460+Fort+Myers+FL+33913",
    order: null,
    instagram: "https://www.instagram.com/elevateestero/",
  },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Elevate home"><img src="/elevate-logo.png" alt="Elevate Kava Social Lounge" /></a>
        <nav aria-label="Main navigation">
          <a href="#experience">Experience</a><a href="#menu">Menu</a><a href="#whats-on">What&apos;s on</a><a href="#merch">Merch</a><a href="#locations">Locations</a>
        </nav>
        <a className="order-link" href="#locations">Choose a location <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Maitland + Estero</p>
          <h1>More than<br />a <em>bar.</em></h1>
          <p className="hero-intro">A better way to go out—built around crafted botanical drinks, a room with a pulse, and actual connection. Come for focus. Stay for the people.</p>
          <div className="hero-actions"><a className="button gradient-button" href="#menu">Explore the menu <Arrow /></a><a className="text-link" href="#first-visit">New here? Start here <span>↓</span></a></div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo" />
          <div className="hero-orbit"><span>DAY</span><i>+</i><span>DUSK</span><i>+</i><span>NIGHT</span></div>
          <div className="now-card"><span>YOUR THIRD PLACE</span><strong>Work.<br />Play. Stay.</strong><small>OPEN DAILY</small></div>
        </div>
        <div className="ticker" aria-hidden="true"><span>KAVA</span><i>◇</i><span>MITRA</span><i>◇</i><span>ZERO-PROOF</span><i>◇</i><span>COFFEE</span><i>◇</i><span>FUNCTIONAL BLENDS</span><i>◇</i><span>GOOD COMPANY</span></div>
      </section>

      <section className="brand-promise" aria-label="Elevate brand promise">
        <p>ONE ELEVATE</p><h2>Two neighborhoods.<br /><em>One unmistakable experience.</em></h2><a href="#locations">Meet both locations <Arrow /></a>
      </section>

      <section className="positioning" id="experience">
        <div className="position-mark"><img src="/elevate-logo.png" alt="" /></div>
        <div className="position-copy"><p className="section-label">BEYOND KAVA</p><h2>Your day has<br />different <em>modes.</em><br />So do we.</h2><p>Morning workspace. Afternoon reset. Zero-proof night out. Elevate is the all-day social lounge where the menu meets you where you are—and the room moves with you.</p></div>
      </section>

      <section className="rituals">
        <div className="ritual-head"><div><p className="section-label">CHOOSE YOUR STATE</p><h2>Start with the feeling.</h2></div><p>No insider language required.<br />Tell us what sounds good.</p></div>
        <div className="ritual-grid">
          {rituals.map((ritual) => <article className={`ritual ${ritual.color}`} key={ritual.title}><span>{ritual.n}</span><p>{ritual.tag}</p><h3>{ritual.title}</h3><div className="ritual-rule" /><small>{ritual.copy}</small><a href="#menu">Find your pour <Arrow /></a></article>)}
        </div>
      </section>

      <section className="first-visit" id="first-visit">
        <div className="first-visit-photo"><img src="/images/community-approved.png" alt="Friends connecting over botanical drinks at Elevate" /></div>
        <div className="first-visit-copy">
          <p className="section-label">YOUR FIRST VISIT</p><h2>You do not need to<br /><em>know the menu.</em></h2><p className="first-intro">That is what our tenders are for. We will explain the ingredients, flavor, sizes, and house rituals without making it weird.</p>
          <ol><li><span>01</span><div><strong>Pick a direction</strong><p>Bright, social, slow—or just something delicious.</p></div></li><li><span>02</span><div><strong>Meet your tender</strong><p>Ask questions. Taste something. Start simple.</p></div></li><li><span>03</span><div><strong>Make the room yours</strong><p>Open the laptop, grab the pool cue, or pull up another chair.</p></div></li></ol>
          <a className="button dark-button" href="#locations">Plan your first visit <Arrow /></a>
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-photo"><img src="/images/experience-approved.png" alt="The Elevate day-to-night social lounge experience" /></div>
        <div className="feature-copy"><p className="section-label">THE THIRD PLACE, UPGRADED</p><blockquote>Come for a drink.<br /><em>Leave more alive.</em></blockquote><div className="feature-stats"><div><strong>AM</strong><span>Focus, coffee, conversation</span></div><div><strong>PM</strong><span>Games, events, connection</span></div><div><strong>0%</strong><span>Alcohol needed</span></div></div></div>
      </section>

      <section className="menu-section" id="menu">
        <div className="menu-heading"><div><p className="section-label">ONE CORE MENU</p><h2>Choose your<br /><em>state.</em></h2></div><div><p>Clear names. Consistent sizes. Familiar favorites at both locations. Choose a feeling, a flavor, or ask your tender to take it from there.</p><a className="button dark-button" href="#locations">Choose a location <Arrow /></a></div></div>
        <MenuExplorer />
        <div className="menu-note"><span>MAKE IT YOURS</span><p>Raspberry · lavender · dragonfruit · passionfruit · mango · vanilla · toasted marshmallow · oatmilk · almondmilk · coconut</p></div>
        <p className="menu-disclaimer">Availability and local features may vary. Ask your tender about ingredients and today&apos;s pours.</p>
      </section>

      <section className="events" id="whats-on">
        <div className="events-intro"><p className="section-label">WHAT&apos;S ON</p><h2>The calendar is part<br />of the <em>experience.</em></h2><p>Elevate is built for repeat visits. These are the rituals that turn a room into a community. Check your location&apos;s Instagram for this week&apos;s lineup and times.</p></div>
        <div className="event-list">{events.map((event) => <article key={event.name}><span>{event.day}</span><h3>{event.name}</h3><p>{event.note}</p></article>)}</div>
        <div className="events-actions"><a className="button gradient-button" href="https://www.instagram.com/elevatesociallounge/" target="_blank" rel="noreferrer">Maitland lineup <Arrow /></a><a className="button outline-button" href="https://www.instagram.com/elevateestero/" target="_blank" rel="noreferrer">Estero lineup <Arrow /></a></div>
      </section>

      <section className="editorial-grid">
        <div className="editorial-copy"><p className="section-label">MADE FOR REAL LIFE</p><h2>Clock in.<br />Catch up.<br /><em>Stay late.</em></h2><p>Fast Wi-Fi and outlets when you are building. Music and games when you are reconnecting. Deep seats and thoughtful drinks when you just need somewhere better to be.</p></div>
        <div className="editorial-image tall"><img src="/images/community.jpg" alt="Community at Elevate Social Lounge" /></div>
        <div className="editorial-image wide"><img src="/images/hero.jpg" alt="A crafted botanical beverage" /><span>CRAFTED WITH INTENTION<br />POURED FOR CONNECTION</span></div>
      </section>

      <section className="merch" id="merch">
        <div className="merch-photo"><img src="/images/merch-approved.png" alt="Elevate apparel, cap, tumbler, and tote" /></div>
        <div className="merch-copy"><p className="section-label">THE ELEVATE EDIT</p><h2>Wear the<br /><em>third place.</em></h2><p>Heavy cotton. Quiet marks. Useful objects. Merchandise designed for the people who know the tender, know the table, and always stay longer than planned.</p><div className="merch-drop"><span>FIRST DROP</span><strong>Coming to Maitland + Estero</strong><small>Apparel · headwear · drinkware · carry</small></div><a className="text-link" href="#locations">Find your location <Arrow /></a></div>
      </section>

      <section className="locations" id="locations">
        <div className="locations-head"><p className="section-label">FIND YOUR ELEVATE</p><h2>Same signal.<br /><em>Local energy.</em></h2><p>One menu system, one standard of hospitality, and two rooms shaped by their communities.</p></div>
        <div className="location-grid">
          {locations.map((location, index) => <article className={`location-card location-${index + 1}`} key={location.city}>
            <div className="location-number">0{index + 1}</div><p className="location-kicker">{location.line}</p><h3>{location.city}</h3>
            <div className="location-details"><div><span>ADDRESS</span><p>{location.address}</p></div><div><span>HOURS</span><p>{location.hours}</p></div><div><span>CALL</span><p><a href={`tel:${location.phoneHref}`}>{location.phone}</a></p></div></div>
            <div className="location-actions"><a className="button location-button" href={location.directions} target="_blank" rel="noreferrer">Directions <Arrow /></a>{location.order && <a className="location-text" href={location.order} target="_blank" rel="noreferrer">Order ahead <Arrow /></a>}<a className="location-text" href={location.instagram} target="_blank" rel="noreferrer">Instagram <Arrow /></a></div>
          </article>)}
        </div>
      </section>

      <section className="final-call"><p>DRINK · CONNECT · ELEVATE</p><h2>There is a better<br />way to <em>go out.</em></h2><a className="button gradient-button" href="#locations">Choose your room <Arrow /></a></section>

      <footer><img className="footer-logo" src="/elevate-logo.png" alt="Elevate Kava Social Lounge" /><p>A better way to go out.</p><div className="footer-links"><a href="#experience">Experience ↑</a><a href="#menu">Menu ↑</a><a href="#whats-on">What&apos;s on ↑</a><a href="#merch">Merch ↑</a><a href="#locations">Locations ↑</a></div><div className="footer-bottom"><span>© 2026 Elevate Social Lounge</span><span>MAITLAND · ESTERO · FLORIDA</span></div></footer>
    </main>
  );
}

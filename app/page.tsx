const drinks = [
  { name: "Mango Sunrise", note: "mango · grenadine · mitra tea", price: "$8 / 10", image: "/images/hero.jpg", tone: "sun" },
  { name: "Clear Skies", note: "cucumber · lime · mint", price: "$11", image: "/images/drink-one.jpg", tone: "mint" },
  { name: "Berry Energetic", note: "mixed berry · oatmilk · green tea", price: "$12", image: "/images/drink-two.jpg", tone: "berry" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Elevate home">
          ELEVATE<span>•</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#drinks">Drinks</a>
          <a href="#about">Our place</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="order-link" href="https://www.toasttab.com/elevate-1-400-n-orlando-avenue" target="_blank" rel="noreferrer">
          Order ahead <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Your new favorite third place</p>
          <h1>Drink different.<br /><em>Connect deeper.</em></h1>
          <p className="hero-intro">Botanical drinks, unhurried energy, and room to be yourself. Welcome to Maitland’s modern kava social lounge.</p>
          <div className="hero-actions">
            <a className="button button-light" href="#drinks">Explore the menu <Arrow /></a>
            <a className="text-link" href="#visit">Open daily, 9am–midnight <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-image" role="img" aria-label="A bright botanical drink at Elevate Social Lounge">
          <div className="image-stamp"><strong>0%</strong><span>alcohol<br />100% social</span></div>
          <p>Crafted in<br />Maitland, FL</p>
        </div>
        <div className="hero-marquee" aria-hidden="true">
          <span>KAVA</span><i>✦</i><span>MITRA TEA</span><i>✦</i><span>GOOD COMPANY</span><i>✦</i><span>ZERO PROOF</span>
        </div>
      </section>

      <section className="manifesto" id="about">
        <p className="section-number">01 — OUR PLACE</p>
        <div>
          <h2>Come as you are.<br /><em>Stay awhile.</em></h2>
          <div className="manifesto-copy">
            <p>We made Elevate for the in-between moments: the catch-up that turns into a whole evening, the laptop session that needs a better backdrop, the night out without the next-day fog.</p>
            <p>Our lounge brings together functional botanicals, genuinely good drinks, and a community that makes everyone feel like a regular.</p>
          </div>
        </div>
      </section>

      <section className="drinks" id="drinks">
        <div className="section-heading">
          <div>
            <p className="section-number">02 — WHAT WE’RE POURING</p>
            <h2>Bright, botanical,<br /><em>made to linger.</em></h2>
          </div>
          <a className="button button-dark" href="https://www.elevatesociallounge.com/menu-4" target="_blank" rel="noreferrer">View full menu <Arrow /></a>
        </div>
        <div className="drink-grid">
          {drinks.map((drink, index) => (
            <article className={`drink-card ${drink.tone}`} key={drink.name}>
              <div className="drink-photo">
                <img src={drink.image} alt={`${drink.name} botanical beverage`} />
                <span>0{index + 1}</span>
              </div>
              <div className="drink-info">
                <h3>{drink.name}</h3>
                <p>{drink.note}</p>
                <strong>{drink.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="split-story">
        <div className="story-image"><img src="/images/lounge.jpg" alt="Friends spending time together at Elevate" /></div>
        <div className="story-copy">
          <p className="section-number">03 — THE ELEVATE EFFECT</p>
          <blockquote>“A night out that actually feels good tomorrow.”</blockquote>
          <div className="story-points">
            <div><span>01</span><h3>Focus mode</h3><p>Wi-Fi, outlets, daylight, and a drink with a little lift.</p></div>
            <div><span>02</span><h3>Social mode</h3><p>Settle in for games, conversation, and zero-proof nights.</p></div>
            <div><span>03</span><h3>Wind-down mode</h3><p>High-quality kava, soft light, and no rush to leave.</p></div>
          </div>
        </div>
      </section>

      <section className="visit" id="visit">
        <div className="visit-top">
          <p className="section-number">04 — PULL UP A CHAIR</p>
          <span className="status"><i /> OPEN TODAY UNTIL MIDNIGHT</span>
        </div>
        <div className="visit-main">
          <h2>Meet us<br /><em>in Maitland.</em></h2>
          <div className="visit-details">
            <div><span>Find us</span><p>400 N Orlando Ave<br />Unit 109A<br />Maitland, FL 32751</p><a href="https://maps.google.com/?q=400+N+Orlando+Ave+Unit+109A+Maitland+FL+32751" target="_blank" rel="noreferrer">Get directions <Arrow /></a></div>
            <div><span>Hours</span><p>Monday — Sunday<br />9 AM — 12 AM</p><a href="tel:+14077067127">407 706 7127</a></div>
          </div>
        </div>
        <div className="visit-image"><img src="/images/community.jpg" alt="The welcoming interior of Elevate Social Lounge" /></div>
      </section>

      <footer>
        <div className="footer-mark">ELEVATE<span>•</span></div>
        <p>Botanicals for better connection.</p>
        <div className="footer-links">
          <a href="https://www.instagram.com/elevatesociallounge/" target="_blank" rel="noreferrer">Instagram <Arrow /></a>
          <a href="https://www.tiktok.com/@elevatesociallounge" target="_blank" rel="noreferrer">TikTok <Arrow /></a>
          <a href="mailto:Caleb@drink-elevate.com">Email <Arrow /></a>
        </div>
        <div className="footer-bottom"><span>© 2026 Elevate Social Lounge</span><span>Maitland, Florida</span></div>
      </footer>
    </main>
  );
}

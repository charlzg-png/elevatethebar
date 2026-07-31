import { MenuExplorer } from "./MenuExplorer";

const rituals = [
  { n: "01", title: "Lift", tag: "energy + focus", copy: "Mitra teas, matcha, espresso, and blends built for the long day ahead.", color: "teal" },
  { n: "02", title: "Connect", tag: "social + present", copy: "Layered botanical drinks that turn a quick hello into a whole evening.", color: "gold" },
  { n: "03", title: "Unwind", tag: "calm + grounded", copy: "Traditional kava and slow sips for landing softly without checking out.", color: "mint" },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Elevate home"><img src="/elevate-logo.png" alt="Elevate Kava Social Lounge" /></a>
        <nav aria-label="Main navigation"><a href="#experience">Experience</a><a href="#menu">Menu</a><a href="#visit">Visit</a></nav>
        <a className="order-link" href="https://www.toasttab.com/elevate-1-400-n-orlando-avenue" target="_blank" rel="noreferrer">Order ahead <Arrow /></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> The next-generation social bar</p>
          <h1>More than<br />a <em>bar.</em></h1>
          <p className="hero-intro">A new way to go out—built around bold botanical drinks, better energy, and actual connection. From first focus to last call, choose your state.</p>
          <div className="hero-actions"><a className="button gradient-button" href="#menu">Find your drink <Arrow /></a><a className="text-link" href="#experience">Meet the new social ritual <span>↓</span></a></div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo" />
          <div className="hero-orbit"><span>FOCUS</span><i>+</i><span>ENERGY</span><i>+</i><span>CONNECTION</span></div>
          <div className="now-card"><span>NOW POURING</span><strong>Elevated<br />botanicals</strong><small>9 AM — Midnight</small></div>
        </div>
        <div className="ticker" aria-hidden="true"><span>KAVA</span><i>◇</i><span>MITRA</span><i>◇</i><span>ZERO-PROOF</span><i>◇</i><span>COFFEE</span><i>◇</i><span>FUNCTIONAL BLENDS</span><i>◇</i><span>GOOD COMPANY</span></div>
      </section>

      <section className="positioning" id="experience">
        <div className="position-mark"><img src="/elevate-logo.png" alt="" /></div>
        <div className="position-copy"><p className="section-label">BEYOND KAVA</p><h2>Your day has<br />different <em>modes.</em><br />So do we.</h2><p>Morning workspace. Afternoon reset. Zero-proof night out. Elevate is the all-day social club where the menu meets you exactly where you are—and moves with you.</p></div>
      </section>

      <section className="rituals">
        <div className="ritual-head"><p className="section-label">CHOOSE YOUR STATE</p><p>No alcohol. No one-note experience.<br />Just the right ritual for right now.</p></div>
        <div className="ritual-grid">
          {rituals.map((ritual) => <article className={`ritual ${ritual.color}`} key={ritual.title}><span>{ritual.n}</span><p>{ritual.tag}</p><h3>{ritual.title}</h3><div className="ritual-rule" /><small>{ritual.copy}</small><a href="#menu">Find a pour <Arrow /></a></article>)}
        </div>
      </section>

      <section className="feature-band">
        <div className="feature-photo"><img src="/images/lounge.jpg" alt="An inviting moment at Elevate Social Lounge" /></div>
        <div className="feature-copy"><p className="section-label">THE THIRD PLACE, UPGRADED</p><blockquote>Come for a drink.<br /><em>Leave more alive.</em></blockquote><div className="feature-stats"><div><strong>9—12</strong><span>Open morning to midnight</span></div><div><strong>0%</strong><span>Alcohol required</span></div><div><strong>∞</strong><span>Ways to make it yours</span></div></div></div>
      </section>

      <section className="menu-section" id="menu">
        <div className="menu-heading"><div><p className="section-label">THE FULL POUR</p><h2>Not a menu.<br /><em>A mood board.</em></h2></div><div><p>Choose a feeling, a flavor, or a familiar favorite. Our tenders will take it from there.</p><a className="button dark-button" href="https://www.toasttab.com/elevate-1-400-n-orlando-avenue" target="_blank" rel="noreferrer">Order for pickup <Arrow /></a></div></div>
        <MenuExplorer />
        <div className="menu-note"><span>MAKE IT YOURS</span><p>Raspberry · lavender · dragonfruit · passionfruit · mango · vanilla · toasted marshmallow · oatmilk · almondmilk · coconut</p></div>
      </section>

      <section className="editorial-grid">
        <div className="editorial-copy"><p className="section-label">MADE FOR REAL LIFE</p><h2>Clock in.<br />Catch up.<br /><em>Stay late.</em></h2><p>Fast Wi-Fi and outlets when you’re building. Music and games when you’re reconnecting. Deep seats and thoughtful drinks when you just need somewhere better to be.</p></div>
        <div className="editorial-image tall"><img src="/images/community.jpg" alt="Community at Elevate Social Lounge" /></div>
        <div className="editorial-image wide"><img src="/images/hero.jpg" alt="A crafted botanical beverage" /><span>CRAFTED WITH INTENTION<br />POURED FOR CONNECTION</span></div>
      </section>

      <section className="visit" id="visit">
        <div className="visit-head"><p className="section-label">COME FIND YOUR MODE</p><span className="status"><i /> OPEN DAILY</span></div>
        <div className="visit-main"><div><h2>Maitland’s<br /><em>social reset.</em></h2><a className="button gradient-button" href="https://maps.google.com/?q=400+N+Orlando+Ave+Unit+109A+Maitland+FL+32751" target="_blank" rel="noreferrer">Get directions <Arrow /></a></div><div className="visit-details"><div><span>ADDRESS</span><p>400 N Orlando Ave<br />Unit 109A<br />Maitland, FL 32751</p></div><div><span>HOURS</span><p>Monday — Sunday<br />9 AM — 12 AM</p></div><div><span>CONNECT</span><p><a href="tel:+14077067127">407 706 7127</a><br /><a href="mailto:Caleb@drink-elevate.com">Caleb@drink-elevate.com</a></p></div></div></div>
      </section>

      <footer><img className="footer-logo" src="/elevate-logo.png" alt="Elevate Kava Social Lounge" /><p>A better way to go out.</p><div className="footer-links"><a href="https://www.instagram.com/elevatesociallounge/" target="_blank" rel="noreferrer">Instagram <Arrow /></a><a href="https://www.tiktok.com/@elevatesociallounge" target="_blank" rel="noreferrer">TikTok <Arrow /></a><a href="#menu">Menu ↑</a></div><div className="footer-bottom"><span>© 2026 Elevate Social Lounge</span><span>MAITLAND, FLORIDA</span></div></footer>
    </main>
  );
}

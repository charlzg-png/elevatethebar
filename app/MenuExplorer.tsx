"use client";
import { useRef, useState } from "react";

const sections = [
  { id: "first-order", label: "Find your first drink", note: "Start with what you like", items: [
    ["Flavor first", "Citrusy, fruity, creamy, or simple? Tell your host what you enjoy."],
    ["Ingredients next", "Ask what is in the drink before you choose, including kava, kratom, and caffeine."],
    ["Make it your visit", "Ask for the current menu and prices at your location. Offerings can differ."],
  ]},
  { id: "kava-kratom", label: "Kava + kratom", note: "Different ingredients. Clear choices.", items: [
    ["Kava", "Ask your host to identify which current drinks contain kava and explain the serving information."],
    ["Kratom", "Some drinks contain kratom, including products described as Mitra tea. Ask about the specific drink and its label."],
    ["No guessing", "Alcohol-free does not mean ingredient-free or suitable for everyone. Review the product information and cautions before ordering."],
  ]},
  { id: "other-options", label: "Looking for something else?", note: "You can ask for a different starting point", items: [
    ["Without kava or kratom", "Tell your host if you want neither. Ask which options are available at this lounge today."],
    ["Coffee, tea, and more", "Selections vary by location. Check the local menu for what is being served."],
    ["Allergies or ingredient questions", "Ask before ordering. Your host can check the current ingredient information instead of guessing."],
  ]},
];

export function MenuExplorer() {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  function navigate(key: string, index: number) {
    const next = key === "Home" ? 0 : key === "End" ? sections.length - 1 :
      key === "ArrowRight" ? (index + 1) % sections.length :
      key === "ArrowLeft" ? (index + sections.length - 1) % sections.length : null;
    if (next === null) return false;
    setActive(next); tabs.current[next]?.focus(); return true;
  }
  return <div className="menu-explorer">
    <div className="menu-tabs" role="tablist" aria-label="Drink guidance">
      {sections.map((item, index) => <button key={item.id} ref={(el) => { tabs.current[index] = el; }}
        id={`tab-${item.id}`} type="button" role="tab" aria-selected={active === index}
        aria-controls={`panel-${item.id}`} tabIndex={active === index ? 0 : -1}
        onClick={() => setActive(index)}
        onKeyDown={(event) => { if (navigate(event.key, index)) event.preventDefault(); }}>
        <span>0{index + 1}</span>{item.label}
      </button>)}
    </div>
    {sections.map((item, index) => <div className="menu-panel" key={item.id} id={`panel-${item.id}`}
      role="tabpanel" hidden={active !== index} tabIndex={0} aria-labelledby={`tab-${item.id}`}>
      <div className="menu-panel-head"><p>{item.note}</p><span>Ask your host</span></div>
      <div className="menu-list">{item.items.map(([name, description]) =>
        <article key={name}><div><h3>{name}</h3><p>{description}</p></div></article>)}</div>
      <p className="menu-panel-note">This is drink guidance, not a live menu. Follow the location links below for current choices and prices.</p>
    </div>)}
  </div>;
}

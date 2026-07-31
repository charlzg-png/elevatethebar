"use client";

import { useState } from "react";

const sections = [
  {
    id: "signatures", label: "Elevated", kicker: "Kava or mitra extract · $11",
    items: [
      ["Mitra Mule", "A botanical take on the classic", "$11"],
      ["Wild Berry Lemonade", "Wild berry, tart lemon, mitra extract", "$11"],
      ["Pink Sunset", "Strawberry and grapefruit", "$11"],
      ["Clear Skies", "Cucumber, lime, and mint", "$11"],
      ["Passion", "Passionfruit and berries", "$11"],
      ["Tulum", "Pineapple, habanero, and lime", "$11"],
    ],
  },
  {
    id: "blended", label: "Blended", kicker: "Kava or mitra extract · $12",
    items: [
      ["Life + Longevity", "Passionfruit with vitamins A, C, and E", "$12"],
      ["Berry Energetic", "Mixed berry, oatmilk, green tea, B vitamins", "$12"],
      ["Just Peachy", "Peach, vitamin C, echinacea, and zinc", "$12"],
      ["Use Your Noggin", "Piña colada-inspired cognitive blend", "$12"],
    ],
  },
  {
    id: "specialty", label: "Specialty", kicker: "House originals · $8–12",
    items: [
      ["Mango Sunrise", "Mango, grenadine, and mitra tea", "$8 / 10"],
      ["Sweet Dreams", "Lavender lemonade with mitra tea", "$8 / 10"],
      ["Twisted", "Kava, mitra tea, dragonfruit, lemonade", "$8 / 10"],
      ["Joy", "Coconut-inspired with your choice of kava", "$10 / 12"],
      ["Toasted", "A s’mores-inspired kava drink", "$10 / 12"],
      ["Chai Kava", "Kava, chai, and creamer", "$10 / 12"],
    ],
  },
  {
    id: "classics", label: "Classics", kicker: "The building blocks",
    items: [
      ["Traditional Kava", "Mind, Body, or 50/50", "$4 / 8 / 10"],
      ["Mitra Tea", "House brew: Red, Green, or White", "$6 / 8"],
      ["Mitra9 on Tap", "Ask your tender for today’s flavors", "$10 / 14"],
      ["Matcha Latte", "Smooth, earthy, and focused", "$6"],
      ["Espresso", "Single or double", "$2 / 4"],
      ["Latte", "Classic, oat, almond, or coconut", "$5"],
    ],
  },
];

export function MenuExplorer() {
  const [active, setActive] = useState("signatures");
  const section = sections.find((item) => item.id === active) ?? sections[0];

  return (
    <div className="menu-explorer">
      <div className="menu-tabs" role="tablist" aria-label="Drink menu categories">
        {sections.map((item, index) => (
          <button key={item.id} type="button" role="tab" aria-selected={active === item.id} onClick={() => setActive(item.id)}>
            <span>0{index + 1}</span>{item.label}
          </button>
        ))}
      </div>
      <div className="menu-panel" role="tabpanel">
        <div className="menu-panel-head"><p>{section.kicker}</p><span>Available all day</span></div>
        <div className="menu-list">
          {section.items.map(([name, note, price]) => (
            <article key={name}><div><h3>{name}</h3><p>{note}</p></div><strong>{price}</strong></article>
          ))}
        </div>
      </div>
    </div>
  );
}

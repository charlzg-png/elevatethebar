"use client";

import { useState } from "react";

const sections = [
  {
    id: "easy-start",
    label: "Easy start",
    note: "Familiar, bright, and easy to order",
    items: [
      ["Citrus + rosemary", "Fresh citrus, a light herbal finish, served over ice"],
      ["Wild berry lemonade", "Berry flavor, tart lemon, and a clean finish"],
      ["Peach + ginger", "Juicy peach with a little warmth and lift"],
      ["Cucumber + lime", "Crisp, light, and built for an easy first order"],
    ],
  },
  {
    id: "crafted",
    label: "Crafted zero proof",
    note: "Bar craft without the alcohol",
    items: [
      ["Tulum", "Pineapple, lime, and a touch of heat"],
      ["Pink sunset", "Strawberry, grapefruit, and citrus"],
      ["Passion", "Tropical fruit, berries, and a bright finish"],
      ["Seasonal feature", "A rotating house drink inspired by the location"],
    ],
  },
  {
    id: "botanical",
    label: "Kava + botanical",
    note: "Guided choices, explained clearly",
    items: [
      ["Traditional kava", "A straightforward house pour with format options"],
      ["Mitra tea", "House tea served simply or customized with flavor"],
      ["Botanical on tap", "Ask a host about today's available flavors"],
      ["House blend", "A location favorite with a clear ingredient story"],
    ],
  },
  {
    id: "cafe",
    label: "Coffee + tea",
    note: "For mornings, meetings, and the long day",
    items: [
      ["Espresso", "Single or double, served straight"],
      ["Latte", "Classic, iced, or made with your preferred milk"],
      ["Matcha", "Earthy, smooth, and available hot or iced"],
      ["Tea", "A rotating selection for a simple, familiar visit"],
    ],
  },
];

export function MenuExplorer() {
  const [active, setActive] = useState(sections[0].id);
  const section = sections.find((item) => item.id === active) ?? sections[0];

  return (
    <div className="menu-explorer">
      <div className="menu-tabs" role="tablist" aria-label="Drink menu categories">
        {sections.map((item, index) => (
          <button
            key={item.id}
            id={`tab-${item.id}`}
            type="button"
            role="tab"
            aria-selected={active === item.id}
            aria-controls={`panel-${item.id}`}
            tabIndex={active === item.id ? 0 : -1}
            onClick={() => setActive(item.id)}
          >
            <span>0{index + 1}</span>
            {item.label}
          </button>
        ))}
      </div>
      <div className="menu-panel" id={`panel-${section.id}`} role="tabpanel" aria-labelledby={`tab-${section.id}`}>
        <div className="menu-panel-head"><p>{section.note}</p><span>Ask what is available today</span></div>
        <div className="menu-list">
          {section.items.map(([name, description]) => (
            <article key={name}>
              <div><h3>{name}</h3><p>{description}</p></div>
              <span aria-hidden="true">+</span>
            </article>
          ))}
        </div>
        <p className="menu-panel-note">Ingredients, formats, pricing, and availability may vary by location. Ask a host for current details.</p>
      </div>
    </div>
  );
}

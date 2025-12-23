const easterDatesByYear = {
  2024: "2024-03-31",
  2025: "2025-04-20",
  2026: "2026-04-05",
  2027: "2027-03-28",
  2028: "2028-04-16",
};

const now = new Date();
const currentYear = now.getFullYear();
const easterStr = easterDatesByYear[currentYear];

if (!easterStr) {
  console.warn("Easter date not defined for year", currentYear);
} else {
  const easter = new Date(easterStr);
  const oneDay = 86400000;

  const visibleFrom = new Date(easter.getTime() - 8 * oneDay); // Saturday before Cvjetnica
  const visibleTo = new Date(easter.getTime() + 6 * oneDay); // Tuesday after Uskrs
  const isVisible = now >= visibleFrom && now <= visibleTo;

  document.getElementById("easter-schedule").style.display = isVisible
    ? "block"
    : "none";

  const dates = {
    "cvjetnica-date": new Date(easter.getTime() - 7 * oneDay),
    "veliki-ponedjeljak-date": new Date(easter.getTime() - 6 * oneDay),
    "veliki-utorak-date": new Date(easter.getTime() - 5 * oneDay),
    "velika-srijeda-date": new Date(easter.getTime() - 4 * oneDay),
    "veliki-cetvrtak-date": new Date(easter.getTime() - 3 * oneDay),
    "veliki-cetvrtak-ispovijed-date": new Date(easter.getTime() - 3 * oneDay),
    "veliki-petak-date": new Date(easter.getTime() - 2 * oneDay),
    "veliki-petak-ispovijed-date": new Date(easter.getTime() - 2 * oneDay),
    "velika-subota-date": new Date(easter.getTime() - 1 * oneDay),
    "velika-subota-ispovijed-date": new Date(easter.getTime() - 1 * oneDay),
    "uskrs-date": easter,
    "uskrsni-ponedjeljak-date": new Date(easter.getTime() + 1 * oneDay),
    "uskrsni-utorak-date": new Date(easter.getTime() + 2 * oneDay),
    "od-date": new Date(easter.getTime() + 3 * oneDay),
    "do-date": new Date(easter.getTime() + 6 * oneDay),
    "ispovijed-djeca-date": new Date(easter.getTime() - 3 * oneDay),
  };

  const formatDate = (d) =>
    d.toLocaleDateString("hr-HR", {
      day: "numeric",
      month: "long",
    });

  Object.entries(dates).forEach(([id, date]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = formatDate(date);
  });
}

const christmasVisibilityRanges = [
  {
    year: 2024,
    from: new Date("2024-12-23"),
    to: new Date("2025-01-12"),
  },
  {
    year: 2025,
    from: new Date("2025-12-23"),
    to: new Date("2026-01-12"),
  },
  {
    year: 2026,
    from: new Date("2026-12-23"),
    to: new Date("2027-01-10"),
  },
  {
    year: 2027,
    from: new Date("2027-12-23"),
    to: new Date("2028-01-09"),
  },
  {
    year: 2028,
    from: new Date("2028-12-23"),
    to: new Date("2029-01-07"),
  },
];

const isChristmasVisible = christmasVisibilityRanges.some(({ from, to }) => {
  return now >= from && now <= to;
});

const container = document.getElementById("christmas-schedule");
if (container) container.style.display = isChristmasVisible ? "block" : "none";

const dateMap = {
  "badnjak-date": "2025-12-24",
  "bozic-date": "2025-12-25",
  "stjepan-date": "2025-12-26",
  "sveta-obitelj-date": "2025-12-28",
  "stara-godina-date": "2025-12-31",
  "nova-godina-date": "2026-01-01",
  "druga-nedjelja-date": "2026-01-04",
  "blagoslov-vode-date": "2026-01-05",
  "bogojavljenje-date": "2026-01-06",
  "krstenje-date": "2026-01-11",
};

const format = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString("hr-HR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

Object.entries(dateMap).forEach(([id, dateStr]) => {
  const el = document.getElementById(id);
  if (el) el.textContent = format(dateStr);
});

const korizmaVisibilityRanges = [
  {
    year: 2024,
    from: new Date("2024-02-14"), // Ash Wednesday
    to: new Date("2024-03-30"), // Holy Saturday
  },
  {
    year: 2025,
    from: new Date("2025-03-05"),
    to: new Date("2025-04-19"),
  },
  {
    year: 2026,
    from: new Date("2026-02-18"),
    to: new Date("2026-04-04"),
  },
  {
    year: 2027,
    from: new Date("2027-02-10"),
    to: new Date("2027-03-27"),
  },
  {
    year: 2028,
    from: new Date("2028-03-01"),
    to: new Date("2028-04-15"),
  },
];

const isKorizmaVisible = korizmaVisibilityRanges.some(({ from, to }) => {
  return now >= from && now <= to;
});

const korizmaBlock = document.getElementById("korizma-schedule");
if (korizmaBlock) {
  korizmaBlock.style.display = isKorizmaVisible ? "block" : "none";
}

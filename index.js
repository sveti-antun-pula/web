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
  const visibleTo = new Date(easter.getTime() + 2 * oneDay); // Tuesday after Uskrs
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

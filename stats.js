// ============================================================
// EDIT THIS FILE to update the countdown page. Never edit index.html.
//
// The page has a toggle at the top: "Maxwell" and "Southend" are the
// two clubs it switches between. Each club has its own block below.
//
// PER-CLUB SETTINGS (inside each club block):
//   "Goal"            the signed-agreements target. 0 = not set yet.
//   "Goal Date"       last day to hit the goal, as "YYYY-MM-DD". "" = not set yet.
//   "Campaign Start"  the day that club's presale opened, "YYYY-MM-DD". "" = not set yet.
//   "Status Label"    (optional) the small tag next to the club name.
//   The progress bar needs "Goal". "Days To Goal Date" needs "Goal Date".
//   The Pace Check needs all three.
//
// EFT fields (Performance+/Studio+/Neighborhood, Total Expected,
// Avg Ticket Price) are typed straight from your tracker, nothing
// here is calculated. "Total Expected EFT" is its own number, not a
// sum of the three above it. If a club has no EFT fields, the EFT
// section is simply hidden for that club.
//
// IMPORTANT: never put commas inside numbers (write 38705.50, not 38,705.50).
// ============================================================
const STATS = {
  "Last Updated": "October 18, 9:00PM",

  "Maxwell": {
    "Goal": 1200,
    "Goal Date": "2026-10-07",
    "Campaign Start": "2026-07-06",
    "Status Label": "Presale Open",

    "Signed Agreements": 1396,
    "Signed Performance+": 524,
    "Signed Studio+": 483,
    "Signed Neighborhood": 389,
    "Deposit Signed Count": 507,
    "Reserved Members": 725,
    "Total Leads": 3184,

    "EFT Performance+": 53416.50,
    "EFT Studio+": 43267.00,
    "EFT Neighborhood": 29629.50,
    "Total Expected EFT": 126313.00,
    "Avg Ticket Price": 90.48
  },

  "Southend": {
    "Goal": 1200,
    "Goal Date": "2026-12-18",
    "Campaign Start": "2026-10-18",
    "Status Label": "Presale Open",

    "Signed Agreements": 19,
    "Signed Performance+": 7,
    "Signed Studio+": 6,
    "Signed Neighborhood": 6,
    "Deposit Signed Count": 0,
    "Reserved Members": 0,
    "Total Leads": 498
  }
};

// ============================================================
// EDIT THIS FILE to update the countdown page. Never edit index.html.
//
// The page has a toggle at the top: "Maxwell" and "Southend" are the
// two clubs it switches between. Each club has its own block below.
//
// CURRENT MONTH VIEW
//   "Month Label" (just below) is the name of the month being shown, for
//   example "October". Change it once at the start of a new month and the
//   toggle button and every heading on the page update to match.
//   A club shows a second toggle ("Total Count" / the month) only if it has a
//   "Month" block. Maxwell has one. Southend does not, so it stays as it is.
//   Inside "Month", use the same fields as the club's totals but only for
//   that month. Leave a field as "" until you have the number and the page
//   will show a dash instead of a zero.
//
// PER-CLUB SETTINGS (inside each club block):
//   "Goal"            the signed-agreements target. 0 = not set yet.
//   "Goal Date"       last day to hit the goal, as "YYYY-MM-DD". "" = not set yet.
//   "Campaign Start"  the day that club's presale opened, "YYYY-MM-DD". "" = not set yet.
//   "Status Label"    (optional) the small tag next to the club name.
//   The progress bar needs "Goal". "Days To Goal Date" needs "Goal Date".
//   The Pace Check needs all three. (Total view only.)
//   Inside "Month" you may add an optional "Goal" for the month. With one, the
//   month view shows a progress bar. Without it, it just shows the count.
//
// IMPORTANT: never put commas inside numbers (write 1496, not 1,496).
// ============================================================
const STATS = {
  "Last Updated": "October 28, 10:00AM",
  "Month Label": "October",

  "Maxwell": {
    "Goal": 1200,
    "Goal Date": "2026-10-07",
    "Campaign Start": "2026-07-06",
    "Status Label": "Presale Open",

    "Signed Agreements": 1504,
    "Signed Performance+": 543,
    "Signed Studio+": 524,
    "Signed Neighborhood": 437,
    "Deposit Signed Count": 507,
    "Reserved Members": 725,
    "Total Leads": 3539,

    // ---- Current month only (Month Label above). Fill these in. ----
    "Month": {
      "Goal": 400,
      "Signed Agreements": "404",
      "Signed Performance+": "104",
      "Signed Studio+": "144",
      "Signed Neighborhood": "155",
      "Deposit Signed Count": "",
      "Reserved Members": "",
      "Total Leads": "1150"
    }
  },

  "Southend": {
    "Goal": 1200,
    "Goal Date": "2026-12-18",
    "Campaign Start": "2026-10-18",
    "Status Label": "Presale Open",

    "Signed Agreements": 57,
    "Signed Performance+": 29,
    "Signed Studio+": 14,
    "Signed Neighborhood": 15,
    "Deposit Signed Count": 0,
    "Reserved Members": 0,
    "Total Leads": 684
  }
};

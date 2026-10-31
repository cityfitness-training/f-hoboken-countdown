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
// TERM SPLIT (12 month / 3 month)
//   Each tier can show how many are on 12-month and 3-month terms. Type the
//   numbers in these fields, in the club's totals and/or inside "Month":
//     "Signed Performance+ 12M"   "Signed Performance+ 3M"
//     "Signed Studio+ 12M"        "Signed Studio+ 3M"
//     "Signed Neighborhood 12M"   "Signed Neighborhood 3M"
//   They show under each tier card, plus an overall 12M / 3M line under the
//   cards. If every one of these is left as "" the term lines stay hidden.
//   The tier totals ("Signed Performance+" etc.) are still typed like always.
//   If you ever leave a tier total blank, the page adds its 12M + 3M for you.
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
  "Last Updated": "October 31, 1:00PM",
  "Month Label": "October",

  "Maxwell": {
    "Goal": 1200,
    "Goal Date": "2026-10-07",
    "Campaign Start": "2026-07-06",
    "Status Label": "Presale Open",

    "Signed Agreements": 1523,
    "Signed Performance+": 550,
    "Signed Studio+": 528,
    "Signed Neighborhood": 445,
    "Signed Performance+ 12M": "536",
    "Signed Performance+ 3M": "14",
    "Signed Studio+ 12M": "515",
    "Signed Studio+ 3M": "13",
    "Signed Neighborhood 12M": "423",
    "Signed Neighborhood 3M": "15",
    "Deposit Signed Count": 507,
    "Reserved Members": 725,
    "Total Leads": 3616,

    // ---- Current month only (Month Label above). Fill these in. ----
    "Month": {
      "Goal": 400,
      "Signed Agreements": "423",
      "Signed Performance+": "111",
      "Signed Studio+": "148",
      "Signed Neighborhood": "163",
      "Signed Performance+ 12M": "97",
      "Signed Performance+ 3M": "14",
      "Signed Studio+ 12M": "135",
      "Signed Studio+ 3M": "13",
      "Signed Neighborhood 12M": "148",
      "Signed Neighborhood 3M": "15",
      "Deposit Signed Count": "",
      "Reserved Members": "",
      "Total Leads": "1228"
    }
  },

  "Southend": {
    "Goal": 1200,
    "Goal Date": "2026-12-18",
    "Campaign Start": "2026-10-18",
    "Status Label": "Presale Open",

    "Signed Agreements": 63,
    "Signed Performance+": 29,
    "Signed Studio+": 18,
    "Signed Neighborhood": 16,
    "Deposit Signed Count": 0,
    "Reserved Members": 0,
    "Total Leads": 795
  }
};

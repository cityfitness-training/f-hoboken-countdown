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
// ACTIVE MEMBERS = "Signed Agreements" minus "Canceled". Type the canceled count
// in "Canceled" (totals and/or inside "Month"). Blank = not entered yet.
// The cancellation % is worked out for you (Canceled / Signed Agreements).
//
// IMPORTANT: never put commas inside numbers (write 1496, not 1,496).
// ============================================================
const STATS = {
  "Last Updated": "November 12, 8:30AM",
  "Month Label": "November",

  "Maxwell": {
    "Goal": 1200,
    "Goal Date": "2026-10-07",
    "Campaign Start": "2026-07-06",
    "Status Label": "Presale Open",

    "Signed Agreements": 1594,
"Canceled": 0,
    "Signed Performance+": 574,
    "Signed Studio+": 549,
    "Signed Neighborhood": 471,
    "Signed Performance+ 12M": "556",
    "Signed Performance+ 3M": "18",
    "Signed Studio+ 12M": "533",
    "Signed Studio+ 3M": "16",
    "Signed Neighborhood 12M": "448",
    "Signed Neighborhood 3M": "23",
    "Deposit Signed Count": 507,
    "Reserved Members": 725,
    "Total Leads": 4026,

    // ---- Current month only (Month Label above). Fill these in. ----
    "Month": {
      "Goal": 400,
      "Signed Agreements": "66",
"Canceled": "",
      "Signed Performance+": "23",
      "Signed Studio+": "20",
      "Signed Neighborhood": "23",
      "Signed Performance+ 12M": "19",
      "Signed Performance+ 3M": "4",
      "Signed Studio+ 12M": "17",
      "Signed Studio+ 3M": "3",
      "Signed Neighborhood 12M": "15",
      "Signed Neighborhood 3M": "8",
      "Deposit Signed Count": "",
      "Reserved Members": "",
      "Total Leads": "351"
    }
  },

  "Southend": {
    "Goal": 1200,
    "Goal Date": "2027-01-01",
    "Campaign Start": "2026-10-18",
    "Status Label": "Presale Open",

    "Signed Agreements": 96,
"Canceled": "",
    "Signed Performance+": 46,
    "Signed Studio+": 27,
    "Signed Neighborhood": 23,
    "Deposit Signed Count": 0,
    "Reserved Members": 0,
    "Total Leads": 1037
  }
};

# New Staff Audit Training — Trial Balance

A two-part training module. Part 1 is an annotated trial balance explaining how each
account maps to an audit lead schedule and why. Part 2 is a quiz that draws accounts
at random from the same data.

Static HTML, CSS, and JavaScript. No build step, no dependencies, no server.

## Files

| File | What it is |
|---|---|
| `index.html` | Breakdown — every account, why it's in its category, and its risk |
| `trial-balance.html` | Full trial balance with all figures, for reference |
| `quiz.html` | Quiz |
| `tb-data.js` | All 93 accounts, the nine lead schedules, and every explanation |
| `styles.css` | Shared stylesheet |
| `build_data.py` | Regenerates `tb-data.js` from the source workbook |

## How the three pages fit together

Buttons at the top of every page move between them.

**Breakdown** is the teaching page. It carries no balances at all — the question it
answers is why an account belongs to its category and what that account puts at risk,
not what it is worth this year. Accounts are grouped into the nine audit areas, each
with its lead reference, the reasoning behind the grouping, and the core procedures.
Every account shows its workbook row, which links straight to that row on the trial
balance page.

**Full trial balance** is the reference. All 93 accounts with every figure, in the
workbook's own column layout: 6/30/2025 adjusted, 6/30/2026 unadjusted, AJEs, 6/30/2026
adjusted. It can be read in workbook order or grouped by area with subtotals, and the
Classification column links back to that area's breakdown.

Both pages carry a **Row** column matching the spreadsheet (rows 10 through 102), and a
filter box that accepts an account name, an account number, a classification, or a row
number.

## Deploying to GitHub Pages

1. Create a new repository on GitHub.
2. Upload `index.html`, `trial-balance.html`, `quiz.html`, `tb-data.js`, and `styles.css`
   to the repository root. (`build_data.py` and this README can come along but aren't
   served.)
3. Go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**.
5. Set the branch to `main` and the folder to `/ (root)`. Save.
6. Wait a minute or two. The site appears at
   `https://<your-username>.github.io/<repository-name>/`.

If the repository is private, Pages requires a paid GitHub plan. A public repository
works on the free tier, so consider whether this content should be public before you
push it.

## Editing the content

Everything a reviewer would want to change lives in `tb-data.js`. Open it in any text
editor — it is a plain JavaScript file with three sections.

**`CATEGORIES`** — the nine lead schedules. Each has:
- `tagline` — the italic line under the heading
- `why` — the main explanation of the grouping
- `risk` — the callout with the red rule beside it
- `testing` — the lettered list of core procedures
- `lead` — the index reference shown in the corner box, or `null` for none

**`ACCOUNTS`** — the 101 accounts. Balances came from the workbook and should not be
edited by hand. The two fields worth editing:
- `why` — why the account is classified where it is. Every account has one.
- `risk` — what the account or its movement puts at risk. Optional; omit with `null`.
- `ticks` — which margin tickmarks appear. Valid values: `"bs"` (balance sheet account
  on an income statement lead), `"grant"` (grant or donor-restricted), `"coa"` (chart of
  accounts housekeeping).

**`REASONING`** — the twelve "why" questions in the quiz. `a` is the index of the
correct option, counting from zero.

Commit the edited file and Pages redeploys automatically.

## Regenerating from a new trial balance

`build_data.py` reads the extracted workbook rows and merges them with the authored
explanations. If next year's trial balance changes, re-extract the rows and rerun it.
The explanations live in the script, so they survive the regeneration.

## What the trial balance still leaves open

The module flags these rather than silently resolving them. All are annotated on the
breakdown page and appear as quiz questions:

- **Vehicle Maintenance (2105)** carries $4,500 despite having five vehicle accounts
  beneath it, and **Other Income (1514)** carries $400 the same way. Costs coded to a
  parent account are invisible to the by-vehicle analysis those accounts exist for.
- **Conventions/Meetings (2128) and Conventions & Meetings (2129)** are near-duplicate
  accounts splitting one activity across two lines.
- **Company Benefits (6110, 6111)** are classified to Expense while the wage-side
  retirement in 6108 sits under Payroll. That follows the account tree rather than the
  substance, which is defensible but worth knowing when totalling compensation.

Earlier versions of the workbook had a duplicated account number, two conflicting lead
references, and no reference for Cash/Investments. All are resolved — Cash/Investments
files to 1010.00 alongside Cash.

## Notes

- Nothing is saved between visits. Scores reset when the tab closes.
- Fonts load from Google Fonts. If your firm blocks external font CDNs, the page falls
  back to system fonts and still reads fine.
- Prints reasonably — the quiz CTA and contents are hidden in print styles.

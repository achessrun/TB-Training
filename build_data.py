import json

# Everything a reviewer would want to reword lives in this file.
# Balances come from the workbook; all prose comes from the dicts below.

raw = json.load(open('/home/claude/tbtraining/raw.json'))

TICKS = {
    "bs": {
        "mark": "†",
        "label": "Balance sheet account on an income statement lead",
        "detail": "The account is an asset or a liability, but it is filed with the activity that produces it, because the same procedures give evidence about both.",
    },
    "grant": {
        "mark": "‡",
        "label": "Grant or donor-restricted money",
        "detail": "Carries obligations beyond the financial statement audit. The grant agreement or the donor's stipulation governs how the money could be spent, and that has to be tested on its own terms.",
    },
    "noref": {
        "mark": "◊",
        "label": "No lead reference assigned",
        "detail": "Every other area has an index number. These accounts do not, so ask the in-charge where they should be filed before starting work on them.",
    },
    "coa": {
        "mark": "§",
        "label": "Chart of accounts housekeeping",
        "detail": "Not a misstatement, but something that will cause confusion every year until somebody fixes it. Usually a management letter comment.",
    },
}

BS_ON_IS = {1500, 1501, 1502, 1503, 1504, 2000, 1550,
            6041, 6042, 6043, 6045, 6046, 6047, 6048, 6049, 6050}
GRANT = {1501, 1512, 2147, 1555, 2144}
NOREF = {120, 130}
COA = {2105, 1514, 2128, 2129}

DESC = {
    # ---------------- Cash ----------------
    100: "The account everything flows through. Confirm it directly with the bank, agree the year-end reconciliation to the general ledger, and concentrate your cutoff testing here rather than on the savings account.",
    110: "Low activity, so it should reconcile cleanly. Any reconciling item other than posted interest deserves a question, because there is rarely a legitimate reason for one.",

    # ---------------- Cash / Investments ----------------
    120: "Confirm the holdings and the year-end fair value with the custodian. Proving the balance is quick; drafting the credit, custodial, and concentration risk disclosure is the part that takes real time.",
    130: "Liquid enough to sit beside cash, still an investment for disclosure purposes. Check the maturity date, because if it runs past twelve months the classification changes.",

    # ---------------- Prepaid ----------------
    1000: "One line usually hiding several unrelated policies with different coverage periods. Get the supporting schedule, foot it, and recompute the amortization on the largest items to test the split between this year and next.",

    # ---------------- Revenue: receivables ----------------
    1500: "Down 5 percent while tax revenue rose, which is the direction you want to see but still needs an explanation. Confirmations sent here test whether the revenue behind the balance occurred, not merely whether the asset exists.",
    1501: "Up 15 percent against grant revenue's 10 percent, so receivables are growing faster than the revenue producing them. Ask whether reimbursement requests are going out on time, and test that the underlying costs were eligible and incurred before year end.",
    1502: "Unchanged at exactly $15,000 for two years running. A balance that never moves is usually stale, so find out what makes it up before accepting it.",
    1503: "The largest percentage move in receivables at 20 percent, though on a small base. Scope it by materiality, but ask what drove it.",
    1504: "A vague account name on a declining balance. Ask what actually posts here, because general and catch-all receivables are where reconciling differences quietly settle.",
    2000: "Filed under expense because the search for unrecorded liabilities tests this balance and expense completeness in one procedure. Pull disbursements made after year end and ask which ones relate to goods or services received before it.",
    1550: "Cash received before it was earned, the mirror image of a receivable. Test that what remains here genuinely has unmet eligibility requirements rather than being revenue somebody forgot to recognize.",

    # ---------------- Revenue: streams ----------------
    1510: "The largest single line in the entity. Tax revenue is rarely testable transaction by transaction, so analytics carry the weight: compare against the levy, against prior year, and against budget.",
    1511: "A secondary tax stream moving in step with the main one. Confirm it is a genuinely different tax rather than a residual that belongs in 1510.",
    1512: "Recognized as eligible costs are incurred, not when the award is signed and not when the cash arrives. Read the award agreements and tie the revenue to the spending behind it in account 2147.",
    1513: "Should track the balances in accounts 120 and 130. Recompute from the investment confirmations and ask whether the implied yield is plausible.",
    1514: "Four hundred dollars posted directly to a parent account that has a child beneath it. The amount is trivial; the habit is the problem, because it hides activity from anyone reading the account tree.",
    1516: "Small and stable. Ask what makes it up once, then scope it out.",
    1517: "A second interest account alongside 1513, so establish which balances feed which. Two interest lines usually means two sources, typically bank deposits and investments.",
    1518: "Up 15 percent, the fastest-growing revenue stream in the entity. Determine whether any of it carries donor restrictions that should be sitting in 1555 instead.",
    1519: "The entity collects rent here while making a building lease payment in 5130. Establish whether those two relate to the same property before writing up either one.",
    1555: "Donor restrictions follow the money. Trace the receipts to the donor's stipulation, then confirm the spending in account 2144 stayed inside it.",

    # ---------------- Net assets ----------------
    7000: "Zero, which is exactly what you want. A balance sitting here means an accounting system conversion left a plug that nobody ever allocated to a real account.",
    7010: "Prove this by roll-forward: prior year audited ending balance, plus the current year change in net assets, equals this number. Then scan the account for anything posted during the year that was not the year-end close.",

    # ---------------- Payroll: withholding liabilities ----------------
    6041: "Agree to the subsequent federal deposit. Withholding at year end should clear within days of the next deposit deadline, so a balance that lingers is a filing problem rather than a measurement one.",
    6042: "Employee-side Medicare withheld and not yet remitted. Recompute against 1.45 percent of wages as a reasonableness check.",
    6043: "Employee-side Social Security withholding. Recompute against 6.2 percent of covered wages up to the annual limit; a ratio well off that points to a wage base error.",
    6045: "Agree to the subsequent state remittance, and confirm the filing frequency matches what the state requires at this payroll volume.",
    6046: "Unchanged at $2,000 across both years. Employee-funded withholding that never moves is worth one question.",
    6047: "Employee premium withholding awaiting remittance to the carrier. Agree to the subsequent payment and to the carrier invoice.",
    6048: "Employee deferrals withheld but not yet deposited to the plan. Late deposits are a plan compliance issue, so test the timing, not just the amount.",
    6049: "The employer match, which should mirror account 6042 almost exactly. It does, and that symmetry is itself part of the test.",
    6050: "The employer match to 6043. If the two diverge, something is wrong with either the wage base or the way the entries post.",

    # ---------------- Payroll: expenses ----------------
    6101: "The largest line in the trial balance. Reconcile to the W-3 and the four quarterly 941s, and test a sample of employees back to their authorized rate in the personnel file.",
    6102: "Hourly wages at roughly a third of salaries. Test overtime eligibility here, because employee classification is the common finding in this area.",
    6103: "Run through payroll rather than as an expense reimbursement, which generally makes it taxable to the employee. Confirm that is how it is being reported.",
    6105: "The employer match. Should land near 6.2 percent of covered wages; recompute as a reasonableness test rather than vouching anything.",
    6106: "Should land near 1.45 percent of wages with no cap. A one-line recomputation that reliably catches wage base errors.",
    6107: "Employer state unemployment or a similar assessment. The rate is experience-based, so get the current year rate notice rather than assuming last year's rate carried over.",
    6108: "Employer retirement contributions on the payroll side. Agree to the contribution formula in the plan document instead of assuming the prior year rate still applies.",
    6109: "Overtime running at about 8 percent of salaries. Compare against prior year and against headcount, since sustained overtime usually signals unfilled positions rather than extra work.",

    # ---------------- Expense ----------------
    2100: "Recurring and predictable. An analytical comparison to prior year is normally enough.",
    2101: "Tie to the bank statements already in hand from the cash work rather than requesting anything new.",
    2102: "A public entity paying property tax is unusual enough to ask about. It may relate to property held outside the entity's exempt purpose.",
    2104: "Routine spending. Worth confirming whether uniform allowances are reported as taxable wages where the rules require it.",
    2105: "Forty-five hundred dollars coded straight to a parent account that has five vehicle accounts beneath it. Somebody charged work to the header instead of to a vehicle, which defeats the point of tracking by vehicle at all.",
    2106: "Vehicle-level detail supports a fleet analytic: cost per vehicle should be broadly comparable unless one is much older or much harder used.",
    2107: "Moving in line with the rest of the fleet at 5 percent. That consistency across all five vehicles is itself mild evidence the coding is reliable.",
    2108: "Mid-fleet by cost and moving with the others. Nothing here calls for work beyond the analytic.",
    2109: "The cheapest vehicle in the fleet to maintain. If it is also the newest, that is the expected pattern rather than an anomaly.",
    2110: "The most expensive vehicle to maintain. Ask whether it is the oldest or the hardest used, and whether replacement is already planned.",
    2112: "Separate from the audit fee in 2114. Confirm whether the same firm provides both services, because that raises an independence question you need answered.",
    2113: "Advertising filed under professional fees, which suggests an agency relationship rather than direct media buys.",
    2114: "Your own firm's billing. Read the engagement letter, and expect the client's record of the fee to agree to it.",
    2115: "High volume, low value, immaterial. Analytics only.",
    2116: "Up 10 percent. Check whether anything in here exceeds the capitalization threshold and should have been coded to capital outlay instead.",
    2118: "A stable service contract. Compare to the contract rate rather than testing individual invoices.",
    2119: "One of two electric providers, alongside 2120 and the cooperative in 2123. Multiple providers usually means multiple sites, so establish the locations before treating any of them as unusual.",
    2120: "The second electric provider. Different rates across providers are expected; what would be odd is two providers billing for the same location.",
    2121: "One of two water accounts, paired with 2124. Confirm the split reflects different locations rather than inconsistent coding.",
    2122: "A utility payment to another unit of government. Determine whether that unit is a related party, because the disclosure requirement follows from that.",
    2123: "A third electric account. Rural cooperatives bill on a different structure, so a different rate here is expected rather than alarming.",
    2124: "The municipal water account, paired with 2121. Same question about whether the split maps to locations.",
    2125: "Up 8 percent, the largest utility movement. Weather and rate changes both explain it, but the analytic should say which one.",
    2126: "Up 10 percent against a fleet whose maintenance rose only 5 percent. That gap is either price or mileage, and the explanation needs to say which.",
    2127: "The line this training program itself would be charged to. Predictable and immaterial.",
    2128: "Effectively the same account name as 2129. Find out what distinguishes them, because if nothing does, one should be closed and the balances merged.",
    2129: "The near-twin of 2128. Duplicate accounts split the history of one activity across two lines, which makes every year-over-year comparison harder than it needs to be.",
    2131: "Up 7 percent. Tie to the policy declarations page, which you will want in the file anyway for the insurance disclosure.",
    2132: "Workers compensation premiums track payroll, so this should move with account 6101, and it does. When it stops moving with payroll, that is the signal.",
    2133: "A single wireless carrier account. Note that phone reimbursement is handled through payroll in 6103, so the entity does both, which is worth understanding.",
    2134: "A stable service contract. Compare against the contract rather than testing invoices.",
    2136: "Up 12 percent, the largest operating expense increase in the trial balance. Recurring software renews itself, so ask which subscriptions were actively reauthorized and which simply rolled over.",
    2137: "Up 6 percent. Scan the detail for anything that should have been capitalized as a building improvement instead of expensed.",
    2139: "Consumable and immaterial. Analytics only.",
    2140: "Public entities face particular scrutiny on food and beverage spending. Test it against the entity's own policy, not only for mathematical accuracy.",
    2141: "Consumable and immaterial. Analytics only.",
    2142: "Almost $30,000 in an account called nothing more specific than Operations. Accounts this size with no breakdown deserve a look at the underlying detail.",
    2144: "The spending side of the restriction in 1555. Test that the costs charged here were actually permitted by the donor, not merely that they were incurred.",
    2145: "Down 20 percent, but penalties are a compliance signal rather than a cost line. Find out what was penalized, and whether the same thing was penalized last year.",
    2146: "Program spending, moving steadily. Ask whether any portion is donor-restricted and therefore belongs with the restricted fund accounts.",
    2147: "The spending side of grant revenue in 1512, up 10 percent in step with it. That relationship is precisely what makes the grant revenue recognizable.",
    2148: "Up 8 percent. The capitalization question again: equipment above the threshold belongs in capital outlay, not here.",
    2149: "Program spending. If any of it is grant-funded, the grant's eligibility rules follow the money into this account.",
    2150: "Employee recognition can be taxable compensation depending on its form and value. Ask what it was actually spent on before concluding it is routine.",
    2151: "A catch-all. Scan the detail for anything large enough or specific enough to belong in a named account.",
    2152: "Test against the entity's written travel policy and confirm approvals. Travel is a reliable finding area precisely because the policy is often stricter than the practice.",
    6110: "Employer retirement contributions classified to Expense, while the wage-side retirement in 6108 sits under Payroll. The split follows the account tree rather than the substance, so remember it when totalling compensation.",
    6111: "A second employer retirement vehicle alongside 6110. Establish which employees are eligible for which plan, because that drives whether the contributions are correct.",

    # ---------------- Capital assets ----------------
    5100: "Down 15 percent. Ask whether a planned purchase slipped into next year rather than concluding capital spending declined. Agree the additions to the capital asset roll-forward kept outside this trial balance.",
    4120: "A gain, so assets were sold above their carrying value. Recompute the gain from the disposal schedule and trace the proceeds into cash.",

    # ---------------- Debt ----------------
    5120: "Falling while the lease payment rises, which is the signature of an amortizing obligation. Recompute from the amortization schedule and agree the split between principal and interest.",
    5130: "Filed under debt service rather than occupancy expense, which implies a financing arrangement carrying a lease liability. Confirm that conclusion against the agreement, and note the entity also collects rent in 1519.",
}

accounts = []
missing = []
for acct, name, py, cy, lead, cls in raw:
    ticks = []
    if acct in BS_ON_IS: ticks.append("bs")
    if acct in GRANT:    ticks.append("grant")
    if acct in NOREF:    ticks.append("noref")
    if acct in COA:      ticks.append("coa")
    if acct not in DESC:
        missing.append((acct, name))
    accounts.append({
        "acct": acct, "name": name, "py": py or 0, "cy": cy or 0,
        "lead": lead, "cls": cls, "ticks": ticks,
        "note": DESC.get(acct),
    })

exec(open('/home/claude/tbtraining/cats_only.py').read())

# The revised trial balance moved deferred revenue onto the main revenue lead
# and assigned 4010.00 to capital assets, so those passages need updating.
for c in CATEGORIES:
    c.pop("sublead", None)
    if c["key"] == "Capital Assets":
        c["lead"] = "4010.00"
    if c["key"] == "Revenue":
        c["why"] = ("This is the grouping new staff question most, so it is worth being precise. "
                    "Accounts receivable is a balance sheet asset. It is filed with revenue anyway "
                    "because receivables and revenue are opposite ends of the same transaction. You "
                    "confirm a receivable to get evidence that the revenue behind it was real. You "
                    "test revenue cutoff to get evidence that receivables are complete. Deferred "
                    "revenue sits here too, for the same reason running the other direction. "
                    "Splitting these onto separate lead schedules would mean doing one walkthrough twice.")
    if c["key"] == "Cash/Investments":
        c["why"] = ("A certificate of deposit maturing inside twelve months spends like cash, so it "
                    "sits beside cash on the trial balance. But it is not cash. It carries a fair "
                    "value, a maturity date, and a counterparty, and for a governmental entity it "
                    "triggers deposit and investment risk disclosures that operating cash does not. "
                    "This is also the one area with no lead reference assigned, which is a question "
                    "for the in-charge before fieldwork starts.")

REASONING = [
    {
        "q": "Accounts Receivable is an asset. Why is it filed with the Revenue lead schedule instead of an asset lead?",
        "options": [
            "Because receivables and revenue are two ends of the same transaction and share the same testing",
            "Because receivables are immaterial and do not warrant their own lead",
            "Because the balance nets to zero once the cash is collected",
            "Because assets get their own lead only when they exceed materiality",
        ],
        "a": 0,
        "why": "Confirming a receivable produces evidence that the revenue behind it occurred. Testing revenue cutoff produces evidence that receivables are complete. Grouping them means one walkthrough and one workpaper instead of two that constantly cross-reference each other.",
    },
    {
        "q": "Accounts Payable is filed with the Expense lead. Which procedure is the reason for that grouping?",
        "options": [
            "Confirmation of payable balances with vendors",
            "The search for unrecorded liabilities",
            "Recalculation of the payable aging",
            "Agreeing the payable subledger to the general ledger",
        ],
        "a": 1,
        "why": "The search examines disbursements made after year end to find costs that belonged to the prior period. Every item found is both a missing payable and a missing expense, so one procedure covers assertions on both accounts.",
    },
    {
        "q": "The payroll withholding liabilities sit on the Payroll lead rather than with other liabilities. What principle is that?",
        "options": [
            "Liabilities are always filed with the expense that created them",
            "Withholding liabilities are immaterial and get absorbed into the nearest lead",
            "The same procedure that tests payroll expense also gives evidence about the withholding",
            "Payroll liabilities are not audited separately",
        ],
        "a": 2,
        "why": "Same logic as receivables under revenue. Reconciling wages to the 941s tests the expense and the withholding at once, and each liability balance is proved by agreeing it to the subsequent remittance. Testing them apart would mean repeating the reconciliation.",
    },
    {
        "q": "This trial balance has no accumulated depreciation and no depreciation expense, only Capital Expenditures. What does that tell you?",
        "options": [
            "The entity leases all of its capital assets",
            "The entity has fully depreciated every asset it owns",
            "Depreciation was omitted in error and needs an audit adjustment",
            "These are fund-level books on the modified accrual basis, where capital outlay is an expenditure",
        ],
        "a": 3,
        "why": "In a governmental fund, buying an asset is an expenditure. The depreciated capital asset base lives only in the government-wide conversion entries, on a schedule kept outside this trial balance.",
    },
    {
        "q": "Opening Balance Equity shows a zero balance. How should you read that?",
        "options": [
            "As expected. A balance would suggest a system conversion left an uncleared plug",
            "As a red flag, since the account should carry the prior year balance",
            "As evidence the entity has no equity",
            "As a rounding difference worth investigating",
        ],
        "a": 0,
        "why": "Opening Balance Equity is a conversion artifact. Zero means whoever migrated the books finished the job. A balance means something never got allocated to a real account.",
    },
    {
        "q": "Building Lease/Payment is grouped under Debt rather than as an occupancy expense. What does that imply?",
        "options": [
            "The payment is for a month-to-month rental",
            "Somebody concluded this is a financing arrangement rather than an operating rental",
            "The lease is with a related party",
            "The payment was misclassified and belongs in Expense",
        ],
        "a": 1,
        "why": "Debt service grouping implies a lease liability rather than rent expense. That is a materially different accounting answer, so confirm the conclusion against the agreement before accepting it.",
    },
    {
        "q": "Which assertion drives most of the testing on the Expense lead?",
        "options": ["Existence", "Valuation", "Completeness", "Rights and obligations"],
        "a": 2,
        "why": "Understating expenses requires no entry at all, only silence. That makes completeness the dominant risk, and it is why the search for unrecorded liabilities is the signature procedure here.",
    },
    {
        "q": "Grant Revenue rose 10 percent while Accounts Receivable - Grants rose 15 percent. What is the first thing to check?",
        "options": [
            "Whether the grantor confirmed the balance",
            "Whether the receivable is collectible",
            "Whether interest was accrued on the receivable",
            "Whether the eligible costs behind the revenue were incurred before year end",
        ],
        "a": 3,
        "why": "Grant revenue is earned as eligible costs are incurred, not when the award is signed or the cash arrives. Collectibility and confirmation matter, but they come after the recognition question.",
    },
    {
        "q": "Payroll is tested through controls, reconciliation to filings, and analytics rather than by vouching individual payments. Why?",
        "options": [
            "Because payroll is generated by a system and the volume makes transaction testing impractical",
            "Because payroll is immaterial to the financial statements",
            "Because payroll records are confidential and cannot be examined",
            "Because the payroll provider's own audit covers it",
        ],
        "a": 0,
        "why": "Wages here run to roughly $1.15M across 26 pay periods. Nobody vouches that transaction by transaction. You test the system producing it, tie totals to the W-3 and the 941s, and use analytics to confirm the total is the size it should be.",
    },
    {
        "q": "Vehicle Maintenance (2105) carries a $4,500 balance even though five individual vehicle accounts sit beneath it. What is the issue?",
        "options": [
            "The parent account should always equal the sum of its children",
            "Costs were coded to the header instead of to a specific vehicle, which defeats the tracking",
            "The balance represents an unallocated accrual",
            "Nothing. Parent accounts normally carry their own balances",
        ],
        "a": 1,
        "why": "The whole reason for five vehicle accounts is knowing what each vehicle costs. Anything posted to the parent is invisible to that analysis. It is a management letter comment rather than a misstatement.",
    },
    {
        "q": "Every classification in this trial balance maps to a lead reference except Cash/Investments. What should you do?",
        "options": [
            "Assume it rolls into Cash at 1010.00 and proceed",
            "Leave it unreferenced, since the balances are confirmable either way",
            "Assign it a new number yourself so the workpapers can be indexed",
            "Ask the in-charge where it should be filed before starting work in that area",
        ],
        "a": 3,
        "why": "The index reference is how a reviewer finds your work. Guessing means your reference will not agree to the trial balance the client signed off on, and inventing a number creates a reference nobody else in the file recognizes.",
    },
    {
        "q": "Conventions/Meetings (2128) and Conventions & Meetings (2129) both carry balances. What is the concern?",
        "options": [
            "The combined balance exceeds the materiality threshold",
            "One of the two must be a posting error",
            "Duplicate accounts split one activity across two lines and distort year-over-year comparison",
            "Two accounts with similar names always indicate fraud",
        ],
        "a": 2,
        "why": "Neither balance is wrong on its own. The problem is that one activity has two homes, so every analytic on either line is incomplete unless you remember to combine them. That is a management letter comment.",
    },
]

out = "// Generated from New_staff_training.xlsx. Edit descriptions here.\n"
out += "const CATEGORIES = " + json.dumps(CATEGORIES, indent=2) + ";\n\n"
out += "const TICKS = " + json.dumps(TICKS, indent=2) + ";\n\n"
out += "const ACCOUNTS = " + json.dumps(accounts, indent=2) + ";\n\n"
out += "const REASONING = " + json.dumps(REASONING, indent=2) + ";\n"

open('/home/claude/tbtraining/tb-data.js', 'w').write(out)

print("accounts:", len(accounts))
print("described:", sum(1 for a in accounts if a["note"]), "/", len(accounts))
if missing:
    print("MISSING DESCRIPTIONS:")
    for m in missing:
        print("   ", m)
print("reasoning:", len(REASONING))

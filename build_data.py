import json

# All prose lives here. Balances come from the workbook.
#
# DESC maps account number -> (why, risk)
#   why  = why this account is classified where it is. Always present.
#   risk = what the account or its movement exposes, for accounts that
#          warrant attention. None where there is nothing to say.
#
# Rule for the risk field: describe the exposure, never assert a cause.
# We do not know why a balance moved. We know what a movement of that
# kind puts at risk.

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
    "coa": {
        "mark": "§",
        "label": "Chart of accounts housekeeping",
        "detail": "Not a misstatement, but something that will cause confusion every year until somebody fixes it. Usually a management letter comment.",
    },
}

BS_ON_IS = {1500, 1501, 1502, 1503, 1504, 2000, 1550,
            6041, 6042, 6043, 6045, 6046, 6047, 6048, 6049, 6050}
GRANT = {1501, 1512, 2147, 1555, 2144}
COA = {2105, 1514, 2128, 2129}

DESC = {
    # ================= CASH =================
    100: ("Cash because it is a demand deposit: available immediately, at face value, with no maturity date and no valuation judgment. That combination is exactly what separates the Cash area from Cash/Investments.",
          "Carries the entity's entire disbursement volume, which makes existence and cutoff the exposures. Cash is also the account most exposed to misappropriation."),
    110: ("Cash for the same reason as the operating account — withdrawable at face value on demand. Earning interest does not make it an investment; having a maturity date would.",
          "Low activity means reconciling items are rare, so any that do appear carry more weight than they would in the operating account."),

    # ================= CASH / INVESTMENTS =================
    120: ("Not Cash, because it carries a fair value that can move and a counterparty that can fail. Not filed with a pure investment lead either, because the entity treats it as available liquidity. The hybrid label is the trial balance placing it between the two.",
          "Valuation and disclosure rather than existence. The fair value hierarchy and the deposit and investment risk disclosures are where the work sits."),
    130: ("Grouped with investments rather than cash because it has a maturity date. A term deposit cannot be drawn at face value on demand, and that is the line between the two areas even when the term is short.",
          "Check the maturity date. A term running past twelve months changes both the classification and the disclosure."),

    # ================= PREPAID =================
    1000: ("An asset rather than an expense because the entity has paid for something it has not yet consumed. It gets its own lead rather than sitting with expenses because the balance sheet holds the unconsumed portion, and testing that split is a different exercise from testing the spending.",
           "The balance rests entirely on a period allocation. An expired policy left on the schedule overstates assets and understates expense by the same amount."),

    # ================= REVENUE: receivables =================
    1500: ("Revenue rather than an asset lead because a trade receivable is the unpaid half of a revenue transaction. Confirming the balance and testing the revenue behind it are the same evidence.",
           "Existence and collectibility on the balance, occurrence on the revenue behind it. A movement out of step with the revenue stream it comes from needs explaining before either number is accepted."),
    1501: ("Revenue, and specifically the receivable side of grant revenue: amounts earned by incurring eligible costs but not yet reimbursed. It follows the revenue because the recognition test is the same test.",
           "Recognition comes before collectibility here. A grant receivable can be genuinely owed and still not be revenue, if the eligible costs were not incurred by year end."),
    1502: ("Revenue, on the same principle as trade receivables, though the underlying stream is not named in the account title.",
           "An unnamed receivable that has not moved in two years. Static balances may no longer be collectible, or may not be receivables at all."),
    1503: ("Revenue. Miscellaneous receivables still originate in a revenue transaction, and that origin is what determines the area.",
           "A miscellaneous receivable with no named source. Materiality governs how far to take it, but the composition should still be understood."),
    1504: ("Revenue, by the same logic. Classification follows what created the balance, not how specifically the account happens to be named.",
           "A general catch-all receivable is where unreconciled differences settle. Establish what it comprises before accepting it."),
    2000: ("Expense rather than a liability lead, because a payable is an expense incurred and not yet paid. The search for unrecorded liabilities tests both at once, so they share a workpaper.",
           "Completeness. An understated payable understates expense by the same amount, and neither requires an entry to conceal."),
    1550: ("Revenue, even though it is a liability, because it is revenue that has not been earned yet. Same area as a receivable, running in the opposite direction.",
           "Cutoff in both directions. Amounts left here with no remaining obligation are unrecorded revenue; amounts recognized early are overstated revenue."),

    # ================= REVENUE: streams =================
    1510: ("Revenue, and the entity's principal operating stream. Tax revenue is nonexchange — no customer and no invoice — which is why the testing rests on the levy and on analytics rather than transaction sampling.",
           "The largest single line in the trial balance, so a small percentage error is material. Accuracy is proved against the levy, not against individual receipts."),
    1511: ("Revenue, a secondary tax stream. It sits in the same area because the recognition basis is identical to 1510.",
           "Confirm it represents a distinct tax rather than a residual belonging in 1510. Separate accounts should mean separate sources."),
    1512: ("Revenue, but earned by performance rather than by billing. Grant revenue is recognized as eligible costs are incurred, which ties it to the spending in 2147 rather than to any receipt of cash.",
           "Recognition timing. Cash received ahead of eligible spending is deferred revenue, not revenue, so this account and 1550 have to be tested together."),
    1513: ("Revenue, generated by the balances in 120 and 130 rather than by operations. Nonoperating revenue is still revenue, so it stays in this area.",
           "Should be recomputable from the investment confirmations. Income that will not reconcile to the underlying balances means something is missing on one side or the other."),
    1514: ("Revenue. A parent account carrying a balance of its own despite having a child beneath it.",
           "Amounts posted to a header are excluded from any analysis built on the child accounts."),
    1516: ("Revenue. Receipts that do not belong to any named stream, recorded beneath the Other Income parent.",
           None),
    1517: ("Revenue, a second interest account alongside 1513. Two interest accounts usually means two sources, and the classification is the same for both.",
           "Establish which balances feed which account, so the recomputation runs against the right principal."),
    1518: ("Revenue. Donations are nonexchange — nothing is given in return — which places them here alongside tax revenue rather than with exchange transactions.",
           "Donor restrictions travel with the money. Restricted amounts recorded here rather than in 1555 would misstate the restriction disclosure."),
    1519: ("Revenue. Rent received is an exchange transaction, earned across the occupancy period rather than at the moment of payment.",
           "Recognition across the lease term. Amounts collected in advance of the period they cover belong in deferred revenue."),
    1555: ("Revenue, with a donor restriction attached. It stays in the revenue area because it is still revenue; the restriction governs how the money may be spent, not what the receipt is.",
           "The restriction has to be honored and disclosed. Test against the donor's stipulation and against the corresponding spending in 2144."),

    # ================= NET ASSETS =================
    7000: ("Net assets. A conversion account created when the books were migrated between systems, not a real component of equity.",
           "Zero is the expected balance. Anything sitting here is an unallocated plug left over from that conversion."),
    7010: ("Net assets: the accumulated residual of every prior year's activity. It is not tested directly, it is proved by movement.",
           "Direct entries to equity bypass the operating statement. Any activity other than the year-end close needs explaining, and prior period adjustments need restatement disclosure."),

    # ================= PAYROLL: withholding liabilities =================
    6041: ("Payroll, though it is a liability, because it is produced by the same payroll calculation that produces the expense. Reconciling wages to the 941s tests both at once.",
           "Should clear at the next deposit deadline. A balance that persists points to a remittance or filing problem rather than a measurement error."),
    6042: ("Payroll. Employee-side Medicare withheld from wages and held pending remittance — a byproduct of the payroll run, so it files with payroll.",
           "Recomputable against 1.45 percent of wages. A ratio away from that points to a wage base error."),
    6043: ("Payroll, on the same basis. Withholding is not a separate transaction; it is part of the act of paying wages.",
           "Recomputable against 6.2 percent of covered wages up to the annual limit. The limit is what makes this ratio drift legitimately, so establish the wage base before drawing conclusions."),
    6045: ("Payroll. State withholding files alongside federal withholding because a single payroll process generates both.",
           "Agree to the subsequent remittance, and confirm the filing frequency matches what the state requires at this payroll volume."),
    6046: ("Payroll. Employee-funded insurance withheld through the payroll process rather than paid by the employee directly.",
           "Unchanged across both years. Withholding that does not move with headcount or premium is worth understanding."),
    6047: ("Payroll. Employee premium withholding held pending remittance to the insurance carrier.",
           "Agree to the subsequent payment and the carrier invoice. A balance exceeding one period's withholding suggests amounts were not remitted."),
    6048: ("Payroll. Employee deferrals withheld from wages and owed to the retirement plan.",
           "Deposit timing is a plan compliance requirement, not only an accounting one. Late deposits are reportable regardless of amount."),
    6049: ("Payroll. The employer's share of Medicare — an employer cost rather than a withholding, but arising from the same calculation.",
           "Should mirror 6042 closely. Divergence between the employee and employer sides indicates a calculation problem."),
    6050: ("Payroll. The employer's share of Social Security, matching the employee withholding in 6043.",
           "Should mirror 6043, subject to the wage base. A gap between them points to either the wage base or the posting."),

    # ================= PAYROLL: expenses =================
    6101: ("Payroll. Compensation for services rendered, and the account that anchors the entire area.",
           "The largest line in the trial balance. Reconciles to the W-3 and the four quarterly 941s, and the year-end accrual has to cover days worked but not yet paid."),
    6102: ("Payroll. Hourly wages differ from salaries in how they are calculated, not in what they are, so they share the area.",
           "Overtime eligibility and employee classification. Misclassification is the recurring finding in hourly payroll."),
    6103: ("Payroll rather than an expense reimbursement, because it is paid through the payroll system. That routing generally makes it taxable to the employee.",
           "Confirm it is being reported as taxable wages. Reimbursements run through payroll without that treatment create a filing exposure."),
    6105: ("Payroll. An employer tax that exists only because wages were paid, so it belongs with the wages that generated it.",
           "Recomputable near 6.2 percent of covered wages. A material deviation points to the wage base."),
    6106: ("Payroll, on the same basis as Social Security. Employer taxes follow the payroll that creates them.",
           "Recomputable near 1.45 percent with no cap, which makes it the simpler of the two employer tax checks."),
    6107: ("Payroll. State unemployment or a similar employer assessment, again arising directly from wages.",
           "The rate is experience-based and resets annually. Obtain the current year rate notice rather than carrying last year's forward."),
    6108: ("Payroll. Employer retirement contributions sitting inside the Payroll Expenses tree, which is what places them here rather than with the Company Benefits accounts.",
           "Agree to the contribution formula in the plan document. Contribution rates change without leaving an obvious trail in the ledger."),
    6109: ("Payroll. Overtime is wages, distinguished from base pay by the rate applied rather than by its nature.",
           "Overtime concentrated in a few employees, or approved after the fact, is where the control weakness usually shows. Test authorization, not only calculation."),

    # ================= EXPENSE =================
    2100: ("Expense. Consumed within the period the dues or license term covers, leaving no asset at year end.",
           None),
    2101: ("Expense. A cost of maintaining the accounts in the Cash area, but a service charge rather than a financing cost, which is what keeps it out of Debt.",
           None),
    2102: ("Expense. A period cost of holding property rather than a cost of acquiring it, which is why it is expensed instead of capitalized.",
           "A public entity paying property tax is worth understanding, since it implies property held outside the exempt purpose."),
    2104: ("Expense. Consumed through use and below any threshold that would make capitalization appropriate.",
           "Uniform allowances paid to employees, rather than uniforms purchased by the entity, may be taxable wages."),
    2105: ("Expense. Maintenance restores a vehicle to working order rather than extending its life or capability, and that distinction is what keeps it out of Capital Assets.",
           "Carries a balance despite having five vehicle accounts beneath it. Costs posted to the header are invisible to any per-vehicle analysis."),
    2106: ("Expense. Capitalization requires extending useful life or adding capability; routine service restores existing capability, which falls on the expense side of that line.",
           None),
    2107: ("Expense. The per-vehicle split exists so the fleet can be compared, not because any one vehicle's costs are classified differently.",
           None),
    2108: ("Expense, on the same test as the rest of the fleet: does the work restore the vehicle, or improve it?",
           None),
    2109: ("Expense. The smallest maintenance balance in the fleet, though the classification test is the nature of the work rather than its size.",
           None),
    2110: ("Expense. The largest maintenance balance in the fleet, but size alone never triggers capitalization.",
           "Large maintenance charges can conceal component replacements that extend useful life, which would belong in capital outlay."),
    2112: ("Expense. A professional service consumed as it is delivered.",
           "If the same firm provides accounting services and the audit, independence has to be evaluated and documented."),
    2113: ("Expense. Advertising is expensed as incurred and creates no asset, even where the benefit is expected to persist beyond the period.",
           None),
    2114: ("Expense. A professional service, and the account recording your own firm's fee.",
           "Should agree to the engagement letter."),
    2115: ("Expense. Consumed in the period, and below any threshold that would justify tracking them as inventory.",
           None),
    2116: ("Expense, which is the judgment worth examining. Computers are capitalizable by nature, so expensing them implies each purchase fell below the capitalization threshold.",
           "The threshold applies purchase by purchase, not to the account total. Items above it expensed here would understate capital assets."),
    2118: ("Expense. A service consumed continuously under contract, with nothing left to carry forward.",
           None),
    2119: ("Expense. Utilities are consumed as delivered and cannot be stored, which makes them a pure period cost.",
           None),
    2120: ("Expense. Same treatment as the other utility accounts; separate provider accounts reflect billing sources rather than different classifications.",
           None),
    2121: ("Expense. Water and sewer service consumed within the period.",
           None),
    2122: ("Expense. A utility purchased from another unit of government, which does not change how it is classified.",
           "If the providing government is a related party, the relationship requires disclosure."),
    2123: ("Expense. A cooperative bills on a different rate structure, but the service is consumed the same way.",
           None),
    2124: ("Expense. The municipal water account, paired with 2121 by service provider rather than by classification.",
           None),
    2125: ("Expense. Natural gas consumed within the period.",
           None),
    2126: ("Expense. Fuel is consumed on use. Any quantity held at year end would be inventory, which this entity does not appear to track.",
           "High volume and low unit control. Fuel cards and unmetered dispensing are recognized misappropriation routes."),
    2127: ("Expense. Training benefits the entity but creates no recognizable asset, so it is expensed as delivered.",
           None),
    2128: ("Expense. Travel and meeting costs consumed as incurred.",
           "Near-duplicate of 2129. One activity recorded across two accounts makes analysis of either account incomplete on its own."),
    2129: ("Expense, identical in nature to 2128.",
           "See 2128. Until the two are merged or genuinely distinguished, both have to be read together."),
    2131: ("Expense. Coverage is consumed across the policy period. Any premium paid for coverage beyond year end belongs in prepaid rather than here.",
           "The split between expense and prepaid depends on the policy period. Confirm the allocation was actually made."),
    2132: ("Expense. Workers compensation is driven by payroll but it is an insurance premium rather than compensation, which is what keeps it out of the Payroll area.",
           "Premiums move with payroll. A relationship that breaks down between this account and 6101 is worth understanding."),
    2133: ("Expense. Telecommunications service consumed monthly under contract.",
           None),
    2134: ("Expense. Same basis, under a service contract.",
           None),
    2136: ("Expense rather than a capital asset, because a subscription conveys a right to use for a term rather than ownership. A perpetual license would raise a different question.",
           "Subscriptions renew without action. Recurring charges continuing past the point of use are a common and easily missed overspend."),
    2137: ("Expense. Maintenance preserves the building's existing condition; work extending its life or expanding its capability would be capital outlay instead.",
           "The line between repair and improvement is a judgment. Scan the detail for items that changed the building rather than maintained it."),
    2139: ("Expense. Consumed on use.",
           None),
    2140: ("Expense. Consumed on use, though the purpose behind the spending matters more here than the classification does.",
           "Public entities face particular scrutiny on food and beverage spending. Test against the entity's own policy, not only for accuracy."),
    2141: ("Expense. Consumed on use.",
           None),
    2142: ("Expense. A general operating account carrying no further breakdown.",
           "A large balance under an unspecific name may hold items belonging elsewhere. Review the underlying detail."),
    2144: ("Expense. The spending is a period cost regardless of the restriction attached to its funding, which is why it sits here while the revenue sits in 1555.",
           "The restriction governs what the money could be spent on. Test permissibility against the donor's stipulation, not merely that the cost was incurred."),
    2145: ("Expense. A cost of the period, though it records a compliance failure rather than an operating activity.",
           "Penalties indicate noncompliance somewhere. The amount is rarely the point; what was penalized is."),
    2146: ("Expense. Program spending consumed as it is delivered.",
           "Program spending funded by grants or donations carries the funder's eligibility rules into this account."),
    2147: ("Expense. The spending that earns the grant revenue in 1512. It is a period cost even though it drives revenue recognition on the other side.",
           "Eligibility. Costs charged to a grant that the agreement does not permit are both a compliance finding and an overstatement of grant revenue."),
    2148: ("Expense, which is a judgment. Equipment is capitalizable by nature, so expensing it implies each item fell below the capitalization threshold.",
           "The same threshold question as 2116, on a larger balance. Items above the threshold expensed here would understate capital assets."),
    2149: ("Expense. Program delivery consumed within the period.",
           "If any portion is grant-funded, the eligibility rules follow the money into this account."),
    2150: ("Expense. Consumed as incurred.",
           "Employee recognition can be taxable compensation depending on its form and value."),
    2151: ("Expense. A catch-all for costs without a named account of their own.",
           "Catch-all accounts accumulate items that belong elsewhere. Review the detail for anything material or unusual."),
    2152: ("Expense. Consumed as incurred, leaving no asset behind.",
           "Travel is tested against policy as much as against support. Approval and documentation are the usual exceptions."),
    6110: ("Expense rather than Payroll, because the account sits in the Company Benefits tree rather than the Payroll Expenses tree. The trial balance is following the chart of accounts here rather than the substance, since this is compensation cost.",
           "Anyone totalling compensation from the Payroll area alone will miss this account and 6111."),
    6111: ("Expense, on the same basis as 6110: classified by its position in the account tree rather than by what it is.",
           "Establish which employees are eligible for which plan. Two concurrent retirement vehicles complicate the contribution test."),

    # ================= CAPITAL ASSETS =================
    5100: ("Capital Assets. On the modified accrual basis used in a governmental fund, acquiring a capital asset is an expenditure rather than an asset, so the outlay is recorded here while the asset itself lives in the government-wide conversion.",
           "Completeness of the capital asset listing depends on this account. Additions recorded here have to be picked up in the conversion, and repairs coded here have to come back out."),
    4120: ("Capital Assets. A gain or loss arises from disposing of a capital asset, so it files with the asset activity rather than with revenue, despite carrying a credit balance.",
           "The gain depends on the carrying value of the asset sold, which is maintained outside this trial balance. Recompute it and trace the proceeds into cash."),

    # ================= DEBT =================
    5120: ("Debt. Interest is a cost of financing rather than a cost of delivering services, and that distinction is what separates it from the Expense area.",
           "Should be recomputable from the amortization schedule. Interest that will not agree suggests the obligation is not what the schedule describes."),
    5130: ("Debt rather than occupancy expense. Filing a lease payment under debt service implies the arrangement is a financing rather than a rental, carrying a lease liability.",
           "The classification drives whether a liability belongs on the statements at all. Confirm the conclusion against the agreement before relying on it."),
}

accounts = []
missing = []
for r in raw:
    acct = r["acct"]
    ticks = []
    if acct in BS_ON_IS: ticks.append("bs")
    if acct in GRANT:    ticks.append("grant")
    if acct in COA:      ticks.append("coa")
    if acct not in DESC:
        missing.append((acct, r["name"]))
    why, risk = DESC.get(acct, (None, None))
    accounts.append({
        "row": r["row"],          # the row number in the source workbook
        "acct": acct,
        "name": r["name"],
        "py": r["py"],            # 6/30/2025 adjusted
        "un": r["un"],            # 6/30/2026 unadjusted
        "aje": r["aje"],
        "cy": r["cy"],            # 6/30/2026 adjusted
        "lead": r["lead"],
        "cls": r["cls"],
        "ticks": ticks,
        "why": why,
        "risk": risk,
    })

exec(open('/home/claude/tbtraining/cats_only.py').read())

for c in CATEGORIES:
    c.pop("sublead", None)
    if c["key"] == "Capital Assets":
        c["lead"] = "4010.00"
    if c["key"] == "Cash/Investments":
        c["lead"] = "1010.00"
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
                    "It files to 1010.00 alongside cash, so both areas share a lead schedule even "
                    "though the testing differs once you get past confirming the balance.")

REASONING = json.load(open('/home/claude/tbtraining/reasoning.json'))

out = "// Generated from New_staff_training.xlsx. Edit descriptions here.\n"
out += "const CATEGORIES = " + json.dumps(CATEGORIES, indent=2) + ";\n\n"
out += "const TICKS = " + json.dumps(TICKS, indent=2) + ";\n\n"
out += "const ACCOUNTS = " + json.dumps(accounts, indent=2) + ";\n\n"
out += "const REASONING = " + json.dumps(REASONING, indent=2) + ";\n"

open('/home/claude/tbtraining/tb-data.js', 'w').write(out)

print("accounts:", len(accounts))
print("with why: ", sum(1 for a in accounts if a["why"]), "/", len(accounts))
print("with risk:", sum(1 for a in accounts if a["risk"]))
if missing:
    print("MISSING:", missing)

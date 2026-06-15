# Benefit Guardian — Nationwide State Coverage Build Progress

> Internal working notes so context survives across sessions. Not linked from the site.

## Objective
Provide federal + state government benefit programs (SNAP, Medicaid, TANF, CHIP) for ALL 50 US states, in BOTH the backend DB and as SEO pages. Authorized: "go with all 27 so that the entire united states is covered."

## Rules (binding)
- Program values: use "Varies" if no exact official figure. NEVER guess numbers or URLs.
- Only grounded official .gov sources, each URL verified to resolve (reject 404s/redirects).
- Medicaid key must be state-branded (e.g. "Arkansas Medicaid"), never bare "Medicaid".
- Seed names in api.py must EXACTLY match JSON keys in db/state_source_urls.json.
- Validate JSON.parse before applying every JSON edit.
- After live test: restore profile to ZIP 19103 / state PA / city "New York", then re-scan 19103.
- Let Copilot auto-suggest commit messages (don't type).
- SSO login: obekheet@gmail.com (Continue with Google ~783,437).

## Per-state pipeline (~8 commits)
1. Research 4 .gov URLs (verify resolve). 2. JSON block -> db/state_source_urls.json (parse/add/stringify(4)/validate). 3. Seed list -> api.py GOVERNMENT_SEED_DB (insert after last state's "    ],"). 4. Four SEO pages -> programs/<state>-<prog>.html. 5. sitemap.xml +4 urls (.html suffix, before </urlset>). 6. programs/index.html hub +4 cards (after prev state's last card </a>, 8-space indent). 7. Live-verify via app API (filter source_item==='Programs (XX)', 4/4 "Varies"). 8. Restore profile.

## Commit dialog quirk
After CM6 edit, click "Commit changes..." (1461,134); often need 2-3 clicks (focus first); when dialog opens click green "Commit changes" (942,553).

## Repos / key URLs
- Backend: github.com/obekheet/testsample @ production (db/state_source_urls.json, api.py). Auto-deploys to Render (~2min).
- SEO: github.com/obekheet/benefit-guardian-site @ main (programs/, sitemap.xml, programs/index.html).
- Live app: app.benefitguardian.org (obekheet@gmail.com). bg_token in localStorage.
- DO NOT use github.dev — stale.

## STATUS — states in DB (target 50): 27 done
DONE (27, verified live): NJ CA TX FL NY PA IL OH GA NC MI VA WA AZ MA TN IN MO MD WI CO MN SC AL AK AR
IN PROGRESS: (none)
NOT STARTED (23): CT DE HI ID IA KS KY LA ME MS MT NE NV NH NM ND OK OR RI SD UT VT WV WY

## Verified URLs (recent)
### Alaska (AK) - DONE, test ZIP 99501
- SNAP: health.alaska.gov/en/services/division-of-public-assistance-dpa-services/snap-nutrition-assistance/
- Medicaid: health.alaska.gov/en/services/division-of-public-assistance-dpa-services/apply-for-medicaid/
- TANF(ATAP): health.alaska.gov/en/services/alaska-temporary-assistance/
- CHIP(Denali KidCare): health.alaska.gov/en/services/denali-kidcare/
- slugs: alaska-snap, alaska-medicaid, alaska-temporary-assistance, alaska-denali-kidcare

### Arkansas (AR) - DONE, test ZIP 72201
- SNAP: humanservices.arkansas.gov/divisions-shared-services/county-operations/supplemental-nutrition-assistance-snap/
- Medicaid: humanservices.arkansas.gov/divisions-shared-services/medical-services/healthcare-programs/
- TANF(TEA): humanservices.arkansas.gov/divisions-shared-services/county-operations/temporary-assistance-for-needy-families/
- CHIP(ARKids First): humanservices.arkansas.gov/divisions-shared-services/medical-services/healthcare-programs/arkids/
- keys: "SNAP / Food Assistance","Arkansas Medicaid","Transitional Employment Assistance (TEA/TANF)","ARKids First (CHIP)"
- slugs: arkansas-snap, arkansas-medicaid, arkansas-tea, arkansas-arkids


### Connecticut (CT) — DONE & VERIFIED (test ZIP 06103, Hartford)
- SNAP / Food Assistance: portal.ct.gov/dss/snap/supplemental-nutrition-assistance-program---snap
- HUSKY Health (Medicaid): portal.ct.gov/husky
- Temporary Family Assistance (TFA/TANF): portal.ct.gov/dss/knowledge-base/articles/cash-assistance/temporary-family-assistance
- HUSKY B (CHIP): portal.ct.gov/dss/knowledge-base/articles/healthcare-coverage/husky-b
- keys: "SNAP / Food Assistance","HUSKY Health (Medicaid)","Temporary Family Assistance (TFA/TANF)","HUSKY B (CHIP)"
- slugs: connecticut-snap, connecticut-husky-health, connecticut-tfa, connecticut-husky-b
- DB now has 28 states. Remaining (8): OK, OR, RI, SD, UT, VT, WV, WY (next: NH)


### Delaware (DE) — DONE & VERIFIED (test ZIP 19901, Dover)
- SNAP / Food Assistance: dhss.delaware.gov/dss/foodstamps/
- Delaware Medicaid: dhss.delaware.gov/dmma/medicaid/
- Temporary Assistance for Needy Families (TANF): dhss.delaware.gov/dss/tanf/
- Delaware Healthy Children Program (CHIP): dhss.delaware.gov/dmma/dhcp/
- keys: "SNAP / Food Assistance","Delaware Medicaid","Temporary Assistance for Needy Families (TANF)","Delaware Healthy Children Program (CHIP)"
- slugs: delaware-snap, delaware-medicaid, delaware-tanf, delaware-healthy-children
- DB now has 28 states. Remaining (22): HI, ID, IA, KS, KY, LA, ME, MS, MT, NE, NV, NH, NM, ND, OK, OR, RI, SD, UT, VT, WV, WY (next: HI)


### Hawaii (HI) — DONE & VERIFIED (test ZIP 96813, Honolulu)
- SNAP / Food Assistance: humanservices.hawaii.gov/bessd/snap/
- Hawaii Med-QUEST (Medicaid): medquest.hawaii.gov/
- Temporary Assistance for Needy Families (TANF): humanservices.hawaii.gov/bessd/tanf/
- Med-QUEST for Children (CHIP): medquest.hawaii.gov/en/members-applicants/eligibility.html
- keys: "SNAP / Food Assistance","Hawaii Med-QUEST (Medicaid)","Temporary Assistance for Needy Families (TANF)","Med-QUEST for Children (CHIP)"
- slugs: hawaii-snap, hawaii-med-quest, hawaii-tanf, hawaii-med-quest-children
- Remaining (21): ID, IA, KS, KY, LA, ME, MS, MT, NE, NV, NH, NM, ND, OK, OR, RI, SD, UT, VT, WV, WY (next: ID)

### Idaho (ID) — DONE & VERIFIED (test ZIP 83702, Boise)
- SNAP / Food Assistance: healthandwelfare.idaho.gov/services-programs/food-assistance
- Idaho Medicaid: healthandwelfare.idaho.gov/services-programs/medicaid-health
- Temporary Assistance for Families in Idaho (TAFI/TANF): healthandwelfare.idaho.gov/services-programs/financial-assistance/about-tafi
- Medicaid for Children (CHIP): healthandwelfare.idaho.gov/services-programs/medicaid-health/about-medicaid-children
- keys: "SNAP / Food Assistance","Idaho Medicaid","Temporary Assistance for Families in Idaho (TAFI/TANF)","Medicaid for Children (CHIP)"
- slugs: idaho-snap, idaho-medicaid, idaho-tafi, idaho-chip
- Remaining (20): IA, KS, KY, LA, ME, MS, MT, NE, NV, NH, NM, ND, OK, OR, RI, SD, UT, VT, WV, WY (next: IA)

### Iowa (IA) — DONE & VERIFIED (test ZIP 50309, Des Moines)
- SNAP / Food Assistance: hhs.iowa.gov/assistance-programs/food-assistance
- Iowa Medicaid: hhs.iowa.gov/medicaid
- Family Investment Program (FIP/TANF): hhs.iowa.gov/assistance-programs/cash-assistance/fip-tanf
- Hawki (CHIP): hhs.iowa.gov/medicaid/plans-programs/hawki
- keys: "SNAP / Food Assistance","Iowa Medicaid","Family Investment Program (FIP/TANF)","Hawki (CHIP)"
- slugs: iowa-snap, iowa-medicaid, iowa-fip, iowa-hawki
### Kansas (KS) — DONE & VERIFIED (test ZIP 66603, Topeka)
- SNAP / Food Assistance: dcf.ks.gov/services/ees/Pages/Food/FoodAssistance.aspx
- KanCare (Medicaid): kancare.ks.gov/members/benefits-services
- TANF / Cash Assistance: dcf.ks.gov/services/ees/Pages/Cash/CashAssistance.aspx
- CHIP (KanCare): kancare.ks.gov/apply-now
- keys: "SNAP / Food Assistance","KanCare (Medicaid)","TANF / Cash Assistance","CHIP (KanCare)"
- slugs: kansas-snap, kansas-kancare, kansas-tanf, kansas-chip
### Kentucky (KY) — DONE & VERIFIED (test ZIP 40601, Frankfort)
- SNAP / Food Assistance: chfs.ky.gov/agencies/dcbs/dfs/nab/Pages/snap.aspx
- Kentucky Medicaid: chfs.ky.gov/agencies/dms/Pages/default.aspx
- Kentucky Transitional Assistance Program (KTAP/TANF): chfs.ky.gov/agencies/dcbs/dfs/fssb/Pages/ktap.aspx
- KCHIP (CHIP): kidshealth.ky.gov/Pages/index.aspx
- keys: "SNAP / Food Assistance","Kentucky Medicaid","Kentucky Transitional Assistance Program (KTAP/TANF)","KCHIP (CHIP)"
- slugs: kentucky-snap, kentucky-medicaid, kentucky-ktap, kentucky-kchip
### Louisiana (LA) — DONE & VERIFIED (test ZIP 70802, Baton Rouge)
- SNAP / Food Assistance: dcfs.louisiana.gov/page/snap
- Louisiana Medicaid: ldh.la.gov/medicaid
- Family Independence Temporary Assistance Program (FITAP/TANF): dcfs.louisiana.gov/page/fitap
- LaCHIP (CHIP): ldh.la.gov/medicaid/lachip
- keys: "SNAP / Food Assistance","Louisiana Medicaid","Family Independence Temporary Assistance Program (FITAP/TANF)","LaCHIP (CHIP)"
- slugs: louisiana-snap, louisiana-medicaid, louisiana-fitap, louisiana-lachip
- Remaining (16): ME, MS, MT, NE, NV, NH, NM, ND, OK, OR, RI, SD, UT, VT, WV, WY (next: ME)

### Maine (ME) — DONE & VERIFIED (test ZIP 04330, Augusta)
- SNAP / Food Supplement: https://www.maine.gov/dhhs/ofi/programs-services/food-supplement
- MaineCare (Medicaid): https://www.maine.gov/dhhs/ofi/programs-services/health-care-assistance
- TANF / Temporary Assistance for Needy Families: https://www.maine.gov/dhhs/ofi/programs-services/tanf
- MaineCare for Children (CHIP): https://www.maine.gov/dhhs/oms/mainecare-options/children
- keys: "SNAP / Food Supplement","MaineCare (Medicaid)","TANF / Temporary Assistance for Needy Families","MaineCare for Children (CHIP)"
- slugs: maine-snap, maine-medicaid, maine-tanf, maine-chip
- Remaining (15): MS, MT, NE, NV, NH, NM, ND, OK, OR, RI, SD, UT, VT, WV, WY (next: MS)

### Mississippi (MS) — DONE & VERIFIED (test ZIP 39201, Jackson)
- SNAP / Food Assistance: https://www.mdhs.ms.gov/help/snap/
- Mississippi Medicaid: https://medicaid.ms.gov/medicaid-coverage/who-qualifies-for-coverage/mississippi-medicaid-health-benefits/
- TANF / Temporary Assistance for Needy Families: https://www.mdhs.ms.gov/help/tanf/
- Mississippi CHIP: https://medicaid.ms.gov/programs/childrens-health-insurance-program-chip/
- keys: "SNAP / Food Assistance","Mississippi Medicaid","TANF / Temporary Assistance for Needy Families","Mississippi CHIP"
- slugs: mississippi-snap, mississippi-medicaid, mississippi-tanf, mississippi-chip
- Remaining (14): MT, NE, NV, NH, NM, ND, OK, OR, RI, SD, UT, VT, WV, WY (next: MT)

### Montana (MT) — DONE & VERIFIED (test ZIP 59601, Helena)
- SNAP / Food Assistance: https://dphhs.mt.gov/HCSD/SNAP
- Montana Medicaid: https://dphhs.mt.gov/MontanaHealthcarePrograms/index
- TANF / Temporary Assistance for Needy Families: https://dphhs.mt.gov/HCSD/tanf
- Healthy Montana Kids (CHIP): https://dphhs.mt.gov/HMK/index
- keys: "SNAP / Food Assistance","Montana Medicaid","TANF / Temporary Assistance for Needy Families","Healthy Montana Kids (CHIP)"
- slugs: montana-snap, montana-medicaid, montana-tanf, montana-chip
- Remaining (13): NE, NV, NH, NM, ND, OK, OR, RI, SD, UT, VT, WV, WY (next: NE)

### Nebraska (NE) — DONE & VERIFIED (test ZIP 68508, Lincoln)
- SNAP / Food Assistance: https://dhhs.ne.gov/Pages/SNAP.aspx
- Nebraska Medicaid: https://dhhs.ne.gov/Pages/Medicaid-Eligibility.aspx
- ADC / TANF (Aid to Dependent Children): https://dhhs.ne.gov/Pages/TANF.aspx
- Nebraska CHIP: https://dhhs.ne.gov/Pages/Medicaid-Eligibility.aspx (CHIP described on Medicaid-Eligibility page)
- keys: "SNAP / Food Assistance","Nebraska Medicaid","ADC / TANF (Aid to Dependent Children)","Nebraska CHIP"
- slugs: nebraska-snap, nebraska-medicaid, nebraska-tanf, nebraska-chip
- Remaining (12): NV, NH, NM, ND, OK, OR, RI, SD, UT, VT, WV, WY (next: NV)

### Nevada (NV) — DONE & VERIFIED (test ZIP 89701, Carson City)
- SNAP / Food Assistance: https://www.dss.nv.gov/programs/snap/
- Nevada Medicaid: https://dhcfp.nv.gov/
- TANF / Temporary Assistance for Needy Families: https://www.dss.nv.gov/programs/tanf/
- Nevada Check Up (CHIP): https://dhcfp.nv.gov/ (Check Up administered by DHCFP)
- keys: "SNAP / Food Assistance","Nevada Medicaid","TANF / Temporary Assistance for Needy Families","Nevada Check Up (CHIP)"
- slugs: nevada-snap, nevada-medicaid, nevada-tanf, nevada-chip
## New Hampshire (NH) — DONE — VERIFIED (test ZIP 03301, Concord)
- SNAP / Food Assistance: https://www.dhhs.nh.gov/programs-services/food-meals-assistance/supplemental-nutrition-assistance-program-snap
- New Hampshire Medicaid: https://www.dhhs.nh.gov/programs-services/medicaid
- TANF / FANF (Financial Assistance to Needy Families): https://www.dhhs.nh.gov/temporary-assistance-needy-families-tanf
- NH Childrens Medicaid (CHIP): https://www.dhhs.nh.gov/programs-services/medicaid (CHIP delivered as Medicaid expansion, shared page)
- keys: "SNAP / Food Assistance","New Hampshire Medicaid","TANF / FANF (Financial Assistance to Needy Families)","NH Childrens Medicaid (CHIP)"
- slugs: new-hampshire-snap, new-hampshire-medicaid, new-hampshire-tanf, new-hampshire-chip

## New Mexico (NM) — DONE — VERIFIED (test ZIP 87501, Santa Fe)
- SNAP / Food Assistance: https://www.hca.nm.gov/lookingforassistance/supplemental_nutrition_assistance_program__snap/
- New Mexico Medicaid (Turquoise Care): https://www.hca.nm.gov/turquoise-care/
- TANF / Temporary Assistance for Needy Families: https://www.hca.nm.gov/lookingforassistance/temporary_assistance_for_needy_families/
- New Mexico Childrens Medicaid (CHIP): https://www.hca.nm.gov/turquoise-care/ (shared Turquoise Care page)
- keys: "SNAP / Food Assistance","New Mexico Medicaid (Turquoise Care)","TANF / Temporary Assistance for Needy Families","New Mexico Childrens Medicaid (CHIP)"
- slugs: new-mexico-snap, new-mexico-medicaid, new-mexico-tanf, new-mexico-chip
## North Dakota (ND) — DONE — built; live verify pending login (test ZIP 58501, Bismarck)
- SNAP / Food Assistance: https://www.hhs.nd.gov/applyforhelp/snap
- North Dakota Medicaid: https://www.hhs.nd.gov/healthcare/medicaid
- TANF / Temporary Assistance for Needy Families: https://www.hhs.nd.gov/applyforhelp/tanf
- North Dakota Childrens Health Insurance Program (CHIP): https://www.hhs.nd.gov/healthcare/CHIP
- keys: "SNAP / Food Assistance","North Dakota Medicaid","TANF / Temporary Assistance for Needy Families","North Dakota Childrens Health Insurance Program (CHIP)"
- slugs: north-dakota-snap, north-dakota-medicaid, north-dakota-tanf, north-dakota-chip

- Remaining (8): OK, OR, RI, SD, UT, VT, WV, WY (next: OK)

## Test ZIPs: AL=36104, AK=99501, AR=72201, CT=06103, DE=19901, HI=96813, ID=83702, IA=50309, KS=66603, KY=40601, LA=70802, ME=04330, MS=39201, MT=59601, NE=68508, NV=89701, NH=03301, NM=87501, ND=58501. Restore=19103/PA/New York.

_Last updated: 2026-06-15_

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
- DB now has 28 states. Remaining (23): DE, HI, ID, IA, KS, KY, LA, ME, MS, MT, NE, NV, NH, NM, ND, OK, OR, RI, SD, UT, VT, WV, WY (next: DE)


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

## Test ZIPs: AL=36104, AK=99501, AR=72201, CT=06103, DE=19901, HI=96813. Restore=19103/PA/New York.

_Last updated: 2026-06-14_

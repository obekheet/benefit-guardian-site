# Benefit Guardian — Nationwide State Coverage Build Progress

> Internal working notes so context survives across sessions. Not linked from the site.

## Objective
Provide federal + state government benefit programs (SNAP, Medicaid, TANF, CHIP) for ALL 50 US states, in BOTH the backend DB and as SEO pages. Authorized: "go with all 27 so that the entire united states is covered."

## Rules (binding)
- Program values: use "Varies" if no exact official figure. NEVER guess numbers or URLs.
- Only grounded official .gov sources, each URL verified to resolve (reject 404s).
- Medicaid key must be state-branded (e.g. "Alaska Medicaid"), never bare "Medicaid" (dedup collision).
- Seed names in api.py must EXACTLY match JSON keys in db/state_source_urls.json.
- Validate JSON.parse before applying every JSON edit.
- After live test: restore profile to ZIP 19103 / state PA, then re-scan 19103.
- Let Copilot auto-suggest commit messages (don't type — it garbles).
- DB deletes need explicit user confirmation. Don't touch auth token. SSO: obekheet@gmail.com.

## Per-state pipeline (~8 commits)
1. Research 4 .gov URLs (verify resolve). 2. JSON block -> db/state_source_urls.json (parse/add/stringify/validate). 3. Seed list -> api.py GOVERNMENT_SEED_DB. 4. Four SEO pages -> programs/<state>-<prog>.html. 5. sitemap.xml +4 urls. 6. programs/index.html hub +4 cards. 7. Live-verify via app API (filter source_item==='Programs (XX)', 4/4 "Varies"). 8. Restore profile.

## Repos / key URLs
- Backend: github.com/obekheet/testsample @ production (db/state_source_urls.json, api.py). Auto-deploys to Render.
- SEO: github.com/obekheet/benefit-guardian-site @ main (programs/, sitemap.xml, programs/index.html).
- Live app: app.benefitguardian.org (logged in as obekheet@gmail.com).
- DO NOT use github.dev — it is stale.

## STATUS — states in DB (target 50)
DONE (24 fully verified): NJ CA TX FL NY PA IL OH GA NC MI VA WA AZ MA TN IN MO MD WI CO MN SC AL
IN PROGRESS: AK (JSON done, seed done, SEO: snap+medicaid done; remaining: tanf page, chip page, sitemap, hub, live-verify, restore)
NOT STARTED (24): AR CT DE HI ID IA KS KY LA ME MS MT NE NV NH NM ND OK OR RI SD UT VT WV WY

## Verified URLs by state
### Alabama (AL) - DONE
- SNAP: dhr.alabama.gov/food-assistance/
- Medicaid: medicaid.alabama.gov/
- TANF: dhr.alabama.gov/family-assistance/
- CHIP: alabamapublichealth.gov/allkids/
- Keys/slugs: "SNAP / Food Assistance"=alabama-snap, "Alabama Medicaid"=alabama-medicaid, "Family Assistance (TANF)"=alabama-family-assistance, "ALL Kids (CHIP)"=alabama-all-kids

### Alaska (AK) - in progress
- SNAP: health.alaska.gov/en/services/division-of-public-assistance-dpa-services/snap-nutrition-assistance/
- Medicaid: health.alaska.gov/en/services/division-of-public-assistance-dpa-services/apply-for-medicaid/
- TANF (ATAP): health.alaska.gov/en/services/alaska-temporary-assistance/
- CHIP (Denali KidCare): health.alaska.gov/en/services/denali-kidcare/
- Keys/slugs: "SNAP / Food Assistance"=alaska-snap, "Alaska Medicaid"=alaska-medicaid, "Alaska Temporary Assistance (TANF)"=alaska-temporary-assistance, "Denali KidCare (CHIP)"=alaska-denali-kidcare
- Live test ZIP: 99501 (Anchorage)

## Test ZIPs used
AL=36104, AK=99501. Restore profile = ZIP 19103, state PA.

_Last updated: 2026-06-14_

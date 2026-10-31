# Client Context Files

One markdown file per client at `.agents/clients/<client-slug>.md`. Skills read the client file before producing client-facing work. Create or update a file with the `account-management` skill, which holds the full template.

Minimum sections:

1. **Business** — what they sell, sector, markets, website, commercial registration and licensing notes to display in ads where relevant
2. **Audience** — ICP, segments, verbatim customer language, regions (Riyadh, Jeddah, Eastern Province, UAE)
3. **Brand** — positioning, Arabic and English voice, visual guideline link, mandatories, banned words and topics
4. **Goals and KPIs** — business objective, marketing objective, agreed KPIs and targets, reporting cadence
5. **Accounts and access** — ad accounts, analytics, CMS, social handles, CRM, who owns each (never store credentials here)
6. **Stakeholders and approvals** — names, roles, approval chain, response-time expectations
7. **Engagement** — scope, retainer, media budget, contract dates, renewal date
8. **Learnings** — dated log of what worked and what did not
9. **Changelog**

Naming: lowercase, hyphenated, e.g. `al-rajhi-foods.md`. Keep secrets out of this folder.

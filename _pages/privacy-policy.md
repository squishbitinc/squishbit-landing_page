---
layout: page
title: Privacy Policy
slug: privacy-policy
description: Learn about Squishbit's privacy policy and how we protect your data.
---

# Squishbit Privacy Policy

**Effective date:** August 4, 2025

**Who we are:** **Squishbit ApS** (CVR 45500942), Willy Brandts Vej 13, 3. tv, 2450 København SV, Denmark

**Contact:** hello@squishbit.com

## 0) Scope and key terms
- **Merchant:** the Shopify store that installs and uses Squishbit.
- **Store visitor:** anyone visiting a merchant's website whose images are served by Squishbit.
- **Personal data:** information that identifies a person or could reasonably identify them (e.g., email address, IP address).

This policy covers the **EU GDPR**, **UK GDPR**, and **California CPRA**.

## 1) What Squishbit does
Squishbit optimizes and delivers merchants’ images. Merchants prefix their image URLs with a unique Squishbit URL; our CDN selects an efficient format and compression based on the visitor.

## 2) Roles (who decides what)
- **Merchant account & billing data:** **Squishbit is the controller**—meaning we decide **why and how** this data is used to run our service.
- **Store-visitor data handled by our CDN:** the **merchant is the controller**—they decide the purposes; **Squishbit is the processor**—we handle this data **only** to provide the CDN **under the merchant’s instructions**.

## 3) Data we process

### A. Merchant data (Squishbit = controller)
**Collected:**
- Shopify **Store ID**
- **Contact email** (retrieved via Shopify)
- **Support emails** you send us

**Billing:** via **Shopify Billing** (Squishbit stores **no** card details).

**Purposes & legal bases:**
- Provide and bill for the service (**contract**)
- Operate, secure, and improve the service; prevent abuse (**legitimate interests**)

**Retention:**
- Account data: delete most within **30 days** of uninstall
- Invoices/transaction records: **5 years** (Danish bookkeeping law)
- Support emails: up to **12 months** unless needed longer for legal reasons

### B. Store-visitor data (Merchant = controller; Squishbit = processor)
**Processed per request to the CDN:**
- **IP address**
- **User-Agent** (browser/device)
- **Accept/Accept-Encoding** headers
- **Requested URL** (including host/path), **Referrer**
- **Timestamps**, **status codes**, and similar operational metadata

**Derived/served:**
- **Optimized image variants** cached at **CloudFront edges** (no S3 persistence)

**Purposes (under merchant instructions):**
- Deliver images, optimize performance, ensure security/integrity, measure usage for plan/billing compliance

**What we do **not** do:**
- **No cookies** set by our CDN
- **No** cross-site tracking, profiling, advertising, or selling/sharing of personal information

**Retention:**
- CDN request logs: up to **30 days**
- Edge cache: **Default TTL 24 hours**; **Max TTL 365 days**
- Manual cache purge: on merchant request within **24 hours** (**may incur an extra charge**)

### C. Access tokens (Shopify)
- **Stored encrypted at rest** in our database
- **Used only** to operate the Shopify app
- **Revoked immediately** and **deleted within 24 hours** on uninstall or verified erasure request

## 4) Where data is handled

**Processing locations**
- **CloudFront edge**: global (may be outside EEA/UK)
- **Logs/ops data**: **AWS us-east-1** (e.g., CloudWatch/Athena)
- **Merchant metadata & encrypted Shopify access tokens**: **Hetzner Postgres, Frankfurt (Germany)**
- **Image variants**: cached **only at CloudFront edges** (no S3 storage)

**International transfers**
- **EU–U.S. Data Privacy Framework** where the provider is certified
- **Standard Contractual Clauses** (with transfer impact assessments) otherwise

## 5) Security
- Encryption at rest for sensitive data (including Shopify access tokens)
- Access limited to staff who need it to run the service
- Monitoring and operational safeguards

**Incident notice:** We notify affected merchants **without undue delay** and **no later than 72 hours** after becoming aware, and we cooperate to support GDPR/UK GDPR obligations.

## 6) Your rights and how to use them

**Merchants (Squishbit = controller for your account data)**
Rights: **access, portability, rectification, erasure, restriction, objection**.
How: email **hello@squishbit.com** with subject **“Privacy Request”**.
Timelines: acknowledge **within 7 days**; complete **within 30 days** (extendable once by **60 days** for complex cases).
You may also contact your data protection authority (e.g., **Datatilsynet** in Denmark).

**Store visitors (merchant = controller; Squishbit = processor)**
Contact the **merchant** (the store you visited). If you contact us, we will **forward your request to the merchant** and act on their instructions.

**Deletions we perform on a verified merchant request**
- **CDN logs**: auto-expire at **30 days**; where feasible, we can speed up store-scoped deletion (target **≤ 7 days**)
- **Edge cache**: purged within **24 hours** (may incur an extra charge)
- **Shopify access tokens**: revoked immediately; deleted within **24 hours**

## 7) California (CPRA)
For store-visitor data, Squishbit acts as a **service provider** to the merchant. We **do not sell or share** personal information (no cross-context behavioral advertising). California residents have access, deletion, and correction rights subject to legal exceptions.

## 8) De-identified/aggregated data
We may use **aggregated, de-identified** usage metrics (e.g., cache hit rates) to improve Squishbit and publish non-personal insights. We **do not** attempt to re-identify individuals.

## 9) Data Processing Terms (DPA)
When we act as a processor, our **Article 28 GDPR/UK GDPR** terms are incorporated into our **Terms** on installation. They cover processing scope, security, sub-processors, and transfer mechanisms (DPF/SCCs).

## 10) Changes to this policy
Material changes: we email merchants **≥14 days** in advance.
Non-material changes: effective on posting here.

---

## Appendix A — Sub-processors

We will give **30 days' notice** where required before adding or replacing sub-processors.

| Vendor | Purpose | Data categories | Location | Transfer basis | Notes/retention |
|---|---|---|---|---|---|
| **Amazon Web Services** (CloudFront, Lambda, Athena, CloudWatch) | CDN edge delivery; logging/ops | IP, headers (UA/Accept), URLs, referrers, timestamps, status codes; image variants at edge | Global edges; ops in **us-east-1** | DPF and/or SCCs | Logs ≤ **30 days**; cache TTL **24h** default, **365d** max |
| **Hetzner** (Postgres) | DB for **encrypted** Shopify access tokens; merchant metadata | Store ID, contact email, encrypted tokens | **Frankfurt, Germany** | EEA hosting | Tokens revoked on uninstall; deleted **≤24h** |
| **Cloudflare** (DNS only) | Authoritative DNS | DNS records (no customer PI) | Global | SCCs/DPF | DNS only; no traffic inspection |
| **Sentry (EU Cloud)** | Error monitoring | Minimal event metadata (stack traces, URLs, status codes); IPs/cookies redacted | **EU region** | SCCs | ~**30-day** retention; limited to engineering on-call |
| **Google Workspace/Gmail** | Email/support | Email content, headers | EU/US datacenters | DPF/SCCs | Standard mailbox retention |
| **Shopify** | App platform & billing | Merchant account/billing metadata via Shopify | Per Shopify | Per Shopify | We use Shopify Billing; no card storage by Squishbit |

*Last updated: August 4, 2025.*

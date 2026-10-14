# Gift Charitable Trust — Donation setup

The donation page is served at `/donate`. It supports one-time donations and monthly/yearly recurring checkout, with donor-selected areas of support. Checkout and payment signature verification run server-side through Vercel functions.

## Required Vercel environment variables

Set these for **Production** (and Preview if you intend to test there):

- `RAZORPAY_KEY_ID` — Razorpay API Key ID for the selected mode.
- `RAZORPAY_KEY_SECRET` — matching API Key Secret. Keep this server-side; never expose it in client-side code.

Use Razorpay **Test Mode** credentials first. Switch to Live Mode only after successful test payments and a review of the live account setup.

## Before enabling recurring donations

Razorpay recurring payments are an account feature that may need activation. Ask Razorpay to enable it for the account, then test the monthly and yearly subscription flow end-to-end. The website creates a plan for the amount/frequency selected and then creates a subscription.

## Important launch checks

1. Confirm the Razorpay account's KYC, settlement bank account and donation use case are approved.
2. Set environment variables in Vercel and redeploy.
3. Make a test one-time payment and verify the payment appears as **Captured** in Razorpay.
4. Test a monthly and yearly subscription with test-mode payment instruments.
5. Configure Razorpay webhooks for payment and subscription events if you want reliable server-side reconciliation and follow-up workflows.
6. Confirm receipt wording, tax-deductibility language and donor privacy policy with the Trust before publishing those claims.

The current code verifies one-time payment signatures and confirms the payment is captured. The website does not yet provide an internal donor-management dashboard, automated tax receipts, campaign-goal accounting or public live crowdfunding totals. Do not advertise those features until they are separately implemented and tested.

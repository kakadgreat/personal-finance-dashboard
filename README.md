# Personal Finance Dashboard

A starter Next.js dashboard tailored to your situation:
- Canton primary house
- Gordon Rd rental
- Macan loan
- recast planning
- partner capital scenario
- paydown vs. new-rental decision support

## What is included
- dashboard home
- accounts view
- transactions view
- cash flow planner
- reports view
- budget view
- recurring bills
- goals view
- investments/scenario comparison
- advice view
- deployment notes

## Quick start

### 1. Install Node.js
Install Node.js 20 or newer.

### 2. Open a terminal in this folder
Then run:

```bash
npm install
npm run dev
```

### 3. Open the app
Go to:

```text
http://localhost:3000
```

## Edit your numbers
Most starting values are in:
- `lib/data.ts`
- `components/DashboardApp.tsx`

## Recommended first edits
- change salary
- change Canton house value and mortgage
- change Gordon balance, rent, taxes, insurance
- change Macan value and loan
- change partner capital scenario
- replace placeholder transaction list with your own

## Deploy to Vercel
1. Create a GitHub repo.
2. Upload this project.
3. Go to Vercel.
4. Import the GitHub repo.
5. Accept defaults.
6. Click Deploy.

## Deploy to Netlify
1. Create a GitHub repo.
2. Upload this project.
3. Go to Netlify.
4. Add new project from Git.
5. Choose the repo.
6. Build command: `npm run build`
7. Publish directory: `.next`

Note: Vercel is simpler for Next.js. Netlify can still work.

## Future upgrades
- Supabase authentication
- Plaid account linking
- editable forms saved to a database
- CSV import
- mortgage amortization engine
- rental scenario tabs
- partner split math

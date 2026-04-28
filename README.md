# LSR Data Warehouse — AI & Patient Trust

Open-access data warehouse for the living systematic review:
**"Impact of Artificial Intelligence on Patient Trust in Physicians"**

Institute of Health Policy and Management, College of Public Health, National Taiwan University.

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Stack

React 19 + TypeScript + Vite + Tailwind CSS 4

## Structure

All review data lives in `src/data.ts` — update this file to populate the site with search rounds, extracted studies, and changelog entries as the review progresses.
